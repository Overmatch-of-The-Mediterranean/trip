<template>
  <div class="detail-facility">
    <detail-section title="房屋设施" more="查看全部设施">
        <div class="facility">
            <template v-for="(item,index) in facilityData.houseFacilitys" :key="index">
                <div class="item" v-if="facilityData.facilitySort.includes(index)">
                    <div class="left">
                        <img :src="item.icon" alt="">
                        <span class="group-name">{{ item.groupName }}</span>
                    </div>
                    <div class="right">
                        <template v-for="(facility,index) in item.facilitys.slice(0,4)" :key="index">
                            <div class="right-item">
                                <i class="icon_check icon"></i>
                                <div class="name">
                                    {{facility.name}}
                                </div>
                            </div>

                        </template>
                    </div>
                </div>
            </template>
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'

defineProps({
    facilityData: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang='less' scoped>
.detail-facility {
    .facility {
        padding: 5px 0;
        border-radius: 6px;
        font-size: 12px;
        background-color: #f7f9fb;
        .item {
            display: flex;
            margin: 25px 0;
            .left{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 90px;
                img{
                    width: 20px;
                    height: 20px;
                }
                .group-name {
                    margin-top: 5px;
                    color: #000;
                }
            }
            .right {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                .right-item {
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;
                    width: 50%;
                    margin: 4px 0;
                    
                    .icon {
                        margin: 0 6px;
                    }
                }
            }
        }
    }
}
</style>
