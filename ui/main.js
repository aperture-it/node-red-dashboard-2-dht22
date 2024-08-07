/**
 * Used only for development (via `npm run dev`).
 *
 * This file is useful for testing your component in isolation from Node-RED.
 */
import { createApp } from 'vue'

import DHT22 from './components/DHT22.vue'

createApp(DHT22).mount('#app')
