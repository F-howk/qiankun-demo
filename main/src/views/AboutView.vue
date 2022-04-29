<template>
  <div id="abouts" class="about">
    <h1>This is an about page</h1>
    <div id="about"></div>
  </div>
</template>
<script>
import { start } from "qiankun";
export default {
  mounted() {
    if(!window.qiankunStarted){
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>
