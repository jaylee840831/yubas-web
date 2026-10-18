<template>
  <header class="relative bg-background text-foreground">
    <div
      class="header-wrapper flex w-full items-center justify-between px-6 lg:px-12 xl:px-16"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="shrink-0 text-[2rem] font-bold lg:text-[2.25rem]"
        aria-label="YUBAS 首頁"
        @click="closeAllMenus"
      >
        <img
          src="/images/logo.jpg"
          alt="YUBAS 機場接送服務"
          class="h-12 w-auto object-contain"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-8 lg:flex">
        <template
          v-for="item in menuItems"
          :key="item.label"
        >
          <!-- 沒有子選單 -->
          <NuxtLink
            v-if="!item.children && !item.customMenu"
            :to="item.to"
            class="py-2 text-md font-medium transition-colors hover:text-blue-400"
            @click="closeAllMenus"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- 有子選單 -->
          <div
            v-if="item.children && !item.customMenu"
            class="relative bg-background text-foreground"
          >
            <button
              type="button"
              class="flex items-center gap-1 py-2 text-md font-medium transition-colors hover:text-blue-400"
              :aria-expanded="desktopSubMenu === item.label"
              @click.stop="toggleDesktopSubMenu(item.label)"
            >
              {{ item.label }}

              <svg
                class="h-4 w-4 transition-transform"
                :class="{
                  'rotate-180': desktopSubMenu === item.label,
                }"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Desktop Dropdown -->
            <div
              v-if="desktopSubMenu === item.label"
              class="absolute left-0 top-full z-50 min-w-48 border border-white/10 bg-background py-2 text-foreground shadow-lg"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="block px-5 py-2 text-md transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                @click="closeAllMenus"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- 特殊樣式選單 -->
          <NuxtLink
            v-if="!item.children && item.customMenu"
            :to="item.to"
            class="flex items-center py-2 transition-opacity hover:opacity-80"
            :aria-label="item.label"
            @click="closeAllMenus"
          >
            <img
              :src="item.customMenu"
              :alt="item.label"
              class="h-15 w-auto object-contain"
            />
          </NuxtLink>
        </template>

        <!-- line -->
        <a
          href="https://page.line.me/671pygmo?oat__id=6948636&openQrModal=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/line.jpg"
            alt="免下載APP 立即登入"
            class="h-15 w-auto object-contain"
          >
        </a>
      </nav>

      <!-- Mobile Navigation -->
      <div class="mobile-menu-wrapper lg:hidden py-4">
        <!-- Hamburger -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-blue-500/10"
          :aria-expanded="isMobileMenuOpen"
          aria-label="切換選單"
          @click.stop="toggleMobileMenu"
        >
          <div class="flex w-6 flex-col gap-1.5">
            <span
              class="block h-0.5 w-full bg-current transition-transform"
              :class="{
                'translate-y-2 rotate-45': isMobileMenuOpen,
              }"
            />

            <span
              class="block h-0.5 w-full bg-current transition-opacity"
              :class="{
                'opacity-0': isMobileMenuOpen,
              }"
            />

            <span
              class="block h-0.5 w-full bg-current transition-transform"
              :class="{
                '-translate-y-2 -rotate-45': isMobileMenuOpen,
              }"
            />
          </div>
        </button>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-[-8px] opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-[-8px] opacity-0"
        >
          <div
            v-if="isMobileMenuOpen"
            class="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-background text-foreground shadow-lg h-screen overflow-y-auto"
            @click.stop
          >
            <nav class="px-6 py-4">
              <template
                v-for="item in menuItems"
                :key="item.label"
              >
                <!-- 沒有子選單 -->
                <NuxtLink
                  v-if="!item.children && !item.customMenu"
                  :to="item.to"
                  class="block border-b border-white/10 py-4 text-base font-medium transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                  @click="closeAllMenus"
                >
                  {{ item.label }}
                </NuxtLink>

                <!-- 有子選單 -->
                <div
                  v-if="item.children && !item.customMenu"
                  class="border-b border-white/10 bg-background text-foreground"
                >
                  <button
                    type="button"
                    class="flex w-full items-center justify-between py-4 text-left text-base font-medium transition-colors hover:text-blue-400"
                    :aria-expanded="mobileSubMenu === item.label"
                    @click="toggleMobileSubMenu(item.label)"
                  >
                    <span>{{ item.label }}</span>

                    <svg
                      class="h-5 w-5 transition-transform duration-200"
                      :class="{
                        'rotate-180': mobileSubMenu === item.label,
                      }"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <!-- Mobile Submenu -->
                  <Transition
                    enter-active-class="transition-all duration-200"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-40 opacity-100"
                    leave-active-class="transition-all duration-150"
                    leave-from-class="max-h-40 opacity-100"
                    leave-to-class="max-h-0 opacity-0"
                  >
                    <div
                      v-if="mobileSubMenu === item.label"
                      class="overflow-hidden pb-2"
                    >
                      <NuxtLink
                        v-for="child in item.children"
                        :key="child.to"
                        :to="child.to"
                        class="block py-3 pl-4 text-md transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                        @click="closeAllMenus"
                      >
                        {{ child.label }}
                      </NuxtLink>
                    </div>
                  </Transition>
                </div>

                <!-- 特殊樣式選單 -->
                <NuxtLink
                  v-if="!item.children && item.customMenu"
                  :to="item.to"
                  class="flex items-center justify-between border-b border-white/10 py-4 transition-opacity hover:opacity-80"
                  :aria-label="item.label"
                  @click="closeAllMenus"
                >
                  <img
                    :src="item.customMenu"
                    :alt="item.label"
                    class="h-15 w-auto object-contain"
                  />
                </NuxtLink>
              </template>

              <a
                href="https://page.line.me/671pygmo?oat__id=6948636&openQrModal=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/line.jpg"
                  alt="免下載APP 立即登入"
                  class="h-15 w-auto object-contain"
                >
              </a>
            </nav>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { menuItems } from '~/data/navigation'

const isMobileMenuOpen = ref(false)

const mobileSubMenu = ref<string | null>(null)
const desktopSubMenu = ref<string | null>(null)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  if (!isMobileMenuOpen.value) {
    mobileSubMenu.value = null
  }
}

const toggleMobileSubMenu = (label: string) => {
  mobileSubMenu.value =
    mobileSubMenu.value === label ? null : label
}

const toggleDesktopSubMenu = (label: string) => {
  desktopSubMenu.value =
    desktopSubMenu.value === label ? null : label
}

const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  mobileSubMenu.value = null
  desktopSubMenu.value = null
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target

  if (
    target instanceof Element &&
    !target.closest('.header-wrapper')
  ) {
    closeAllMenus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>