import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: ".",
  publicDir: "public",
  server: {
    port: 5173,
    open: true,
  },
});

// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   plugins: [vue()],
//   root: '.',
//   publicDir: 'public',
// });
