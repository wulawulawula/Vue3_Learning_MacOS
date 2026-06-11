<template>
    <div class="person">
        ???
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { type PersonInter, type Persons, type personType } from '@/types'
defineOptions({
    name: 'Person'
});
const person: PersonInter = {
    name: '张三',
    age: 18,
    id: 'iauhfiahufiah01'
}

const personList: Persons = [
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah01'
    },
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah02'
    },
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah03'
    }
]


const personArray:personType = [
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah01'
    },
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah02'
    },
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah03'
    }
]

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
</style>