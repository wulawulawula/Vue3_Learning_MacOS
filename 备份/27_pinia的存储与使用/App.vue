<template>
    <div class="">
        <Count />
        <Talk />
    </div>
</template>

<script lang="ts" setup>
import Count from './components/Count.vue';
import Talk from './components/talk.vue';
defineOptions({
    name: 'App',
})
</script>

<style scoped></style>