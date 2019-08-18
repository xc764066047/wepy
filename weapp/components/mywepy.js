"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 导入axios依赖
// import axios from '~@/module/axios';
// wepy.use(axios);
_core["default"].component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持

  },
  // 通过props接收父组件传递过来的值
  props: {
    mynum: {
      type: Number,
      twoWay: true // 当为true时，子组件的值改变，父组件也会跟着改变

    }
  },
  data: {
    message: '',
    list: [],
    list_1: []
  },
  methods: {
    addList: function addList() {
      this.list_1.push(this.message);
      this.list = _toConsumableArray(this.list_1);
      this.message = null;
    },
    delList: function delList(index) {
      this.list_1.splice(index, 1);
      this.list = _toConsumableArray(this.list_1);
    },
    add2: function add2() {
      this.mynum += 2;
      wx.request({
        url: 'https://m.lagou.com/listmore.json?pageNo=2&pageSize=15',
        //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值

        },
        success: function success(res) {
          console.log(res);
        }
      });
    },
    send: function send() {
      // 触发父组件监听器,child_send是父组件中监听器的名字，this.mynum是传递给父组件监听器方法的值
      this.$emit('child_send', this.mynum);
    }
  },
  computed: {
    age: function age() {
      return this.mynum >= 18 ? '楼上男宾两位' : '回家找你麻麻吃饭去!';
    }
  },
  //   watch是监听方法，可以监听数据的改变
  watch: {
    mynum: function mynum(newNum, oldNum) {
      console.log('新数据是' + newNum, '旧数据是' + oldNum);
    }
  },
  // 生命周期，监听页面加载
  onLoad: function onLoad() {
    axios.get('https://m.lagou.com/listmore.json?pageNo=2&pageSize=15').then(function (res) {
      console.log(res);
    });
  }
}, {info: {"components":{},"on":{}}, handlers: {'16-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addList($event)
      })();
    
  }},'16-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.delList(_vm.$index)
      })();
    
  }},'16-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.add2($event)
      })();
    
  }},'16-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.send($event)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "message",
      handler: function set ($v) {
      var _vm=this;
        _vm.message = $v;
      
    }
    }} });