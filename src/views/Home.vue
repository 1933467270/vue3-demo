<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-04-27 17:56:50
 * @LastEditors: Wsl
 * @LastEditTime: 2020-07-16 08:48:12
--> 
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    hello vue3！！
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
};
</script>
