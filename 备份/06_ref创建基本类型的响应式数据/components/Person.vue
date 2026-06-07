<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">显示电话</button>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
defineOptions({
    name: 'Person'
});
let name = ref('李四')
let age = ref(18)

console.log(name,age)
let tel = '13888888888'

function changeName() {
    name.value = 'zhang-san'
    console.log(name)
}

function changeAge() {
    age.value += 1
}

function showTel() {
    alert(tel)
    console.log(name)
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
</style>