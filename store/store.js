//在这个JS文件中，专门来创建store的实例对象
import {action, observable} from 'mobx-miniprogram'

export const store = observable({
  numA: 1,
  numB: 2,
  get sum(){
    return this.numA + this.numB
  },

  updateNum1: action(function (step){
    this.numA += step
  }),

  updateNum2: action(function (step){
     this.numB += step
  })
})