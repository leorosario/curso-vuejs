<template>
    <div class="alert alert-success" role="alert">
        <slot name="titulo"></slot>
        <hr>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Alerta'
}
</script>