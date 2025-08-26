<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/").filter(Boolean);
  const fullPath = ["home", ...pathArray];

  return fullPath.map((segment, index) => {
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: "/" + fullPath.slice(0, index + 1).join("/"),
    };
  });
});
</script>

<template>
  <nav
    class="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md text-white shadow-lg border-b border-gray-700"
  >
    <div class="container flex items-center justify-between py-4">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-2xl font-extrabold text-yellow-400 hover:text-yellow-300 transition"
      >
        ArcadeHub
      </NuxtLink>
    </div>

    <!-- Breadcrumb -->
    <div class="container pb-3">
      <nav class="flex flex-wrap items-center text-sm text-gray-300">
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
          <!-- Link -->
          <NuxtLink
            v-if="index !== breadcrumbs.length - 1 && crumb.name !== 'Game'"
            :to="crumb.name === 'Home' ? '/' : crumb.path"
            class="hover:text-yellow-300 transition-colors"
          >
            {{ crumb.name }}
          </NuxtLink>

          <!-- Last segment -->
          <span v-else class="font-semibold text-yellow-400">
            {{ crumb.name }}
          </span>

          <!-- Separator -->
          <span
            v-if="index < breadcrumbs.length - 1"
            class="mx-2 text-gray-500"
          >
            ›
          </span>
        </template>
      </nav>
    </div>
  </nav>
</template>
