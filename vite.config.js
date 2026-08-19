import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/hko-api": {
        // Point to the base directory of the API
        target: "https://data.weather.gov.hk/weatherAPI/opendata",
        changeOrigin: true,
        secure: false,
        // This maps /hko-api to the actual .php file path
        rewrite: (path) => path.replace(/^\/hko-api/, "/weather.php"),
      },
    },
  },
});
