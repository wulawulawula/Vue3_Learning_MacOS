<template>
    <div class="person">
        <h2>有一辆{{ car.name }}车,价值{{ car.price }}万</h2>
        <button @click="changePrice">修改价值</button>
        <br>
        <h2>列表</h2>
        <ul>
            <li v-for=" item in games" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="changeFirstName">修改名称</button>
    </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue';
defineOptions({
    name: 'Person'
});

let car = ref({
    name: '奔驰',
    price: 100
})

let games = ref([
    {
        name: 'APEX',
        price: 100,
        id: 1
    },
    {
        name: 'League of Legends',
        price: 200,
        id: 2
    }
])


function changePrice() {
    car.value.price += 10
}

function changeFirstName(){
    games.value[0].name = 'Playerunknown\'s Battlegrounds'
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