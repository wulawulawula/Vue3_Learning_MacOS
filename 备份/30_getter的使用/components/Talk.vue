<template>
    <div class="talk">
        <button @click="">获取</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/Talk';
defineOptions({
    name: 'Talk',
})
let talkList = useTalkStore().talkList
// async function getNew() {
//     const { data:{content} } = await axios.get('https://api.uomg.com/api/rand/qinghau?format=json');
//     let obj = {
//         id: nanoid(),
//         content
//     }
//     talkList.value.unshift(obj);
// }
</script>

<style scoped>
.talk {
    background-color: orange;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: 0 0 8px;
    padding: 10px;
    margin-top: 30px;
}
</style>