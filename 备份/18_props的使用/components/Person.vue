<template>
    <div class="person">
        <ul>
            <li v-for="item in y.list" :key="item.id">{{ item.name }} -- {{ item.age }}</li>
        </ul>
        <button @click="test">test</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { type PersonInter, type Persons, type personType } from '@/types'
defineOptions({
    name: 'Person'
});
// let x = defineProps(['list'])

// let x = defineProps<{list:personType}>()

let y = withDefaults(defineProps<{ list?: personType }>(), {
    list: () => [{ name: '默认姓名', age: 20, id: 'default' }]
})


// let z = withDefaults(defineProps<{list?:Persons}>(),{
//     list:() => [{ name: '默认姓名', age: 20, id: 'default' }]
// })
function test() {
    // console.log(x);
    console.log(y);
}
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