<template>
  <div class="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-200">
    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
      <UIcon :name="icon" class="size-6" />
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
