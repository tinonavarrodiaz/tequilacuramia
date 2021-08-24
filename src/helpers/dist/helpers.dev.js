"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _aos = _interopRequireDefault(require("aos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AOSInit = function AOSInit() {
  _aos["default"].init({
    easing: 'ease-out-back',
    duration: 1200,
    // startEvent: 'DOMContentLoaded',
    startEvent: 'load',
    useClassNames: true,
    mirror: true,
    once: false
  });
};

var _default = AOSInit;
exports["default"] = _default;