<!--
 * @Description:vue3.0 demo
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-04-28 09:21:07
 * @LastEditors: Wsl
 * @LastEditTime: 2020-07-16 09:41:03
 -->
<template>
  <div>
    <h1>test count: {{count}}</h1>
    <h1>test count*2={{doubleCount}}</h1>
    <h1>state form vuex {{a}}</h1>
    <button @click="add">addCount</button>
    <button @click="update">update a</button>
    <div ref="root">123123</div>
  </div>
</template>

<script>
import {
  ref,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
  getCurrentInstance
} from "vue";

export default {
  setup(props, context) {
    //获取上下文
    const { ctx } = getCurrentInstance();
    console.log(ctx);
    console.log(ctx.$router.currentRoute);
    console.log(context);
    const count = ref(1); //vue3.0定义变量 ref
    const add = _ => {
      count.value++;
    };
    const update = _ => {
      ctx.$store.commit("setTestA", doubleCount.value);
    };
    //watch接受俩个函数，第一个被监听的函数，第二个监听函数改动的回调
    watch(
      _ => count.value,
      val => {
        console.log(`count is ${val}`);
      }
    );
    const doubleCount = computed(_ => count.value * 2);

    const a = computed(_ => ctx.$store.state.test.a);
    //监听所有响应数据变化执行函数
    const we = watchEffect(() => console.log(count.value));
    //获取el实例
    const root = ref(null);
    //生命周期钩子
    onMounted(() => {
      console.log("钩子: mounted --> onMounted");
      console.log(root.value);
    });
    onUnmounted(() => {
      console.log("钩子: destroyed --> onUnmounted");
    });

    return {
      root,
      count,
      doubleCount,
      a,
      add,
      update,
      watch
    };
  }
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>
