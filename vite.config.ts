import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets",
          dest: "src",
        }
      ],
    }),
  ],
  build: {
    assetsInlineLimit: 0,
  },
})