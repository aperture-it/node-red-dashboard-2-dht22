<template>
    <div class="dht-wrapper" :class="color">
        <div class="column align-center border-bottom justify-center">
            <div class="row title">Время</div>
            <div class="row align-baseline">
                <div class="time">{{ time }}</div>
                <span class="seconds m-l-sm">{{ seconds }}</span>
            </div>
            <div class="row title">Дата</div>
            <div class="row date">{{ date }}</div>
        </div>
        <div class="row">
            <div class="column border-right align-center justify-center w50">
                <div class="row title">Температура</div>
                <div class="row align-baseline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <path
                            d="M172.7 1.5c-23.3 4.4-42 14.7-58.5 32-9.9 10.5-17 21.6-21.8 34.3-7.2 19.2-6.8 11.5-7.1 134.8l-.4 111.2-4.5 7.8c-20.6 36.3-21.7 82-2.8 119.6 12 23.9 33.8 45.5 58.2 57.7 28.5 14.3 63.9 16.9 94.8 7 20.2-6.4 35.7-16 51.5-31.8 15.7-15.7 24.6-30 31.5-50.6 10.8-32.4 8-65.2-8.6-98.1l-6-11.9 0-105.5c0-66.6-.4-108.7-1-114-3-24-12.5-44.2-28.8-61.2-14.2-14.7-30.7-24.4-50-29.5-12.4-3.2-34.4-4.1-46.5-1.8zm35.7 43.5c21.6 5.5 37.4 20.6 44.8 42.5l2.3 7 .5 115.5.5 115.5 3.8 6.5c6.1 10.5 12.3 24 14.3 31 2.9 10.1 2.7 32.9-.4 43.4-6.7 23.1-22.2 42.2-43.2 53.1-14 7.2-21.9 9-39 9-17.2-.1-22.8-1.3-37.5-8.5-17-8.2-29.3-20.2-38-37.1-7.1-13.7-9-21.8-9-38.4 0-20.3 1.4-24.7 16.9-53.9l3.6-6.8 0-111.5c0-125-.3-119.9 7.2-135.2 12.8-26 43.8-39.6 73.2-32.1zM184.6 214.4c-5.9 2.2-8.8 4.7-11.3 9.6l-2.3 4.4 0 59.2 0 59.2-4.9 3.6c-5.6 4.1-8.8 8-12.4 15.2-12.6 25 3.2 55.3 31.7 60.5 21.7 4 43.9-11.7 48.6-34.6 3-14.5-3.6-31.6-15.6-40.7l-5.4-4 0-59c0-62.6 0-62.8-4.8-68.1-4.8-5.4-16.4-7.9-23.6-5.3zM352 45.2c-10 5.1-13.7 18.6-8.1 29.6 2.3 4.6 4.6 6.7 9.4 8.7 3 1.3 9.7 1.5 41.7 1.5 35.5 0 38.3-.1 41.8-1.9 7.3-3.8 11.2-10.4 11.2-19.1 0-8.7-3.9-15.3-11.2-19.1-3.5-1.8-6.3-1.9-42-1.9-37.8 0-38.4 0-42.8 2.2zM352.4 130.5c-17.1 8.5-13.9 35.3 4.7 39.5 3.4.7 10.8 1.1 19.4.8 16.3-.4 20.6-1.9 25.2-9 3.8-5.6 4.5-16.6 1.5-22.4-5-9.7-9.5-11.4-30-11.4-14.8 0-16.1.2-20.8 2.5zM354.9 214.5c-17 5.4-18.5 31.2-2.3 39.1l5.1 2.5 38.5-.3 38.4-.3 4.1-2.7c5.8-3.8 8.4-8.6 9.1-16.3.7-8.9-2.8-16.3-9.6-20.3l-4.7-2.7-37-.2c-30-.2-37.9.1-41.6 1.2zM352 301.2c-10.1 5.2-13.7 18.6-8 29.7 4.5 8.9 9.2 10.4 31.6 9.9 16.1-.3 17.2-.4 20.6-2.7 1.9-1.3 4.6-4 5.9-5.9 2.1-3.1 2.4-4.7 2.4-12.2 0-7.5-.3-9.1-2.4-12.2-1.3-1.9-4-4.6-5.9-5.9-3.4-2.3-4.4-2.4-21.6-2.7-17.2-.3-18.3-.2-22.6 2z" />
                    </svg>
                    <div class="sensor m-l-sm">{{ temp }}</div>
                    <span v-if="isNumber(temp)" class="unit m-l-sm">°C</span>
                </div>
            </div>
            <div class="column align-center justify-center w50">
                <div class="row title">Влажность</div>
                <div class="row align-baseline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 512 512"
                        preserveAspectRatio="xMidYMid meet" fill="currentColor">
                        <path
                            d="M186.6 33.5c-2.2.7-4.9 2.4-6.2 3.7-3.9 4-32.9 45.2-49.9 70.8-52.4 79.1-83.4 139.7-94.8 185-2.8 11.3-3.1 14-3.2 28.5 0 18.4 1.7 29.7 7.2 47 9.1 28.7 26.7 55 49.2 73.7 21.8 18.1 45.6 29.4 73.6 35 14.8 3 42.2 3.2 57 .4 19.9-3.6 43.1-12.6 58.2-22.5 7.7-5 10.8-10.2 10-16.9-.9-8.1-7.7-14.2-15.7-14.2-3.5 0-6 .8-10.6 3.6-23.4 14.2-43.1 19.9-69.4 19.9-17.2 0-24.3-1.1-39.6-6-20.1-6.6-34.8-15.7-50.5-31.4-11-11-18.1-20.6-24.1-32.6-11.8-23.4-16.4-51.7-11.9-73.1 8-38.4 39.5-100.1 91.6-178.9 19.6-29.5 33.3-49 34.5-49 1.9 0 40.1 56.5 59.5 88 31.7 51.5 55.7 99.8 63.3 127.3 1.9 6.6 1.9 7.2.4 7.2-3.3 0-11.8-4.8-17.7-9.8-6.9-6-18.3-12.2-27-14.8-4.4-1.4-9.2-1.8-18-1.8-10.3 0-13.1.4-20 2.7-9.8 3.3-16.1 6.9-24 13.7-7.8 6.8-14.6 9.9-23.8 10.9-4.1.5-8.8 1.6-10.4 2.6-9.7 5.7-10.3 20.1-1.1 26.7 4.7 3.3 14.1 3.6 24.9.9 10.9-2.7 19.3-7.1 28.1-14.4 10.4-8.8 16.3-11.2 26.8-11.2 10.4.1 16.3 2.5 26 10.9 16.1 13.8 37.8 19.4 58.5 15.1 9.4-2 21.4-8.1 30.5-15.6 10.5-8.6 14.4-10.2 25.5-10.3 7.9-.1 9.7.2 14.5 2.6 3.1 1.5 8.5 5.3 12 8.3 8 7 20.1 13 30 15.1 18.8 3.9 29.5-1.3 29.5-14.4 0-10.1-5.3-14.8-18.2-16.3-9.5-1-14.2-3.2-23.3-10.9-12.6-10.7-29.2-17-44.5-17-13.3 0-29.4 5.4-39.8 13.3-2.6 2.1-5.1 3.7-5.5 3.7-.4 0-1.8-3.5-3.1-7.8-9-31.1-36.4-85.6-69.8-139.1-19.4-31.1-63.5-95.7-71.2-104.5-3.9-4.5-11.6-6.3-17.5-4.1zM402.5 49.5c-5 1.8-7.6 4.8-21.4 24.4-20 28.5-34.5 54.6-41.3 74.2-3 8.6-3.2 10.4-3.2 21.4.1 10 .5 13.2 2.6 19.7 3.9 11.9 9.2 20.4 18.2 29.4 9 9 17.5 14.3 29.4 18.2 6.7 2.2 9.4 2.6 21.2 2.6 11.8 0 14.5-.4 21.2-2.6 11.9-3.9 20.4-9.2 29.4-18.2 9-9 14.3-17.5 18.2-29.4 2.1-6.5 2.5-9.6 2.6-19.7 0-13.1-1.3-18.3-8.9-35.7-10.5-23.8-46.6-79.2-54.2-83.2-4.5-2.3-9.4-2.7-13.8-1.1zm15.2 56.2c15.5 23.9 24.6 40.9 28.3 53.2 3 9.7 2.3 17-2.5 26.7-4.2 8.6-10.2 14.4-19.3 18.7-6.1 2.9-7.6 3.2-16.2 3.2-8.6 0-10.1-.3-16.2-3.2-9.1-4.3-15.1-10.1-19.3-18.7-4.8-9.7-5.5-17-2.5-26.7 2.2-7.5 8.2-20.2 15.3-32.4 6.3-10.9 21.8-34.5 22.7-34.5.4 0 4.8 6.2 9.7 13.7zM238 339.5c-9.1 2.1-21.2 8.3-30 15.6-9.2 7.6-13.9 9.8-23.3 10.8-4 .5-8.7 1.6-10.4 2.4-4.5 2.4-7.7 8.1-7.7 13.7 0 9.5 7.1 16 17.4 16 14.2 0 28.9-5.8 42-16.4 11.9-9.6 15.4-11.1 26.5-11.1 10.7 0 17 2.4 25.2 9.7 25.8 23 63.5 23.5 89.3 1.2 9.9-8.6 15.5-10.9 26.5-10.9 11 0 16.6 2.3 26.5 10.9 12.2 10.6 29.8 17.2 43.7 16.4 4.3-.3 7.1-1 9-2.4 9.3-7 9.6-19.2.7-26.1-2.6-1.9-5.2-2.7-11.4-3.4-9.7-1.1-14.9-3.5-24.5-11.4-25.7-21.2-60.3-21.9-85.6-1.8-10.9 8.7-13.3 10.2-19.6 11.9-12 3.3-23.5.2-34.3-9-13.2-11.4-26.4-16.6-43-17.2-6.8-.2-12.8.2-17 1.1z" />
                    </svg>
                    <div class="sensor m-l-sm">{{ humidity }}</div>
                    <span v-if="isNumber(humidity)" class="unit m-l-sm">%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from 'vue'
import { Socket } from "socket.io-client";

const props = defineProps({
    id: { type: String, required: true },
    props: { type: Object, default: () => ({}) },
    state: { type: Object, default: () => ({ enabled: false, visible: false }) }
})

interface ServerToClientEvents {
    [key: string]: (msg: { payload: string }) => void;
}

const $socket: Socket<ServerToClientEvents> | undefined = inject('$socket')

const temp = ref('– –')
const humidity = ref('– –')
const date = ref('00.00.0000')
const time = ref('00:00')
const seconds = ref('00')

const colors = ['1', '2', '3', '4', '5', '6', '7']
const color = ref('bg-1')

const setOffline = () => {
    humidity.value = '– –'
    temp.value = '– –'
}

let offline = setTimeout(() => {
    setOffline()
}, 30000)

const setDate = () => {
    const now = new Date()
    time.value = now.getHours().toString().padStart(2, ' ') + ':' + now.getMinutes().toString().padStart(2, '0')
    seconds.value = now.getSeconds().toString().padStart(2, '0')
    date.value = now.toLocaleDateString()
}

setInterval(() => {
    setDate()
}, 1000)

const isNumber = (str: string) => {
    if (typeof str != "string") return false
    return !isNaN(parseFloat(str))
}

onMounted(() => {
    color.value = localStorage.getItem("color")||'bg-1';
    setDate()
    $socket?.on(`msg-input:${props.id}`, (msg) => {
        if (typeof msg.payload === "string") {
            const values = msg.payload.split(':')
            if (values.length == 2 && isNumber(values[0].trim()) && isNumber(values[1].trim())) {
                clearTimeout(offline)
                offline = setTimeout(() => {
                    setOffline()
                }, 30000)
                humidity.value = parseFloat(values[0].trim()).toFixed(1)
                temp.value = parseFloat(values[1].trim()).toFixed(1)
            } else {
                if (colors.includes(msg.payload)) {
                    const c = `bg-${msg.payload}`
                    color.value=c
                    localStorage.setItem("color", c);
                }
            }
        }
    })
})

onUnmounted(() => {
    clearTimeout(offline)
    $socket?.off(`msg-input:${props.id}`)
})

</script>

<style>
@import "../stylesheets/dht22.css";
</style>
