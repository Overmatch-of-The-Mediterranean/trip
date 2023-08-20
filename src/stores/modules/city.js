import { defineStore } from "pinia";
import { getAllCitiesData } from "../../service/modules/city.js";

const useCityStore = defineStore('city', {
    state: () => {
        return {
            allCities: {},
            currentCity: {cityName:'广州'}
        }
     },
    actions: {
        async fetchAllCitiesData () { 
            const res = await getAllCitiesData()
            this.allCities = res.data
        }
    }
})
export default useCityStore