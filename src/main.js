import { createApp } from 'vue' // 引入 createApp 方法
import App from '@/App.vue'     // 引入 App.vue 组件
import '@/assets/main.css'      // 引入 main.css 样式文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css'
import 'nprogress/nprogress.css'
// 引入带有持久化的全局状态管理 Pinia
import pinia from '@/stores'

// 导入路由
import router from '@/router'

// 导入路由收尾
import '@/permission'

const app = createApp(App)

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 应用路由
app.use(router)

// 应用 Pinia
app.use(pinia)

// 创建应用，并将 App 根组件挂载到 <div id="#app"></div> 中

app.mount('#app')

