class Card {
  #el;

  #styles;

  constructor(element) {
    this.#el = element;
    this.#styles = window.getComputedStyle(element);
  }

  clear() {
    this.#el.remove();
  }

  set styles(text) {
    this.#el.style.cssText = text;
  }

  get styles() {
    return this.#styles;
  }

  get proection() {
    return (() => {
      const d = document.createElement('div');
      d.classList.add('proection');
      const { width, height } = this.styles;
      d.style.cssText = `
                   width: ${width};
                   height: ${height};
                   margin: 10px 0;
              `;
      return d;
    })();
  }

  static create(content) {
    const node = document.createElement('div');
    node.classList.add('draggable');
    node.textContent = content;

    return new Card(node);
  }

  get element() {
    return this.#el;
  }
}

class Controller {
  constructor(container) {
    this.container = container;

    this.draggingElement = null;

    this.draggingProection = null;
  }

  init() {
    this.container.append(Card.create(15).element);
  }

  setDraggingElement(node) {
    this.draggingElement = new Card(node);
  }

  replaceDragging() {
    this.draggingProection.replaceWith(this.draggingElement.element);
    this.draggingElement.element.style = this.draggingElement.styles;
  }

  clear() {
    this.draggingElement = null;
    this.draggingProection = null;
  }

  onMouseDown = (evt) => {
    const { target } = evt;

    if (target.classList.contains('draggable')) {
      this.shiftX = evt.offsetX;
      this.shiftY = evt.offsetY;
      this.setDraggingElement(target);
      this.draggingElement.style = `
                   left: ${evt.pageX - this.shiftX}px;
                   top: ${evt.pageY - this.shiftY}px;
              `;
      this.proectionAct(evt);
    }
  };

  onMouseUp = () => {
    if (this.draggingElement) {
      this.replaceDragging();
      this.clear();
    }
  };

  proectionAct(evt) {
    const { target } = evt;
    const element = this.draggingElement;
    const proection = this.draggingProection;
    if (
      target.classList.contains('draggable')
              && !target.classList.contains('proection')
    ) {
      const { y, height } = target.getBoundingClientRect();
      const appendPosition = y + height / 2 > evt.clientY
        ? 'beforebegin'
        : 'afterend';

      if (!proection) {
        this.draggingProection = element.proection;
      } else {
        proection.remove();
        target.insertAdjacentElement(appendPosition, proection);
      }
    }
  }

  onMouseMove = (evt) => {
    if (this.draggingElement) {
      const { pageX, pageY } = evt;
      const element = this.draggingElement;
      const { width, height } = this.draggingElement.styles;
      element.styles = `
                  position: absolute;
                   left: ${pageX - this.shiftX}px;
                   top: ${pageY - this.shiftY}px;
                   pointer-events: none;
                  width: ${width};
                  height: ${height};
              `;
      this.proectionAct(evt);
    }
  };
}

const controller = new Controller(document.querySelector('.col'));

document.body.addEventListener('mousedown', controller.onMouseDown);
document.body.addEventListener('mouseup', controller.onMouseUp);
document.body.addEventListener('mousemove', controller.onMouseMove);

const inputInterface = () => {
  const containers = document.querySelectorAll('.container');

  containers.forEach((container) => {
    const openInputBtn = container.querySelector('.open-input-btn');
    const insertCardBtn = container.querySelector('.insert-card-btn');
    const input = container.querySelector('input');

    const col = container.querySelector('.col');

    container.addEventListener('click', (ev) => {
      const targetElement = ev.target;
      const closeBtn = document.createElement('span');
      closeBtn.classList.add('close-btn');
      closeBtn.textContent = 'x';

      if (targetElement.classList.contains('open-input-btn')) {
        targetElement.classList.add('invisible');
        input.classList.remove('invisible');
        insertCardBtn.classList.remove('invisible');
      }

      if (targetElement.classList.contains('insert-card-btn')) {
        if (input.value === '') {
          insertCardBtn.classList.add('invisible');
          input.classList.add('invisible');
          openInputBtn.classList.remove('invisible');
          return;
        }

        const content = input.value;
        const newCard = Card.create(content);

        newCard.element.insertAdjacentElement('beforeend', closeBtn);
        col.insertAdjacentElement('beforeend', newCard.element);

        targetElement.classList.add('invisible');
        input.classList.add('invisible');
        openInputBtn.classList.remove('invisible');

        input.value = '';
      }

      const cards = document.querySelectorAll('.draggable');
      const closeBtns = document.querySelectorAll('.close-btn');

      [...cards].forEach((card) => {
        card.addEventListener('mouseover', () => {
          const closeButton = card.querySelector('.close-btn');
          closeButton.style.display = 'block';
        });

        card.addEventListener('mouseout', () => {
          const closeButton = card.querySelector('.close-btn');
          closeButton.style.display = 'none';
        });
      });

      [...closeBtns].forEach((btn) => {
        btn.addEventListener('click', (ev) => {
          ev.target.closest('.draggable').remove();
        });
      });
    });
  });
};

inputInterface();
