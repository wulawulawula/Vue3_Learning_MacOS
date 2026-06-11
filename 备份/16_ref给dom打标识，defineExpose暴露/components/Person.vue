<template>
    <div class="person">
        <h2 ref="title">{{a}}</h2>
        <button @click="showLog">打印dom</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
defineOptions({
    name: 'Person'
});

const title = ref(null)
let a = ref(0)
function showLog(){
    console.log(title.value);
}

defineExpose({ a })
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