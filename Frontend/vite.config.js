import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Use this if you are using SWC for faster builds

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/zetsol": {
        target: "https://react-backend-one-woad.vercel.app/", // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
