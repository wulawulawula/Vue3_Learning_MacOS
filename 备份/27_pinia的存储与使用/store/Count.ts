import { defineStore } from "pinia";

export const useCountStore = defineStore("Count",{
    state:() => {
        return {
            count: 0
        }
    }
})