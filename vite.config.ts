import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    proxy: {
      "/graphql": {
        target: `${process.env.VITE_APP_API_PREFIX}/graphql`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, ""),
      },
    },
  },
  resolve: {
    alias: [
      {find: "@type", replacement: path.resolve(__dirname, "src/types")},
      {find: "@action", replacement: path.resolve(__dirname, "src/actions")},
      {find: "@reducer", replacement: path.resolve(__dirname, "src/reducers")},
      {find: "@component", replacement: path.resolve(__dirname, "src/_components")},
      {find: "@helper", replacement: path.resolve(__dirname, "src/helpers")},
      {find: "@saga", replacement: path.resolve(__dirname, "src/sagas")},
      {find: "@query", replacement: path.resolve(__dirname, "src/queries")},
      {find: "@container", replacement: path.resolve(__dirname, "src/_containers")},
      {find: "@graphql", replacement: path.resolve(__dirname, "src/graphql")},
    ]
  }
})
