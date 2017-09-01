<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  width: 500px;
  padding: 16px;
  border: 2px solid #2196F3;

  background-color: #BBDEFB;
  color: #212121;
}

.button {
  display: inline-block;
  min-width: 64px;
  min-height: 32px;
  padding: 5px;

  font-size: 0.8em;
  color: #fff;
  background-color: #2196F3;
  border: none;
}

.button:active {
  outline: none;
  border: 2px solid #795548;
}

.button:hover {
  background-color: #1976D2;
}

.danger {
  background-color: #f00;
}

.danger:hover {
  background-color: #c00;
}

</style>
