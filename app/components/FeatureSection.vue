<script setup lang="ts">
type Feature = {
  title: string
  description: string
  image?: string
}

const props = withDefaults(defineProps<{
  title: string
  subtitle: string
  description: string
  features: Feature[]

  // 每行顯示的卡片數量
  mobileCols?: 1 | 2 | 3 | 4
  tabletCols?: 1 | 2 | 3 | 4
  desktopCols?: 1 | 2 | 3 | 4

  // 平板與電腦的排列方式
  layout?: 'horizontal' | 'vertical'
}>(), {
  mobileCols: 1,
  tabletCols: 2,
  desktopCols: 2,
  layout: 'horizontal',
})

// Tailwind CSS class 對照表
// 使用完整 class 名稱，確保 Tailwind 能正確編譯
const gridCols = {
  mobile: {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  },
  tablet: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
  },
  desktop: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  },
} as const
</script>

<template>
  <section class="px-6 py-10">
    <div class="mx-auto max-w-7xl">

      <!-- 標題區 -->
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <h2 class="text-2xl font-bold tracking-tight text-sky-300 md:text-3xl">
          {{ title }}
        </h2>

        <h3 class="mt-2 text-lg font-medium text-foreground md:text-xl">
          {{ subtitle }}
        </h3>

        <p class="mt-2 text-base leading-8 text-gray-400 md:text-md">
          {{ description }}
        </p>
      </div>

      <!-- 卡片 Grid -->
      <div
        class="grid w-full gap-5"
        :class="[
          gridCols.mobile[props.mobileCols],
          gridCols.tablet[props.tabletCols],
          gridCols.desktop[props.desktopCols],
        ]"
      >
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-card relative flex flex-col gap-4 overflow-hidden rounded-2xl
                border border-sky-400/15 bg-sky-400/[0.04]
                transition-all duration-300
                hover:-translate-y-1 hover:border-sky-400/40
                hover:bg-sky-400/[0.08]"
          :class="props.layout === 'horizontal'
            ? 'sm:flex-row sm:items-center sm:gap-5'
            : 'sm:flex-col'"
        >

        <div aria-hidden="true" class="shine-overlay">
          <div class="shine-beam"></div>
        </div>

          <!-- 圖片區：手機固定在上方 -->
          <div
            class="flex h-48 w-full shrink-0 items-center justify-center
                   overflow-hidden rounded-xl border border-sky-400/20
                   bg-sky-400/10 text-lg font-bold text-sky-300"
            :class="props.layout === 'horizontal'
              ? 'sm:h-36 sm:w-36 lg:h-48 lg:w-48'
              : ''"
          >
            <img
              v-if="feature.image && !feature.image.startsWith('0')"
              :src="feature.image"
              :alt="feature.title"
              class="h-full w-full object-cover"
            />

            <span v-else>
              {{ feature.image ?? `0${index + 1}` }}
            </span>
          </div>

          <!-- 文字區 -->
          <div
            class="min-w-0 flex-1 px-4 pb-4"
            :class="props.layout === 'horizontal'
              ? 'sm:px-0 sm:py-2 sm:pr-4 sm:pb-2'
              : 'sm:py-2'"
          >
            <h4 class="text-lg font-semibold text-foreground">
              {{ feature.title }}
            </h4>

            <p class="mt-2 text-sm leading-7 text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  isolation: isolate;
}

.shine-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}

.shine-beam {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  transform: translateX(-200%) skewX(-20deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgb(255 255 255 / 15%),
    transparent
  );
}

.feature-card:hover .shine-beam {
  transform: translateX(300%) skewX(-20deg);
  transition: transform 700ms ease-in-out;
}
</style>