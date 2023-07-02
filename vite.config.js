import { fileURLToPath, URL} from 'node:url'
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode}) => {

  const env = loadEnv(mode, process.cwd());  //重点！！！！
  console.log("当前环境", env);

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias : {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}