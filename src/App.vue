<template>
  <div id="app">
    <message></message>
    <keyboard></keyboard>
  </div>
</template>

<script>
  import Keyboard from './components/Keyboard.vue';
  import Message from './components/Message.vue';

  export default {
    name: 'app',
    components: {
        Keyboard,
        Message
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
