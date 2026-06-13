<template>
    <div class="person">
        <h2>当前求和为:{{ sum }},放大10倍后为:{{ bigSum }}</h2>
        <button @click="add">sum+1</button>
        <br>
        <img v-for="(pic,index) in dogList" :key="index" :src="pic">
        <button @click="getDogs">dogs +1</button>
    </div>
</template>

<script lang="ts" setup>
import useDogs from '@/hooks/useDogs';
import useSum from '@/hooks/useSum';
let { sum, bigSum, add } = useSum();
let { dogList, getDogs } = useDogs();
defineOptions({
    name: 'Person'
});
</script>

<style scoped>
.person {
    background-color: skyblue;
    padding: 20px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    margin: 20px 0;
}

button {
    margin: 0 10px;
}

li {
    font-size: 20px;
}

img {
    width: 100px;
}
</style>