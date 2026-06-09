<template>
    <div class="person">
        <h2>温度:{{ temp }}</h2>
        <h2>水位:{{ height }}</h2>

        <button @click="addTemp">增加温度</button>
        <button @click="addHeight">增加水位</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch,watchEffect } from 'vue';
defineOptions({
    name: 'Person'
});

let temp = ref(0)
let height = ref(10)
let count = ref(0)
function addTemp(){
    temp.value += 10
}
function addHeight(){
    height.value += 10
}
// watchEffect会立即执行一次，并且自动追踪其内部使用到的响应式数据，当这些数据发生变化时，会重新执行watchEffect内部的函数
watchEffect(() => {
    count.value++
    console.log("watchEffect执行")
    if(temp.value > 60 || height.value > 100){
        console.log('温度或水位过高了');
    }
})

// watch([temp,height],() => {
//     if(temp.value > 60 || height.value > 100){
//         console.log('温度或水位过高了');
//     }
// })

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