<template>
  <div>
    <h1>Component App</h1>
    <topo-padrao/>
    <conteudo></conteudo>
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style scoped>

</style>
