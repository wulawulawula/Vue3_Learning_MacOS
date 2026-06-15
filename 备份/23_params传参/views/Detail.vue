<template>
    <div class="newsList">
        <ul>
            <li>title:{{ params.title }}</li>
            <li>content:{{ params.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { toRefs } from 'vue';
defineOptions({
    name: 'Detail'
});
const route = useRoute()
const { params } = toRefs(route)
</script>

<style scoped>
.newsList {}
</style>