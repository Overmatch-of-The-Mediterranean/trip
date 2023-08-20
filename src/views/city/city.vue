<template>
  <div class="city">
    <div class="city-header">
        <div class="search">
            <van-search 
                v-model="value" placeholder="请输入搜索关键词"
                shape="round"
                :show-action="true"
                @cancel="onCancel"
            />
        </div>
        <div class="tabs">
            <van-tabs v-model:active="activeTab">
                <template v-for="(value,key,index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
    </div>

    <div class="content">
        <template v-for="(value,key,index) in allCities" :key="index">
            <CityGroup v-show="activeTab === key" :groupData="value"></CityGroup>
        </template>
    </div>
  </div>
 
</template>

<script setup>
import { ref, computed } from 'vue'
import {useRouter} from 'vue-router'
import { storeToRefs } from 'pinia';

import CityGroup from './cpns/city-group/city-group.vue'
import useCityStore from '@/stores/modules/city.js'


const activeTab = ref()
const value = ref()

// 获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()

const { allCities } = storeToRefs(cityStore)

// const currentGroup = computed(() =>allCities.value[activeTab.value] )
const router = useRouter()
// 取消返回上页
const onCancel = () => {  
    router.back()
}

</script>

<style lang='less' scoped>
.city {
    position: relative;
    z-index: 9;
    background-color: #fff;
    .city-header {
        position: relative;
        z-index: 10;
    }
    .content {
        height: calc(100vh - 104px);
        overflow-y: auto;
    }
}


</style>
