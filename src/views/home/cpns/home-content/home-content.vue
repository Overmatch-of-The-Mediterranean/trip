<template>
  <div class="home-content">
    <h2>热门精选</h2>
    <div class="list">
        <template v-for="(item,index) in houseList" :key="index">
            <home-item-v9 @click="handleToDetail(item)" v-if="item.discoveryContentType === 9" :item-data="item.data"></home-item-v9>
            <home-item-v3 @click="handleToDetail(item)" v-else-if="item.discoveryContentType === 3" :item-data="item.data"></home-item-v3>
        </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import useHomeStore from '@/stores/modules/home';
import HomeItemV9 from '@/components/home-item-v9/home-item-v9.vue';
import HomeItemV3 from '@/components/home-item-v3/home-item-v3.vue';


const homeStore = useHomeStore()

homeStore.fetchHomegetHomeHouselist()

const { houseList } = storeToRefs(homeStore)

const router = useRouter()
const handleToDetail = (item) => {
    router.push({
        path: `/detail/${item.data.houseId}`
    })
 }

</script>

<style lang='less' scoped>
.home-content{
    margin-top: 20px;
    h2 {
        padding-left: 20px;
    }
    .list {
        box-sizing: border-box;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
