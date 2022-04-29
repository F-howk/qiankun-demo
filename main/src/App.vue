<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about/app1">About</router-link> |
    <button @click="go">xxx</button>
  </nav>
  <div id="app1"></div>
  <router-view/>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    go(){
      this.$router.push("/app1/")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
