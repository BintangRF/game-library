<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="text-center mb-16 relative">
    <div class="inline-block relative">
      <h2
        class="text-5xl md:text-6xl font-orbitron font-extrabold tracking-wide text-custom-arcade-accent drop-shadow-[0_0_15px_var(--color-custom-arcade-accent)] relative z-10"
      >
        {{ title }}
      </h2>
      <div
        class="absolute -inset-2 bg-custom-arcade-accent/20 blur-lg rounded-lg -z-10"
      ></div>
    </div>

    <p
      v-if="subtitle"
      class="mt-4 text-custom-white/80 font-inter text-lg max-w-2xl mx-auto"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
