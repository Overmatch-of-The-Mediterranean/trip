import { defineStore } from "pinia";
import { getHotSuggestData,getHomeCategories,getHomegetHomeHouselist } from '@/service/modules/home.js'


const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage:1,
        houseList:[]
    }),
    actions: {
        async fetchHotSuggestData () {
            const res = await getHotSuggestData()
            this.hotSuggests = res.data
        },
        async fetchHomeCategories () {
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHomegetHomeHouselist () {
            const res = await getHomegetHomeHouselist(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++

         }
    }
})

export default useHomeStore