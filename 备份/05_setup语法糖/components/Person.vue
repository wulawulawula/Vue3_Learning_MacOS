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
defineOptions({
    name: 'Person'
});
let name = '李四'
let age = 18
let tel = '13888888888'

function changeName() {
    name = 'zhang-san'
    console.log(name)
}

function changeAge() {
    age += 1
}

function showTel() {
    alert(tel)
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