<template>
  <div class="search-bar">
    <div class="search">
        <div class="left">
            <div class="start">
                <span class="sleep">住</span>
                <span class="time">{{ startDateStr }}</span>
            </div>
            <div class="end">
                <span class="leave">离</span>
                <span class="time">{{ endDateStr }}</span>
            </div>
        </div>
        <div class="center">
            <span>关键字/位置/民宿</span>
        </div>
        <div class="right">
            <i class="icon-search"></i>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia';
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_date.js'


const mainStore = useMainStore()

const { startDate,endDate } = storeToRefs(mainStore)

const startDateStr = computed(()=>formatMonthDay(startDate.value,'MM.DD'))
const endDateStr = computed(()=>formatMonthDay(endDate.value,'MM.DD'))
</script>

<style lang='less' scoped>
.search-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
    padding: 16px 16px 10px 16px;
    .search {
        display: flex;
        align-items: center;
        height: 45px;
        background-color: #f2f4f6;;
        border-radius: 6px;
        padding: 0 10px;
        .left {
            position: relative;
            .sleep,.leave {
                font-size: 12px;
                color: #999;
            }
            .time {
                font-size: 12px;
                color: #333;
                margin: 0 10px 0 3px;
            }
            .end::after {
                    content: " ";
                    width: 0;
                    height: 0;
                    border: 4px solid #666;
                    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    position: absolute;
                    bottom: 0px;
                    right: -2px;
                }
        }
        .center {
            display: flex;
            align-items: center;
            flex: 1;
            color: #999;
            padding: 0 6px;
            border-left: 1px solid #fff;
            height: 100%;
        }
        .right {
              .icon-search {
                width: 24px;
                height: 24px;
                display: inline-block;
                background-image: url(../../assets/img/home/home-sprite.png);
                background-position: -29px -151px;
                background-size: 207px 192px;
            }
        }
    }
}
</style>
