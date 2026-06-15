<template>
    <div class="person">
        <div class="btnArea">
            <router-link to="/about" active-class="activeClass">About</router-link>
            <router-link to='/home' active-class="activeClass">Home</router-link>
            <router-link to="/news" active-class="activeClass">News</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useDogs from '@/hooks/useDogs';
import useSum from '@/hooks/useSum';
let { sum, bigSum, add } = useSum();
let { dogList, getDogs } = useDogs();
defineOptions({
    name: 'Person'
});
</script>

<style scoped>
.btnArea {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    border: 1px solid #000;
    border-radius: 16px;
}
.activeClass {
    color: red;
}
</style>