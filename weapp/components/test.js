"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入wepy
_core["default"].component({
  props: ['val']
}, {info: {"components":{},"on":{}}, handlers: {'17-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.$emit('update:val',$event.target.value)
      })();
    
  }}}, models: {} });