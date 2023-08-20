<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="hot">
            <template v-for="hotCity in groupData.hotCities">
                <div 
                    class="hot-item"
                    @click="handleCity(hotCity)"
                >
                    {{ hotCity.cityName }}
                </div>
            </template>
        </div>

        <template v-for="group in groupData.cities">
            <van-index-anchor :index="group.group" />
            <template v-for="city in group.cities">
                <van-cell @click="handleCity(city)" :title="city.cityName" />
            </template>
        </template>

    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import  useCityStore  from '@/stores/modules/city'

const props = defineProps({
    groupData: {
        type: Object,
        default: () => ({})
    }
})

const indexList = computed(() => { 
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return  list
})

const router = useRouter()
const cityStore = useCityStore()

// 选择城市并存储数据
const handleCity = (city) => { 

    // 返回上一页
    router.back()
    // 存储数据
    cityStore.currentCity = city

 }

</script>

<style lang='less' scoped>
.city-group {
    .hot {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-right: 20px;
        padding: 10px;
        &-item {
            width: 70px;
            height: 28px;
            line-height: 28px;
            color: #000;
            background-color: #fff4ec;
            border-radius: 14px;
            text-align: center;
            font-size: 12px;
            margin: 6px;
            
        }
    }
}
</style>
