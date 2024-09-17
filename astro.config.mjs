// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import svelte from '@astrojs/svelte'

import icon from 'astro-icon'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
