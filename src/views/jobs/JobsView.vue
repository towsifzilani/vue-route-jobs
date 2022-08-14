<template>
  <div>
    <h1>Job Lists</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobsDetails', params:{ id: job.id } }">
            <h2>{{ job.title }}</h2>
            <p></p>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs:[
                {id: 1, title:"First Job", details: 'lorem 1'},
                {id: 2, title:"second Job", details: 'lorem 2'},
                {id: 3, title:"third Job", details: 'lorem 3'}
            ]
        }
    }
}
</script>

<style>

  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }

</style>