import { ref } from 'vue';
import axios from 'axios';

export default function () {
    let dogList = ref<string[]>([]);
    async function getDogs() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.value.push(res.data.message);
        } catch (error) {
            alert('获取数据失败' + error);
        }
    }
    return { dogList, getDogs }
}