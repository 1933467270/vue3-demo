/*
 * @Description: 去抖
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-05-06 14:45:34
 * @LastEditors: Wsl
 * @LastEditTime: 2020-05-07 11:28:37
 */
import { customRef } from "vue";
export default function useDebouncedRef(value, delay = 200) {
    let timeout
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay)
            }
        }
    })
}
