<template>
    <div class="count">
        <h2>当前求和为:{{ count }}</h2>
        <h2>两倍数值为:{{ doubleCount }}</h2>
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
import { storeToRefs } from 'pinia';
defineOptions({
    name: 'Count',
})
// 使用storeToRefs将store中的属性转换为响应式数据,不使用直接解构赋值会丢失数据的响应式
let countStore = useCountStore();
let { count,doubleCount } = storeToRefs(countStore);
let sum = ref(1);
countStore.$subscribe((mutate,state) => {
    console.log('@@@@@数据发生了变化',mutate,state)
})
function add() {
    countStore.increment(sum.value);
}

function minus() {
    // useCountStore().minus(sum.value);
    // 第一种修改方法，直接改
    countStore.count -= sum.value;


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