<template>
    <div class="newsList">
        <ul>
            <li>title:{{ query.title }}</li>
            <li>content:{{ query.content }}</li>
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
const { query } = toRefs(route)
</script>

<style scoped>
.newsList {}
</style>