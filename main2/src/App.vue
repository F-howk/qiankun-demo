<template>
  <div>
    <router-link to="/">home</router-link> |
    <router-link to="/page">page</router-link> |
    <router-link to="/app1">app1</router-link> |
    <router-link to="/app2/">app2</router-link>
    <div id="about"></div>
    <div id="abouts"></div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
