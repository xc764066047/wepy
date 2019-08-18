"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _eventHub = _interopRequireDefault(require('../common/eventHub.js'));

var _x = require('../vendor.js')(4);

var _store = _interopRequireDefault(require('../store/index.js'));

var _test = _interopRequireDefault(require('../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {
      if (Math.random() < 0.2) {
        console.log('setData canceled');
        return false; // Cancel setData
      }

      dirty.time = +new Date();
      return dirty;
    }
  },
  mixins: [_test["default"]],
  data: {
    inputmodel: 'v-model',
    mynum: 10 // 传递给子组件
    // name:'linda'

  },
  computed: {},
  methods: {
    // 子组件触发的方法
    receive: function receive(item) {
      // console.log(item);
      this.mynum = item; // console.log(this.mynum);
    },
    plus: function plus() {
      this.mynum++;
    }
  },
  created: function created() {}
}, {info: {"components":{"list":{"path":"..\\components\\wepy-list"},"group":{"path":"..\\components\\group"},"panel":{"path":"..\\components\\panel"},"counter":{"path":"..\\components\\counter"},"myone":{"path":"..\\components\\myone"},"mywepy":{"path":"..\\components\\mywepy"},"child":{"path":"..\\components\\test"},"slide-view":{"path":"..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{"7-1":["child_send"]}}, handlers: {'7-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.plus($event)
      })();
    
  }},'7-1': {"child_send": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.receive($event)
      })();
    
  }}}, models: {} });