<template>
  <div class="detail" ref="detailRef">
    <van-tabs v-model:active="active" v-if="isShowTabControl" @click-tab="tabClick">
        <template v-for="(item,index) in titles" :key="index">
            <van-tab :title="item" ></van-tab>
        </template>
    </van-tabs>
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
        <detail-swiper :swiper-data="mainPart.topModule.housePicture.housePics"></detail-swiper>
        <detail-infos name="描述" :ref="getRef" :infos-data="mainPart.topModule"></detail-infos>
        <detail-facility name="设施" :ref="getRef" :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
        <detail-landlord name="房东" :ref="getRef" :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
        <detail-comment name="评论" :ref="getRef" :comment="mainPart.dynamicModule.commentModule"></detail-comment>
        <detail-notice name="须知" :ref="getRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"></detail-notice>
        <detail-map name="周边" :ref="getRef" :position="mainPart.dynamicModule.positionModule"></detail-map>
        <detail-intro :price-intro="mainPart.introductionModule"></detail-intro>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { getDetailInfos } from '@/service/modules/detail'
import DetailSwiper from './cpns/detail-swiper.vue'
import DetailInfos from './cpns/detail-infos.vue'
import DetailFacility from './cpns/detail-facility.vue'
import DetailLandlord from './cpns/detail-landlord.vue'
import DetailComment from './cpns/detail-comment.vue'
import DetailNotice from './cpns/detail-notice.vue'
import DetailMap from './cpns/detail-map.vue'
import DetailIntro from './cpns/detail-intro.vue'
import useScroll from '@/hooks/useScroll'

const router = useRouter()
const route = useRoute()
const onClickLeft = () => { 
    router.back()
}


const sectionEls = ref({})

const titles = computed(() => { 
    return Object.keys(sectionEls.value)
})

const values = computed(() => {
    return Object.values(sectionEls.value).map(el => el.offsetTop)
})


const houseId = route.params.id

const detailInfos = ref({})
const mainPart = computed(()=>detailInfos.value.mainPart)
// 发送网络请求
getDetailInfos(houseId).then(res => { 
    detailInfos.value = res.data
})

// 监听滚动
const detailRef = ref()

const { scrollTop } = useScroll(detailRef)

const isShowTabControl = computed(() => { 
    return scrollTop.value >= 290
})

const getRef = (ref) => { 
    const name = ref?.$el?.getAttribute('name')
    sectionEls.value[name] = ref?.$el
}

const active = ref(0)
const isClick = ref(false)
let currentDistance = -1

 // 点击标签，滚动到对应位置的逻辑
const tabClick = (val) => { 
    isClick.value = true
    let distance = sectionEls.value[val.title].offsetTop
    if (val.title !== '描述') { 
        distance = distance - 44
    }

    currentDistance = distance

    detailRef.value.scrollTo({
        top: distance,
        behavior: "smooth",
    })


}

 // 滚动导航实现逻辑
watch(scrollTop, (newValue) => { 
    if (newValue === currentDistance) { 
        isClick.value = false
    }
    if (isClick.value) return
    let index = values.value.length - 1
    for (let i = 0; i < values.value.length; i++) {
        if (values.value[i] - 44 > newValue) {
            index = i - 1
            break
         }
    }
    if(index === -1) return
    active.value = index
 })
</script>

<style lang='less' scoped>
.detail {
    height: 100vh;
    overflow-y: auto;
    :deep(.van-tabs__wrap) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }
    :deep(.van-tab--active){
        color: #ff9645;
        font-weight: 500;
    }
    --van-tabs-line-height:40px;
    background-color: #fff;
    .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
}
</style>
