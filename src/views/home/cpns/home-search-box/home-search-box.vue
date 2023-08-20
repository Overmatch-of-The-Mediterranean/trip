<template>
    <div class="search-box" >
        <div class="location bottom-gray-line" @click="getLocation">
            <div class="city">{{ currentCity.cityName }}</div>
            <div class="position">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <!-- 入住时间 -->
       <div class="date-range wrapper bottom-gray-line" @click="handleSelectTime">
            <div class="start">
                <span class="common-text">入住</span>
                <span class="common-date">{{ startDateStr }}</span>
            </div>
            <div class="stay">共{{ stayDays }}晚</div>
            <div class="end">
                <span class="common-text">离店</span>
                <span class="common-date">{{ endDateStr }}</span>
            </div>
       </div>
       <!-- 日历 -->
       <div class="calendar">
            <van-calendar 
                :round="false" 
                type="range" 
                v-model:show="showCalender" 
                @confirm="onConfirm" 
                :show-confirm="false"
            />
       </div>

       <!-- 价格人数选择 -->
       <div class="price-people wrapper bottom-gray-line">
            <div class="price">
                价格不限
            </div>
            <div class="people">
                人数不限
            </div>
       </div>

       <!-- 关键字/位置/民宿名 -->
       <div class="key wrapper bottom-gray-line">
            关键字/位置/民宿名
       </div>

       <!-- 热门推荐 -->
       <div class="hot-suggests wrapper">
            <template v-for="(item,index) in hotSuggests" :key="index">
                <div 
                    class="item" 
                    :style="{color:item.tagText.color,background:item.tagText.background.color}"
                >
                    {{ item.tagText.text }}
                </div>
            </template>
       </div>

       <!-- 开始搜索 -->
       <div class="start-search" @click="handleStartSearch">
            开始搜索
       </div>


    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city';
import { formatMonthDay, getDiffDays } from '@/utils/format_date.js'
import useHomeStore from '@/stores/modules/home.js'
import useMainStore from '@/stores/modules/main';

const router = useRouter()

// 获取位置信息（经度和纬度）
const getLocation = () => {
    navigator.geolocation.getCurrentPosition(res => { 
        console.log(res);
    }, err => { 
        console.log(err);
    })
    router.push('/city')
}


// 获取选择的城市信息
const cityStore = useCityStore()

const { currentCity } = storeToRefs(cityStore)

// 日历
const mainStore = useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)

const startDateStr = computed(()=>formatMonthDay(startDate.value))
const endDateStr = computed(()=>formatMonthDay(endDate.value))


const stayDays = ref(getDiffDays(startDate.value,endDate.value))

const showCalender = ref(false)

const handleSelectTime = () => { 
    showCalender.value = true
 }
// 日历日期选择处理
const onConfirm = (value) => { 
    //日期选择
    const startTime = value[0]
    const endTime = value[1]

    mainStore.startDate = startTime
    mainStore.endDate = endTime
    stayDays.value = getDiffDays(startTime, endTime)

    //日历隐藏
    showCalender.value = false
 }

// 热门推荐
const homeStore = useHomeStore()
// 网络请求
homeStore.fetchHotSuggestData()

const { hotSuggests } = storeToRefs(homeStore)

//开始搜索
const handleStartSearch = () => { 
    router.push({ 
        path: '/search',
        query: {
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity:currentCity.value.cityName
        }
     })
 }

</script>

<style lang='less' scoped>
    .search-box {
        .location {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 44px;
            padding: 0 10px 0 20px;
            .city {
                flex: 1;
                color: #333;
                font-size: 15px;
            }
            .position {
                display: flex;
                width: 84px;
                .text {
                    position: relative;
                    top: 3px;
                    color: #666;
                    font-size: 12px;
                }
                img {
                    height: 18px;
                    margin-left: 8px;
                }
            }
        }
        .date-range {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 44px;
            .common-text {
                color: #999;
                font-size: 12px;
            }
            .common-date {
                color: #333;
                font-size: 15px;
                margin-top: 3px;
            }
            
            .start,.end {
                display: flex;
                flex-direction: column;
            }
            .end {
                margin-right: 40px;
            }

            .stay {
                font-size: 1;
                color: #666;
                font-size: 12px;
                line-height: 34px;
                margin-right: 20px;
            }
        }
        .calendar{
            --van-calendar-popup-height:100%
        }
        .price-people {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 44px;
            color: #999;
            padding-right: 70px;
        }
        .key {
            line-height: 44px;
            height: 44px;
            color: #999;
        }
        .hot-suggests {
            display: flex;
            flex-wrap: wrap;
            font-size: 12px;
            margin: 10px 0;
            .item {
                border-radius: 14px;
                padding: 4px 8px;
                margin: 3px;
            }
        }

        .start-search {
            height: 38px;
            line-height: 38px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            margin: 0 20px;
            border-radius: 20px;
            background-image: var(--theme-linear-gradient);

        }

    }
</style>
