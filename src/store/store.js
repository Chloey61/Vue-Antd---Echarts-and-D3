//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

/*
1、this.$store ： 我们可以通过 this.$store 在vue的组件中获取
vuex的实例。

2、State ： vuex中的数据源，我们可以通过 this.$store.state 获取
我们在vuex中声明的全局变量的值。

3、Getter： 相当于vue中的computed ， 及 计算属性， 可以用于监听、
计算 state中的值的变化

4、Mutation： vuex中去操作数据的方法 （只能同步执行）

5、Action： 用来操作 Mutation 的动作 ， 他不能直接去操作数据源，
但可以把mutation变为异步的

6、Module： 模块化，当你的应用足够大的时候，你可以把你的vuex分成多个
子模块
*/




/*
  state访问状态对象
  学习状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值。有三种赋值方式
  * 通过computed的计算属性直接赋值
  * 通过mapState的对象来赋值
  * 通过mapState的数组来赋值
*/
const state = {
  count:1
}

// 方法
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count-=1;
  }
}

const getters = {
  count:function(state){
    return state.count +=100;
  }
}

const actions ={
  addAction(context) {
    setTimeout(() => {
      context.commit('add', 10)
    }, 3000)
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

// 声明对象
export default new Vuex.Store({
  state,mutations,getters,actions
});
