// component/number/number.js
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'

Component({
  behaviors: [storeBindingsBehavior], //通过storeBindingsBehavior来实现自动绑定
  storeBindings: {
    //数据源
    store, //指定要绑定的store
    fields:{ //指定要绑定的对象数据
      numA: () => store.numA, //绑定字段的第一种方式
      numB: (store) => store.numB, //绑定字段的第二种方式
      sum: 'sum' //绑定字段的第三种方式
    },
    actions: {
      updateNum1: 'updateNum1',
      updateNum2: 'updateNum2'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandle1(e){
      this.updateNum1(e.target.dataset.step)
    },
    btnHandle2(e){
      this.updateNum2(e.target.dataset.step)
    }
  }
})