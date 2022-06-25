<script setup lang="ts"></script>

<template>
  <div class="container-div">
    <a href="#" @click.prevent v-ripple class="button">button</a>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container-div {
  max-width: 300px;
}

.button {
  transition: background 400ms;
  color: #fff;
  background-color: #8e5bed;
  padding: 1rem 2rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  text-decoration: none;
}
</style>
