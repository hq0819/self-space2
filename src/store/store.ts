import {defineStore} from "pinia";
import {computed,ref} from "vue";


export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})