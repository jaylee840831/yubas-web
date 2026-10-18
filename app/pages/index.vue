<script setup lang="ts">
useSeoMeta({
  title: '首頁 | ',
  description: 'YUBAS 機場接送推薦平台，提供全台 24H 合法叫車服務、LINE@ AI 智慧報價與透明價格，免下載 APP，讓每趟旅程安心可靠。',
  ogTitle: '首頁 | YUBAS 機場接送推薦平台，提供全台 24H 合法叫車服務、LINE@ AI 智慧報價與透明價格，免下載 APP，讓每趟旅程安心可靠。',
  ogDescription: 'YUBAS 機場接送推薦平台，提供全台 24H 合法叫車服務、LINE@ AI 智慧報價與透明價格，免下載 APP，讓每趟旅程安心可靠。',
})

const features = [
  {
    title: '市區專車接送服務',
    description: '不用下載APP，用LINE@就能完成快速報價。從您家裡出發直達目的地，滿足您外出旅遊的用車需求。',
    image: '/images/drive.jpg',
  },
  {
    title: '商務行程包車服務',
    description: '專為企業出差、外賓接送與商務考察設計。提供高規格舒適車款與專業司機，行程彈性安排，彰顯不凡的商務用車實力。',
    image: '/images/van.jpg',
  },
  {
    title: '計時包車服務，價格透明',
    description: '您可以依據自訂行程選擇半日或全日包車。出發前 24H 自由取消，無條件退款已消費之金額點數。',
    image: '/images/van2.jpg',
  },
  {
    title: '機場接送服務',
    description: '滿足多樣化跨區移動情境。無論是商務出差、登山接駁，皆由合法合法車隊與專業司機為您打造高 CP 值體驗。',
    image: '/images/airport.jpg',
  },
]
</script>

<template>
  <main>
    <!-- Hero 圖片 -->
    <section class="relative h-[360px] overflow-hidden md:h-[460px]">
    <img
        src="/images/hero.jpg"
        alt="YUBAS AI 智慧接送服務"
        class="absolute inset-0 h-full w-full object-cover"
    >

    <!-- 整體暗色遮罩 -->
    <div class="absolute inset-0 bg-black/30" />

    <!-- 底部漸層淡出 -->
    <div
        class="absolute inset-x-0 bottom-0 h-32
            bg-gradient-to-b from-transparent to-background"
    />
    </section>

		<section class="relative flex items-center justify-center overflow-hidden">
			<NuxtLink
				to="/booking"
				class="flow-bg group inline-flex items-center gap-3
							rounded-full border border-sky-300/40
							px-20 py-3.5 font-semibold text-white
							transition-all duration-300
							active:scale-[0.98]"
			>
				<span>立即線上預約</span>

				<svg
					class="h-5 w-5 transition-transform duration-300
								group-hover:translate-x-1"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M5 12h14" />
					<path d="m12 5 7 7-7 7" />
				</svg>
			</NuxtLink>
		</section>
		
		<FeatureSection
			title="台灣市區接駁、機場接送與包車首選"
			subtitle=""
			description="YUBAS 提供專業機場接送、市區接駁與包車服務，滿足您在台灣各地的交通需求。無論是桃園機場接送、台中機場接送、跨縣市接送、商務出差，或旅遊包車與團體接駁，都能透過 YUBAS 安排合適的車型與駕駛服務。從預約、報價到派車，提供透明且便利的線上服務，搭配合法車隊與專業駕駛，讓每趟旅程都能享有安全、舒適且高效率的接送體驗。"
			:features="features"
		/>
  </main>
</template>