<template>
    <div class="person">
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">修改sum</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
defineOptions({
    name: 'Person'
});
let sum = ref(0)
function changeSum(){
    sum.value ++;
}
const stopWatch = watch(sum,(newVal,oldVal) => {
    console.log('sum发生了变化',newVal,oldVal);
    if(newVal >= 10){
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