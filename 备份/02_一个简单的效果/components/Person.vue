<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">显示电话</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '13888888888'
        }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        changeName() {
            this.name = 'zhang-san'
        },
        changeAge() {
            this.age += 1
        },
    }
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