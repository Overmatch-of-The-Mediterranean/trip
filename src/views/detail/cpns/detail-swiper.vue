<template>
  <div class="swiper-wrapper">
    <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
        <template v-for="(item,index) in swiperData" :key="index">
            <van-swipe-item class="item">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </template>

        <template #indicator="{ active, total }" >
            <div class="indicator">
                <template 
                    v-for="(value,key,index) in swiperGroup"
                    :key="index"
                >
                    <span class="indicator-item" :class="{active:swiperData[active]?.enumPictureCategory == key}">
                        <span class="text">{{ getName(value[0].title)}}</span>
                        <span class="count" v-if="swiperData[active]?.enumPictureCategory == key"> 
                            {{ getIndex(swiperData[active]) }}/{{ value.length }}
                        </span>
                    </span>
                </template>

            </div>
        </template>
        
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
    swiperData: {
        type: Object,
        default: () => ([])
    }
})


// 对指示器分类的数据处理
const swiperGroup = {}

for (const item of props.swiperData) {
    let valueArray = swiperGroup[item.enumPictureCategory]
    if (!valueArray) { 
        valueArray = []
        swiperGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}

const nameReg = /【(.*?)】/i
const getName = (name) => { 
    return nameReg.exec(name)[1]
}

// 取分组中寻找index
const getIndex = (item) => {
    const index = swiperGroup[item.enumPictureCategory].findIndex(data => data === item) + 1
    return index
 }

</script>

<style lang='less' scoped>
.swiper-wrapper {
    .swiper {
        position: relative;
        .item {
            img {
                width: 100%;
            }
        }
        .indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            display: flex;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.8);
            &-item {
                margin: 0 3px;

                &.active {
                padding: 0 3px;
                border-radius: 5px;
                background-color: #fff;
                color: #333;
                }
            }
        }
    }

}
</style>
