<template>
    <div class="count">
        <h2>当前求和为:{{ countStore.count }}</h2>
        <div class="btnArea">
            <select v-model.number="sum">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <button @click="add">+</button>
            <button @click="minus">-</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCountStore } from '@/store/Count';
defineOptions({
    name: 'Count',
})

let countStore = useCountStore();
let sum = ref(1);

function add() {
    // useCountStore().add(sum.value);
}

function minus() {
    // useCountStore().minus(sum.value);
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: 0 0 8px;
    padding: 10px;
}

select,
button {
    margin: 0 10px;
    height: 24px;
    width: 30px;
}
</style>