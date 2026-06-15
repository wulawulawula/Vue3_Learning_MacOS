<template>
    <Person ref="person" :list="personList" />
    <div class="routerView">
        <router-view></router-view>
    </div>
</template>


<script lang="ts" setup>
import Person from './components/Person.vue'
import { type personType } from '@/types'
import { ref } from 'vue';
defineOptions({
    name: 'App'
});

let personList:personType = [
    {
        name: '张三',
        age: 18,
        id: 'iauhfiahufiah01'
    },
    {
        name: '张三',
        age: 19,
        id: 'iauhfiahufiah02'
    },
    {
        name: '张三',
        age: 20,
        id: 'iauhfiahufiah03'
    }
]
</script>

<style scoped>
.routerView {
    margin: 20px;
    padding: 20px;
    border: 1px solid #000;
    min-height: 800px;
    border-radius: 16px;
}
</style>
