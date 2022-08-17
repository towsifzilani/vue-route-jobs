<template>
  <h1>
    {{ job.title }}
  </h1>
  <p>
    {{ job.details }}
  </p>
  <p>The Job id is: {{ id }}</p>
</template>

<script>
export default {
    props: [ "id" ],
    data() {
        return {
            job: null
        }
    },
    mounted() {
      console.log(job)
      fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>