import { ref, computed } from 'vue';
export default function () {
    let sum = ref(0);
    let bigSum = computed(() => sum.value * 10)
    function add(){
        sum.value += 1;
    }
    return {
        sum,
        bigSum,
        add
    }
}