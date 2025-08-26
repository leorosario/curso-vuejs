<template>
  <div>
    <h1>{{titulo}}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!-- renderizar de modo dinâmico os componentes home e publica-vaga -->
    <!-- <home></home>
    <publicar-vaga></publicar-vaga> -->
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/views/Home.vue';
import PublicarVaga from '@/components/views/PublicarVaga.vue';
export default{
  name: 'Conteudo',
  components: {
    Home,
    PublicarVaga
  },
  data: () => ({
    teste: 'O component foi criado',
    titulo: 'Component Conteudo',
    conteudo: 'home'
  }),
  methods: {
    atualizarComponente(){
      this.titulo += '*';
    }
  },
  /*
  beforeCreate(){
    console.log('Antes de criar', this.teste);
  },  
  created(){
    console.log('Criado', this.teste);
  },
  beforeMount(){
    console.log('Antes de montar o template');
  },
  mounted(){
    console.log('Montado');
  },
  beforeUpdate(){
    console.log('Antes de atualizar');
  },
  updated(){
    console.log('Atualizado');
  },  
  beforeUnmount(){
    console.log('Antes de demonstar/destruir');
  },
  unmounted(){
    console.log('Demonstado/destruído');
  },  
  errorCaptured(){
    console.log('Erro capturado');
  },
  renderTracked(){
    console.log('Re-renderização rastreada');
  },
  renderTriggered(){
    console.log('Re-renderização acionada');
  },
  activated(){
    console.log('Componente é ativado');
  },
  deactivated(){
    console.log('Component é desativado');
  }*/
}
</script>

<style module>
.teste{
  background-color: red;
}
#teste-2{
  background-color: yellow;
}
</style>