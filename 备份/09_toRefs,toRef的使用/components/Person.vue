<template>
    <div class="person">
        <h2>这是一辆{{ car.brand }}车，价值{{ car.price }}</h2>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changePrice">修改价格</button>
        <h2>这是结构的数据</h2>
        <h2>这是一辆{{ brand }}车，价值{{ price }}</h2>
    </div>
</template>

<script lang="ts" setup>
import {ref , reactive, toRefs,toRef } from 'vue';
defineOptions({
    name: 'Person'
});
const car = reactive({
    brand: 'BMW',
    price: 100000,
});

let { brand, price } = toRefs(car)
let brandRef = toRef(car,'brand')
// 如果想要结构ref定义的对象,需要在ref对象上加.value,才能拿到ref包裹的对象,才能进行结构
// const car = ref({
//     brand: 'BMW',
//     price: 100000,
// });

// let { brand, price } = toRefs(car.value)


function changeBrand() {
    brand.value += '~';
}

function changePrice() {
    price.value += 10000;
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    padding: 20px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}

button {
    margin: 0 10px;
}

li {
    font-size: 20px;
}
</style>