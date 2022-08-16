<template>
  <nav id="nav">
    <router-link to="/" class="active">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> | 
    <router-link :to="{ name: 'Contacts' }">Contacts</router-link> | 
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="goback">Go Back</button>
  <button @click="forward">Forward</button>
  <router-view/>
</template>


<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'home'})
      },
      goback() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)

      },
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
