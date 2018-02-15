<template>
  <div id="app">
    <h2>Spanish Keyboard</h2>

    <vue-keyboard>
      <input slot-scope="props" type="text" v-model="props.content"/>
    </vue-keyboard>

  </div>
</template>

<script>
  import VueKeyboard from './components/VueKeyboard.vue';

  export default {
      name: 'app',
      components: {
          VueKeyboard
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
