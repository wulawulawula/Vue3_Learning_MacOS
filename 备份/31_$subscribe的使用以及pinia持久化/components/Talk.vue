<template>
    <div class="talk">
        <button @click="add">获取</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid';
import { useTalkStore } from '@/store/Talk';
defineOptions({
    name: 'Talk',
})
let talkList = useTalkStore().talkList
function add() {
    let obj = {
        id: nanoid(),
        content:nanoid()
    }
    talkList.unshift(obj);
}
useTalkStore().$subscribe(() => {
    localStorage.setItem('talkList',JSON.stringify(talkList))
})
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