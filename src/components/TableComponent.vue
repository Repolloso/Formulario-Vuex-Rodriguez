<template lang="html">

  <section class="table-componente card">
    <h1 class="text-center border py-3">Usuarios Registrados</h1>
    <table class="table text-dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Password</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.country }}</td>
        </tr>
      </tbody>
    </table>
  </section>

</template>

<script lang="js">
  import { mapGetters } from 'vuex'

  export default  {
    name: 'table-componente',
    props: {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters({
        users: 'showUsers'
      })
    },
}


</script>

<style scoped>

</style>
