import hyRequest from '../request/index.js'

export const getAllCitiesData = () => { 
    return hyRequest.get({
        url:'/city/all'
    })
}