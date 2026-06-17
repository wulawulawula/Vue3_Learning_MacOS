import { defineStore } from 'pinia'

export const useTalkStore = defineStore("Talk", {
    state: () => {
        return {
            talkList: [
                {
                    id: '1',
                    content: '你好'
                },
                {
                    id: '2',
                    content: '你吃了吗？'
                },
                {
                    id: '3',
                    content: '吃了'
                }
            ]
        }
    }
})