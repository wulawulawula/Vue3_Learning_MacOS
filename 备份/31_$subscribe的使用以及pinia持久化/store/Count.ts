import { defineStore } from "pinia";

export const useCountStore = defineStore("Count",{
    state:() => {
        return {
            count: 0,
            test:false
        }
    },
    actions:{
        increment(value:number){
            // this指代当前的store实例
            this.count += value
        }
    },
    getters:{
        doubleCount(state){
            return state.count * 2
        },
        tripleCount():number{
            return this.count * 3
        }
    },
})