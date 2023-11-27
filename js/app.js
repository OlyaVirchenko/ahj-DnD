"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.regexp.exec.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _el = /*#__PURE__*/new WeakMap();
var _styles = /*#__PURE__*/new WeakMap();
var Card = /*#__PURE__*/function () {
  function Card(element) {
    _classCallCheck(this, Card);
    _classPrivateFieldInitSpec(this, _el, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _styles, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _el, element);
    _classPrivateFieldSet(this, _styles, window.getComputedStyle(element));
  }
  _createClass(Card, [{
    key: "clear",
    value: function clear() {
      _classPrivateFieldGet(this, _el).remove();
    }
  }, {
    key: "styles",
    get: function get() {
      return _classPrivateFieldGet(this, _styles);
    },
    set: function set(text) {
      _classPrivateFieldGet(this, _el).style.cssText = text;
    }
  }, {
    key: "proection",
    get: function get() {
      var _this = this;
      return function () {
        var d = document.createElement('div');
        d.classList.add('proection');
        var _this$styles = _this.styles,
          width = _this$styles.width,
          height = _this$styles.height;
        d.style.cssText = "\n                   width: ".concat(width, ";\n                   height: ").concat(height, ";\n                   margin: 10px 0;\n              ");
        return d;
      }();
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _el);
    }
  }], [{
    key: "create",
    value: function create(content) {
      var node = document.createElement('div');
      node.classList.add('draggable');
      node.textContent = content;
      return new Card(node);
    }
  }]);
  return Card;
}();
var Controller = /*#__PURE__*/function () {
  function Controller(container) {
    var _this2 = this;
    _classCallCheck(this, Controller);
    _defineProperty(this, "onMouseDown", function (evt) {
      var target = evt.target;
      if (target.classList.contains('draggable')) {
        _this2.shiftX = evt.offsetX;
        _this2.shiftY = evt.offsetY;
        _this2.setDraggingElement(target);
        _this2.draggingElement.style = "\n                   left: ".concat(evt.pageX - _this2.shiftX, "px;\n                   top: ").concat(evt.pageY - _this2.shiftY, "px;\n              ");
        _this2.proectionAct(evt);
      }
    });
    _defineProperty(this, "onMouseUp", function () {
      if (_this2.draggingElement) {
        _this2.replaceDragging();
        _this2.clear();
      }
    });
    _defineProperty(this, "onMouseMove", function (evt) {
      if (_this2.draggingElement) {
        var pageX = evt.pageX,
          pageY = evt.pageY;
        var element = _this2.draggingElement;
        var _this2$draggingElemen = _this2.draggingElement.styles,
          width = _this2$draggingElemen.width,
          height = _this2$draggingElemen.height;
        element.styles = "\n                  position: absolute;\n                   left: ".concat(pageX - _this2.shiftX, "px;\n                   top: ").concat(pageY - _this2.shiftY, "px;\n                   pointer-events: none;\n                  width: ").concat(width, ";\n                  height: ").concat(height, ";\n              ");
        _this2.proectionAct(evt);
      }
    });
    this.container = container;
    this.draggingElement = null;
    this.draggingProection = null;
  }
  _createClass(Controller, [{
    key: "init",
    value: function init() {
      this.container.append(Card.create(15).element);
    }
  }, {
    key: "setDraggingElement",
    value: function setDraggingElement(node) {
      this.draggingElement = new Card(node);
    }
  }, {
    key: "replaceDragging",
    value: function replaceDragging() {
      this.draggingProection.replaceWith(this.draggingElement.element);
      this.draggingElement.element.style = this.draggingElement.styles;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.draggingElement = null;
      this.draggingProection = null;
    }
  }, {
    key: "proectionAct",
    value: function proectionAct(evt) {
      var target = evt.target;
      var element = this.draggingElement;
      var proection = this.draggingProection;
      if (target.classList.contains('draggable') && !target.classList.contains('proection')) {
        var _target$getBoundingCl = target.getBoundingClientRect(),
          y = _target$getBoundingCl.y,
          height = _target$getBoundingCl.height;
        var appendPosition = y + height / 2 > evt.clientY ? 'beforebegin' : 'afterend';
        if (!proection) {
          this.draggingProection = element.proection;
        } else {
          proection.remove();
          target.insertAdjacentElement(appendPosition, proection);
        }
      }
    }
  }]);
  return Controller;
}();
var controller = new Controller(document.querySelector('.col'));
document.body.addEventListener('mousedown', controller.onMouseDown);
document.body.addEventListener('mouseup', controller.onMouseUp);
document.body.addEventListener('mousemove', controller.onMouseMove);
var inputInterface = function inputInterface() {
  var containers = document.querySelectorAll('.container');
  containers.forEach(function (container) {
    var openInputBtn = container.querySelector('.open-input-btn');
    var insertCardBtn = container.querySelector('.insert-card-btn');
    var input = container.querySelector('input');
    var col = container.querySelector('.col');
    container.addEventListener('click', function (ev) {
      var targetElement = ev.target;
      var closeBtn = document.createElement('span');
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
        var content = input.value;
        var newCard = Card.create(content);
        newCard.element.insertAdjacentElement('beforeend', closeBtn);
        col.insertAdjacentElement('beforeend', newCard.element);
        targetElement.classList.add('invisible');
        input.classList.add('invisible');
        openInputBtn.classList.remove('invisible');
        input.value = '';
      }
      var cards = document.querySelectorAll('.draggable');
      var closeBtns = document.querySelectorAll('.close-btn');
      _toConsumableArray(cards).forEach(function (card) {
        card.addEventListener('mouseover', function () {
          var closeButton = card.querySelector('.close-btn');
          closeButton.style.display = 'block';
        });
        card.addEventListener('mouseout', function () {
          var closeButton = card.querySelector('.close-btn');
          closeButton.style.display = 'none';
        });
      });
      _toConsumableArray(closeBtns).forEach(function (btn) {
        btn.addEventListener('click', function (ev) {
          ev.target.closest('.draggable').remove();
        });
      });
    });
  });
};
inputInterface();