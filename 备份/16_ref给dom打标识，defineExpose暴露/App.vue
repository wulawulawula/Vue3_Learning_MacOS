<template>
    <h2>APP.vue</h2>
    <button @click="showLog">打印组件</button>
    <Person ref="person" />
</template>


<script lang="ts" setup>
import Person from './components/Person.vue'
import { ref } from 'vue';
defineOptions({
    name: 'App'
});
type PersonType = InstanceType<typeof Person>
const person = ref<PersonType | null>(null)
function showLog(){
    if(person.value) {
        person.value.a++;
    }
    console.log(person.value);
}
</script>

<style scoped>

</style>
