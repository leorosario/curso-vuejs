<template>
  <div>
    
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"/>
    <alerta v-if="exibirAlerta">    
      <template v-slot:titulo>
          <h5>Título do alerta</h5>
      </template>     
      <p>Descrição do alerta</p> 
    </alerta>
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Alerta from '@/components/comuns/Alerta.vue'
import Conteudo from '@/components/layouts/Conteudo.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false
  }),
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
    Alerta
  },
  mounted() {
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true;
      setTimeout(() => {
        this.exibirAlerta = false
      }, 4000);
      console.log("Apresentar a mensagem de alerta customizada");
    });
  }
}
</script>

<style scoped>

</style>
