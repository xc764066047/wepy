"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  // props，传值
  props: {
    mynum: {
      type: Number,
      // 这个值是数字类型（也可以是String、Boolean类型），默认值为0
      twoWay: true // 意思是子组件的值改变了，父组件的值也会更改,

    }
  },
  data: {
    count: 0
  },
  methods: {
    cons: function cons() {
      console.log(123);
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'15-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.count++
      })();
    
  }}}, models: {} });