<template>
  <div>
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="text-2xl font-bold text-green-500">V</span>
            <span class="text-lg font-semibold text-gray-900 dark:text-white">Vayu</span>
          </NuxtLink>
          <nav class="flex items-center gap-6">
            <NuxtLink to="/docs/getting-started/installation" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
              Docs
            </NuxtLink>
            <a href="https://github.com/ACoderBoy/vayu" target="_blank" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
              GitHub
            </a>
            <UColorModeButton />
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-8">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            v1.0.4
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            The Lightweight
            <span class="text-green-500">PHP Framework</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Vayu is a minimalist PHP micro-framework for building web applications and RESTful APIs. No magic, no bloat — just clean, explicit code.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UButton to="/docs/getting-started/installation" size="lg" color="primary" class="px-8">
              Get Started
              <template #trailing>
                <UIcon name="i-lucide-arrow-right" />
              </template>
            </UButton>
            <UButton size="lg" variant="outline" color="neutral" class="px-8 font-mono text-sm" @click="copyInstall">
              <UIcon name="i-lucide-terminal" />
              composer create-project vayu
              <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="ml-2" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 sm:py-28 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Built-in features for modern PHP development
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </section>

    <!-- Code Example -->
    <section class="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Simple by Design
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Define routes, build controllers, and render views with clean, readable PHP. No annotations, no attributes, no hidden behavior.
            </p>
            <ul class="mt-8 space-y-4">
              <li v-for="point in highlights" :key="point" class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="text-green-500 mt-0.5 shrink-0 size-5" />
                <span class="text-gray-700 dark:text-gray-300">{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-2xl overflow-x-auto">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500" />
              <div class="w-3 h-3 rounded-full bg-yellow-500" />
              <div class="w-3 h-3 rounded-full bg-green-500" />
              <span class="ml-2 text-xs text-gray-500 font-mono">api/gateway.php</span>
            </div>
            <pre class="text-sm text-gray-300 font-mono leading-relaxed"><code><span class="text-purple-400">&lt;?php</span>

<span class="text-blue-400">class</span> <span class="text-green-400">ApiGatewayProvider</span> <span class="text-blue-400">extends</span> <span class="text-yellow-400">RouteProvider</span>
{
    <span class="text-blue-400">public static function</span> <span class="text-green-400">routes</span>(): <span class="text-yellow-400">array</span>
    {
        <span class="text-blue-400">return</span> [
            <span class="text-orange-400">'POST:api/v1/auth/login'</span>
                => [<span class="text-orange-400">'UserController'</span>, <span class="text-orange-400">'login'</span>],

            <span class="text-orange-400">'GET:api/v1/users'</span>
                => [<span class="text-orange-400">'UserController'</span>, <span class="text-orange-400">'index'</span>, <span class="text-orange-400">'auth'</span>],

            <span class="text-orange-400">'GET:api/v1/users/{id}'</span>
                => [<span class="text-orange-400">'UserController'</span>, <span class="text-orange-400">'show'</span>, <span class="text-orange-400">'auth'</span>],
        ];
    }
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 sm:py-28 bg-white dark:bg-gray-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Ready to Build?
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Get up and running with Vayu in under 5 minutes.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton to="/docs/getting-started/installation" size="lg" color="primary" class="px-8">
            Read the Docs
          </UButton>
          <UButton to="/docs/getting-started/quick-start" size="lg" variant="outline" color="neutral" class="px-8">
            Quick Start Guide
          </UButton>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 py-12 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold text-green-500">V</span>
            <span class="text-sm text-gray-500">Vayu Framework v1.0.4</span>
          </div>
          <p class="text-sm text-gray-500">
            Built by Sudipta. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const copied = ref(false)

function copyInstall() {
  navigator.clipboard.writeText('composer create-project vayu')
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

const features = [
  {
    icon: 'i-lucide-route',
    title: 'Dual Routing',
    description: 'Separate frontend and API routing systems. Simple key-value definitions with dynamic parameter support.',
  },
  {
    icon: 'i-lucide-shield',
    title: 'Authentication',
    description: 'Session-based auth for frontend pages and JWT tokens for APIs. Built-in email verification and remember me.',
  },
  {
    icon: 'i-lucide-database',
    title: 'Multi-Database',
    description: 'SQLite, MySQL, and MongoDB out of the box. PDO prepared statements keep your queries injection-safe.',
  },
  {
    icon: 'i-lucide-component',
    title: 'Component System',
    description: 'Reusable UI components with isolated scopes via output buffering. No variable leakage between components.',
  },
  {
    icon: 'i-lucide-check-circle',
    title: 'Input Validation',
    description: 'Rule-based validation with auto 422 responses in API controllers. Required, email, min, max, and more.',
  },
  {
    icon: 'i-lucide-zap',
    title: 'Async & Parallel',
    description: 'Parallel HTTP requests via cURL multi, deferred tasks that run after response, and batch operations.',
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email Support',
    description: 'PHPMailer wrapper for SMTP emails. Pre-configured for Gmail with HTML email support.',
  },
  {
    icon: 'i-lucide-globe',
    title: 'CORS Handling',
    description: 'Automatic CORS headers for API routes. Configurable origins with pre-flight request support.',
  },
  {
    icon: 'i-lucide-terminal',
    title: 'CLI Tools',
    description: 'Built-in CLI for starting the dev server and interactive project setup. Simple and scriptable.',
  },
]

const highlights = [
  'No magic autoloading — explicit glob-based class loading',
  'Two controller hierarchies for frontend and API separation',
  'Environment-driven configuration via .env files',
  'SQL injection-safe by default with prepared statements',
  'PHP 8.1+ with modern enum support',
]
</script>
