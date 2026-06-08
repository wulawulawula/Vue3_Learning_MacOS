<template>
    <div class="person">
        <h2>姓名:{{ person.name }}</h2>
        <h2>年龄:{{ person.age }}</h2>
        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人</button>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
defineOptions({
    name: 'Person'
});
let person = reactive({
    name: '张三',
    age: 18
})
function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age += 1
}

function changePerson() {
    Object.assign(person,{
        name: '李四',
        age: 20
    })
}
// watch监听reactive定义的复杂数据类型，默认开启深度监听
const stopWatch = watch(person, (newVal, oldVal) => {
    console.log('person发生了变化', newVal, oldVal);
    if (newVal.age >= 100) {
        stopWatch()
    }
})
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