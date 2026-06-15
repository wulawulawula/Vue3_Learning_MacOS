<template>
  <div class="news">
    <div class="leftBtn">
      <ul>
        <li v-for="item in newsList" :key="item.id">
          <router-link :to="{path:'/news/detail',query:{title:item.title,content:item.content}}">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="rightArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
  defineOptions({
    name: 'News'
  });
  const newsList = ref([
    {
      title: '新闻1',
      content: '这是新闻1的内容',
      id: 'iauhfiahufiah01'
    },
    {
      title: '新闻2',
      content: '这是新闻2的内容',
      id: 'iauhfiahufiah02'
    },
    {
      title: '新闻3',
      content: '这是新闻3的内容',
      id: 'iauhfiahufiah03'
    },
    {
      title: '新闻4',
      content: '这是新闻4的内容',
      id: 'iauhfiahufiah04'
    }
  ]);
</script>

<style scoped>
.news {
  display: flex;
  justify-content: space-between;
  height: 600px;
  .leftBtn {
    width: 200px;
    display: flex;
    flex-direction: column;
  }
  .rightArea {
    flex: 1;
    border-radius: 16px;
    border: 1px solid #000;
  }
}
</style>