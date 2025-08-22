<template>
  <div>
    <h1>Component Conteudo</h1>
    <p>Conteudo - Propriedade $style: {{ $style }}</p>
    <div :class="$style.teste">Class teste-1</div>
    <div :id="$style['teste-2']">ID teste-2</div>
    <home></home>
    <publicar-vaga></publicar-vaga>
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
  }
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