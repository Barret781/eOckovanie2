<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

export default {

  name: 'App',
  components: {

  }

}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

</style>
