<template>
    <div class="person">
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <h2>年龄:{{ person.car.c1 }}</h2>
        <h2>年龄:{{ person.car.c2 }}</h2>

        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改C1</button>
        <button @click="changeC2">修改C2</button>
        <button @click="changeCar">修改Car</button>

    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
defineOptions({
    name: 'Person'
});
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})
function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age += 1
}

function changeC1() {
    person.car.c1 = '奥迪'
}

function changeC2() {
    person.car.c2 = '大众'
}

function changeCar() {
    person.car = {
        c1: 'BYD',
        c2: '特斯拉'
    }
}
// 监听reactive定义的对象中的某一个值，且值是简单数据类型，需要使用getter函数返回要监听的值
watch(() => person.name, () => {
    console.log('name发生了变化');
})
// 监听reactive定义的对象中的某一个值，且值是复杂数据类型，可以使用getter函数返回要监听的值，并且开启deep监听，此时无论是对象内部的属性值发生变化，还是对象地址值发生变化，都会触发监听
// 也可以直接监听对应的属性值，此时只有内部属性值发生变化，才会触发监听，整体替换对象地址值发生变化，不会触发监听
watch(() => person.car, () => {
    console.log('car发生了变化');
}, {deep: true})
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