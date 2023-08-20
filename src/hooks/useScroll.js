import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

const useScroll = (elRef) => { 
    let el = window
    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const clientHeight = ref(0)
    const scrollHeight = ref(0)

    const scrollListenerHandle = throttle(() => { 
        if (elRef) {
            scrollTop.value = Math.ceil(el.scrollTop)
            clientHeight.value = el.clientHeight
            scrollHeight.value = el.scrollHeight
        } else { 
            scrollTop.value = Math.ceil(document.documentElement.scrollTop)
            clientHeight.value = document.documentElement.clientHeight
            scrollHeight.value = document.documentElement.scrollHeight
        }

        if (scrollTop.value + clientHeight.value >= scrollHeight.value) { 
            isReachBottom.value = true
        }
    },100)
    onMounted(() => { 
        if (elRef) { 
            el = elRef.value
         }
        el.addEventListener('scroll', scrollListenerHandle )
    })
    onUnmounted(() => { 
        el.removeEventListener('scroll', scrollListenerHandle )
    })

    return {
        isReachBottom,
        scrollTop
    }
}
 
export default useScroll