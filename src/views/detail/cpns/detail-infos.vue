<template>
  <div class="infos">
    <div class="houseName">
        {{ infosData.houseName }}
    </div>
    <div class="houseTags">
        <template v-for="item in infosData.houseTags">
            <span
            class="tag"
                v-if="item.tagText"
                :style="{color:item.tagText.color, background:item.tagText.background.color}"
            >
                {{ item.tagText.text }}
            </span>
        </template>
    </div>
    <div class="commentBrief">
        <div class="left">
            <span class="overall">{{ infosData.commentBrief.overall }}</span>
            <span class="scoreTitle">{{ infosData.commentBrief.scoreTitle }}</span>
            <span class="brief">{{ infosData.commentBrief.commentBrief }}</span>
        </div>
        <div class="right">
            <span>{{ infosData.commentBrief.totalCount }}条评论</span>
            <van-icon name="arrow" />
        </div>
    </div>
    <div class="nearByPosition">
        <div class="left">
            <span class="address">{{ infosData.nearByPosition.address }}</span>
        </div>
        <div class="right">
            <span>地图·周边</span>
            <van-icon name="arrow" />
        </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
    infosData: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang='less' scoped>
.infos {
    padding: 16px;
    margin-bottom: 20px;
    .houseName {
        font-weight: 700;
        font-size: 20px;
        color: #333;
        text-align: justify;
        line-height: 24px;
        overflow: hidden;
        margin-bottom: 6px;
    }
    .houseTags {
        margin: 10px 0;
        .tag {
            font-size: 12px;
            margin: 0 2px;
            padding: 0 3px;
        }
    }
    .commentBrief {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        margin: 12px 0;
        border-radius: 5px;
        font-size: 12px;
        background-color: #f5f7fa;
        .left {
            display: flex;
            align-items: baseline;
            .overall {
                font-size: 18px;
                font-weight: 700;
                color: #333;
            }
            .scoreTitle {
                color: #333;
                font-weight: 700;
                margin: 0 3px;
            }
            .brief {
                color: #666;
            }
        }
        .right {
            color: #ff9645;
        }
    }
    .nearByPosition {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        margin: 12px 0;
        border-radius: 5px;
        font-size: 12px;
        background-color: #f5f7fa;
        .left {
            .address {
                font-size: 14px;
                font-weight: 700;
                color: #333;
            }
        }
        .right {
            color: #ff9645;
        }
    }
}
</style>
