import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/react_router_v7-app_posts/',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
