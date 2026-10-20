<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'yHURp3PjHCzhK7Z2yqH_bI0IbxKbZMTQHcshTccdE-g',
      key: 'google-site-verification',
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>
