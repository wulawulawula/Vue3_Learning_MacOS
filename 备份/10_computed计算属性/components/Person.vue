<template>
    <div class="person">
        姓：<input type="text" v-model="firstName">
        名：<input type="text" v-model="lastName">
        <h2>姓名:{{ fullName }}</h2>
        <button @click="changeName">更改名字</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
defineOptions({
    name: 'Person'
});
let firstName = ref('zhang')
let lastName = ref('san')
const fullName = computed({
    get(){
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    set(val){
        const [firstNameStr, lastNameStr] = val.split('-')
        return firstName.value = firstNameStr, lastName.value = lastNameStr
    }
})

const changeName = function(){
    fullName.value = 'li-si'
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