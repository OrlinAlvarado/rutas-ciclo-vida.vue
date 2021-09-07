<template>
  <h1>About Page</h1>

  <h2>{{ name }}</h2>
  <button @click="onChangeName">
    Cambiar nombre
  </button>
</template>


<script>
export default {
  data() {
    return {
      name: 'Orlin'
    }
  },
  methods: {
    onChangeName(){
      this.name = 'Yaneth'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    this.name = 'David'
    console.log('created')

    //Peticiones HTTP
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  }

}
</script>

<style>

</style>