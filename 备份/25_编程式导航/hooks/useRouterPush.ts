import { useRouter } from "vue-router";
interface newsInter {
    id: string,
    title: string,
    content: string
}
export default function () {
    const router = useRouter();
    function goDetail(news: newsInter) {
        router.push({
            name: 'Detail',
            params: {
                id: news.id,
                title: news.title,
                content: news.content
            }
        })
    }
    return {
        goDetail
    }
}