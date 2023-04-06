<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ legenda }}</h2>
    <input type="text" :value="legenda">
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data: () => {
    return {
      legenda: 'Estou no Vue'
    }
  }

}
</script>

<style>
 h1 {
  border: 2px solid;
 }

</style>