import { ref, onMounted, onUnmounted,Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  //判断是否点击到了外面
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {

    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener("click", handler)
  })
  onUnmounted(() => {
    document.addEventListener("click", handler)
  })

  return isClickOutside
}

export default useClickOutside
 