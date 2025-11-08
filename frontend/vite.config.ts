import { defineConfig } from 'vite'
// @ts-ignore: moduleResolution mismatch for '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})