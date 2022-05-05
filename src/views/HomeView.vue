<template>
  <div class="home">
    <nav>
      <router-link to="/">menu</router-link> <br>
      <router-link to="/about">About</router-link> <br>
      <router-link to="/table">table</router-link><br>
      <router-link to="/editor">editor</router-link>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import SearchComponent from './home/SearchComponent.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    // SearchComponent
  }
}
</script>
