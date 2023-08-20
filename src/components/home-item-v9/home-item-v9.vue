<template>
  <div class="home-item-v9">
    <div class="item-wrapper">
        <div class="item">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="summary">
                    {{ itemData.summaryText }}
                </div>
                <div class="home-name">
                    {{ itemData.houseName }}
                </div>
                <div class="price">
                    <van-rate 
                        :model-value="commentScore" 
                        readonly 
                        :allow-half="true" 
                        size="14px"
                        gutter="2px"
                        />
                    <span>￥{{ itemData.finalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})
const commentScore = computed(()=>Number(props.itemData.commentScore))

</script>

<style lang='less' scoped>
.home-item-v9 {
    width: 50%;
    box-sizing: border-box;
    .item-wrapper {
        margin: 5px;
        .item {
            position: relative;
            
            .cover {
                 img {
                    border-radius: 6px;
                    width: 100%;
                 }
            }
            .info {
                
                position: absolute;
                bottom: 0;
                color: #fff;
                padding: 8px 10px;
                box-sizing: border-box;
                .summary {
                    font-size: 12px;
                }
                .home-name {
                    margin: 5px 0;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .price {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
