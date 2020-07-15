<!--
 * @Description:鼠标移入
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-05-06 11:41:34
 * @LastEditors: Wsl
 * @LastEditTime: 2020-05-07 16:32:16
 -->
<template>
  <div>
    <p>Mouse Position:</p>
    <p>x:{{ x }},y:{{ y }}</p>
    <input v-model="text" />
  </div>
</template>

<script>
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  getCurrentInstance
} from "vue";
import useMouse from "../_utils/listenMouse";
import useDebouncedRef from "../_utils/DebouncedRef";
export default {
  name: "ListenMouse",
  setup() {
    let { x, y } = useMouse();
    //节流函数
    let text = ref(useDebouncedRef("", 1000));
    //监听输入框
    const stop = watch(
      () => text.value,
      (textValue, prevTextValue) => {
        console.log("重新查询数据");
      }
    );
    return {
      watch,
      x,
      y,
      text
    };
  }
};
</script>

<style>
</style>