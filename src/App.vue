<template>
  <div id="app">
    <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/users/2">User 2</router-link>
    </div>
    <router-view/>
    </div>
  </div>
</template>

<style>
</style>
