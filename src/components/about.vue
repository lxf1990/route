<template>
  <div>
    <h2>About</h2>
    <input type="text">
    <ul class="nav nav-tabs">
      <li><router-link to="/about/news">News</router-link></li>
      <li><router-link to="/about/message">Message</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
    export default {}
</script>
<style>

</style>
