<template>
    <div class="newsList">
        <ul>
            <li>title:{{ title }}</li>
            <li>content:{{ content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

defineOptions({
    name: 'Detail'
});
defineProps(['id','title','content'])
</script>

<style scoped>
.newsList {}
</style>