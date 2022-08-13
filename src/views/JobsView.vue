<template>
  <div>
    <h1>Job Lists</h1>
    <div v-for="job in jobs" :key="job.id">
        <h4>{{ job.title }}</h4>
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

</style>