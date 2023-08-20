<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" :route="true">
        <van-tabbar-item 
            v-for="(item,index) in tabbarData" 
            :key="index"
            :to="item.path"
        >
            <span>{{ item.text }}</span>
            <template #icon>
                <img v-if="currentIndex !== index" :src="getAssetsURL(item.image)" alt="">
                <img v-else :src="getAssetsURL(item.imageActive)" alt="">
            </template>
        </van-tabbar-item>

    </van-tabbar>

  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import { getAssetsURL } from '@/utils/load_url'
import tabbarData from '@/assets/data/tabbarData.js'
import { useRoute } from 'vue-router'


// 路由跳转，TabBar不选中的解决
const currentIndex = ref(0)
const route = useRoute()

watch(route, (newValue) => { 
    const index = tabbarData.findIndex(item => item.path === newValue.path)
    if (index === -1) return
    currentIndex.value = index
})



</script>

<style lang='less' scoped>
.tab-bar {
    .active {
        color: var(--primary-color);
    }
    img {
        height: 24px;
    }
}

</style>
