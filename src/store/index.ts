// src/store/index.ts
import { createPinia } from 'pinia'
import { useUserStore } from './userStore'

// 创建 Pinia 实例
export default createPinia()

// 导出所有 Pinia Store
export { useUserStore }
