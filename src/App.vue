<template>
  <div id="app">
    <div class="container">
      <FormComponent class="mb-5"/>
      <TableComponent/>
    </div>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'
import TableComponent from './components/TableComponent.vue'

export default {
  name: 'App',
  components: {
    FormComponent,
    TableComponent
  },
  data() {
    return {
    }
  },
  methods: {

  },
}
</script>

<style>
#app {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
}
</style>
