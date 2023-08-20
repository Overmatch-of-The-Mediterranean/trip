import hyRequest from '../request/index.js'

export function getHotSuggestData () { 
    return hyRequest.get({
        url:'/home/hotSuggests'
    })
}

export function getHomeCategories () {
    return hyRequest.get({
        url:'/home/categories'
    })
}
 
export function getHomegetHomeHouselist (currentPage) { 
    return hyRequest.get({
        url: '/home/houselist',
        params: {
            page:currentPage
        }
    })
}