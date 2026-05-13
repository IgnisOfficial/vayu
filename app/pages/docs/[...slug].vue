<template>
  <div class="min-h-screen bg-white dark:bg-gray-950">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-4">
            <UButton
              variant="ghost"
              color="neutral"
              class="lg:hidden"
              @click="sidebarOpen = !sidebarOpen"
            >
              <UIcon name="i-lucide-menu" class="size-5" />
            </UButton>
            <NuxtLink to="/" class="flex items-center gap-2">
              <span class="text-2xl font-bold text-green-500">V</span>
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Vayu</span>
            </NuxtLink>
          </div>
          <nav class="flex items-center gap-4">
            <NuxtLink to="/" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
              Home
            </NuxtLink>
            <a href="https://github.com/ACoderBoy/vayu" target="_blank" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
              GitHub
            </a>
            <UColorModeButton />
          </nav>
        </div>
      </div>
    </header>

    <div class="max-w-[90rem] mx-auto flex">
      <!-- Sidebar -->
      <aside
        :class="[
          'fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-transform lg:translate-x-0 pb-8',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]"
      >
        <nav class="p-4 space-y-6">
          <div v-for="section in navigation" :key="section.title">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-3">
              {{ section.title }}
            </h4>
            <ul class="space-y-1">
              <li v-for="item in section.items" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="block px-3 py-2 text-sm rounded-lg transition-colors"
                  :class="isActive(item.path)
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'"
                  @click="sidebarOpen = false"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Overlay for mobile sidebar -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-30 bg-black/50 lg:hidden"
        @click="sidebarOpen = false"
      />

      <!-- Content -->
      <main class="flex-1 min-w-0 px-4 sm:px-8 lg:px-16 py-10">
        <article v-if="page" class="max-w-3xl mx-auto">
          <ContentRenderer :value="page" class="prose prose-lg dark:prose-invert prose-green max-w-none prose-headings:scroll-mt-24 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:dark:bg-gray-800" />

          <!-- Prev/Next navigation -->
          <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <NuxtLink
              v-if="prevPage"
              :to="prevPage.path"
              class="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-500"
            >
              <UIcon name="i-lucide-arrow-left" class="size-4" />
              <div>
                <div class="text-xs text-gray-500">Previous</div>
                <div class="font-medium text-gray-900 dark:text-white group-hover:text-green-500">{{ prevPage.title }}</div>
              </div>
            </NuxtLink>
            <div v-else />
            <NuxtLink
              v-if="nextPage"
              :to="nextPage.path"
              class="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 text-right"
            >
              <div>
                <div class="text-xs text-gray-500">Next</div>
                <div class="font-medium text-gray-900 dark:text-white group-hover:text-green-500">{{ nextPage.title }}</div>
              </div>
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </NuxtLink>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const sidebarOpen = ref(false)

const { data: page } = await useAsyncData(`doc-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Installation', path: '/docs/getting-started/installation' },
      { title: 'Requirements', path: '/docs/getting-started/requirements' },
      { title: 'Quick Start', path: '/docs/getting-started/quick-start' },
    ],
  },
  {
    title: 'Architecture',
    items: [
      { title: 'Directory Structure', path: '/docs/architecture/directory-structure' },
      { title: 'Request Lifecycle', path: '/docs/architecture/request-lifecycle' },
      { title: 'Design Principles', path: '/docs/architecture/design-principles' },
    ],
  },
  {
    title: 'The Basics',
    items: [
      { title: 'Routing', path: '/docs/the-basics/routing' },
      { title: 'Controllers', path: '/docs/the-basics/controllers' },
      { title: 'Views & Pages', path: '/docs/the-basics/views-and-pages' },
      { title: 'Database', path: '/docs/the-basics/database' },
      { title: 'Environment', path: '/docs/the-basics/environment' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Component System', path: '/docs/components/component-system' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Authentication', path: '/docs/advanced/authentication' },
      { title: 'Validation', path: '/docs/advanced/validation' },
      { title: 'Async & Parallel', path: '/docs/advanced/async' },
      { title: 'CORS', path: '/docs/advanced/cors' },
      { title: 'Mailer', path: '/docs/advanced/mailer' },
      { title: 'HTTP Helpers', path: '/docs/advanced/http-helpers' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Core Classes', path: '/docs/api-reference/core-classes' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { title: 'Server Configuration', path: '/docs/deployment/server-config' },
    ],
  },
]

const allPages = navigation.flatMap(section => section.items)

const currentIndex = computed(() =>
  allPages.findIndex(p => p.path === route.path)
)

const prevPage = computed(() =>
  currentIndex.value > 0 ? allPages[currentIndex.value - 1] : null
)

const nextPage = computed(() =>
  currentIndex.value < allPages.length - 1 ? allPages[currentIndex.value + 1] : null
)

function isActive(path: string) {
  return route.path === path
}
</script>
