/*
 * @Description: 鼠标移动事件
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-05-06 11:40:23
 * @LastEditors: Wsl
 * @LastEditTime: 2020-05-07 11:33:45
 */
import { ref, onMounted, onUnmounted, toRef, toRefs } from 'vue'
import useDebouncedRef from "../_utils/DebouncedRef";
function useMouse() {
    const x = ref(0)
    const y = ref(0)
    const update = e => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return { x, y }
}
export default useMouse;