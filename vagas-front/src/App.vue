<template>
  <div>
    <h1>Component App</h1>
    <button @click="desmontarComponente()">Desmontar o componente Conteudo</button>
    <topo-padrao :funcaoCallback="acao"/>
    <conteudo v-if="visibilidade"></conteudo>
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true
  }),
  methods: {
    desmontarComponente(){
      this.visibilidade = false;
    },
    acao(p1, p2) {
      console.log('Função de callback definida no componente Pai e chamada no componente Filho');
      console.log("P1: ", p1);
      console.log("P2: ", p2);
    }
  },
  components: {
    Conteudo,
    TopoPadrao
  }
}
</script>

<style scoped>

</style>
