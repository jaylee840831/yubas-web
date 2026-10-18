<script setup lang="ts">
type Feature = {
  title: string
  description: string
  image?: string
}

withDefaults(defineProps<{
  title: string
  subtitle: string
  description: string
  features: Feature[]
}>(), {
})
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

      <!-- 4 宮格：手機 1 欄、平板 2 欄、桌機 4 欄 -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        <article
        v-for="(feature, index) in features"
        :key="feature.title"
        class="group flex items-center gap-5 rounded-2xl border border-sky-400/15
                bg-sky-400/[0.04]
                transition-all duration-300
                hover:-translate-y-1 hover:border-sky-400/40
                hover:bg-sky-400/[0.08]"
        >
        <!-- 左側圖片 -->
        <div
            class="flex h-48 w-48 shrink-0 items-center justify-center
                overflow-hidden rounded-xl border border-sky-400/20
                bg-sky-400/10 text-lg font-bold text-sky-300"
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

        <!-- 右側文字 -->
        <div class="min-w-0 flex-1">
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