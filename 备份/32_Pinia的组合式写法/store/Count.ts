import { defineStore } from "pinia";
import { ref,computed } from "vue";
export const useCountStore = defineStore("Count", () => {
    let count = ref(0)
    let test = ref(false)
    function increment(value: number) {
        // this指代当前的store实例
        count.value += value
    }
    const doubleCount = computed(() => {
        return count.value * 2
    })
    const tripleCount = computed(() => {
        return count.value * 3
    })
    return {
        count,
        test,
        doubleCount,
        tripleCount,
        increment
    }
})