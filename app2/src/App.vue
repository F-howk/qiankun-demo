<template>
<div>
  <router-view />
  <p>11111111111111111111</p>
  <router-link to="/app2/">xxx</router-link>
</div>
</template>
<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  created(){
    console.log('--------------',window.__POWERED_BY_QIANKUN__)
  }
})
</script>
