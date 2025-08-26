<script setup lang="ts">
defineProps<{
  activeCategory: string;
}>();

const emit = defineEmits<{
  (e: "update:activeCategory", value: string): void;
}>();

// fetch categories sekali saja
const { data: allGames } = useGames();

const categories = computed(() => {
  if (!allGames.value) return [];
  const genres = allGames.value.map((g: any) => g.genre);
  return [...new Set(genres)].slice(0, 12);
});

// Scroll categories horizontally
const categoriesContainer = ref<HTMLElement | null>(null);
const scrollLeft = () => {
  if (categoriesContainer.value) {
    categoriesContainer.value.scrollBy({ left: -200, behavior: "smooth" });
  }
};
const scrollRight = () => {
  if (categoriesContainer.value) {
    categoriesContainer.value.scrollBy({ left: 200, behavior: "smooth" });
  }
};
</script>

<template>
  <!-- Compact Categories with Navigation -->
  <div class="mb-8 relative">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-orbitron text-custom-white">Categories</h3>
      <div class="flex space-x-2">
        <button
          @click="scrollLeft"
          class="p-1 rounded-full bg-custom-arcade-dark/50 border border-custom-arcade-primary/30 hover:bg-custom-arcade-primary/20 transition-colors"
          aria-label="Scroll categories left"
        >
          <Icon
            name="lucide:chevron-left"
            class="w-4 h-4 text-custom-arcade-accent"
          />
        </button>
        <button
          @click="scrollRight"
          class="p-1 rounded-full bg-custom-arcade-dark/50 border border-custom-arcade-primary/30 hover:bg-custom-arcade-primary/20 transition-colors"
          aria-label="Scroll categories right"
        >
          <Icon
            name="lucide:chevron-right"
            class="w-4 h-4 text-custom-arcade-accent"
          />
        </button>
      </div>
    </div>

    <div
      ref="categoriesContainer"
      class="flex space-x-2 overflow-x-auto pb-3 scrollbar-hide"
      style="scrollbar-width: none; -ms-overflow-style: none"
    >
      <div
        v-for="(cat, index) in ['All', ...categories]"
        :key="index"
        class="flex-shrink-0"
        :class="{ active: activeCategory === cat }"
        @click="emit('update:activeCategory', cat)"
      >
        <div
          class="category-chip group px-4 py-2 rounded-full border transition-all duration-300 flex items-center space-x-2 cursor-pointer"
          :class="
            activeCategory === cat
              ? 'bg-custom-arcade-accent/20 border-custom-arcade-accent text-custom-arcade-accent'
              : 'bg-custom-arcade-dark/30 border-custom-arcade-primary/30 text-custom-white hover:bg-custom-arcade-primary/20 hover:border-custom-arcade-primary/50'
          "
        >
          <span class="text-sm">
            {{
              cat === "All"
                ? "🎮"
                : cat.includes("Shooter")
                ? "🔫"
                : cat.includes("RPG")
                ? "⚔️"
                : cat.includes("Strategy")
                ? "🧠"
                : cat.includes("Sports")
                ? "⚽"
                : cat.includes("Racing")
                ? "🏎️"
                : cat.includes("Fantasy")
                ? "✨"
                : cat.includes("MMO")
                ? "🌐"
                : cat.includes("Action")
                ? "💥"
                : cat.includes("Adventure")
                ? "🗺️"
                : cat.includes("Card")
                ? "🃏"
                : "🎲"
            }}
          </span>
          <span class="text-sm font-medium truncate max-w-[100px]">{{
            cat
          }}</span>
          <div
            v-if="activeCategory === cat"
            class="w-2 h-2 rounded-full bg-custom-arcade-accent animate-pulse flex-shrink-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.category-chip {
  transition: all 0.3s ease;
}

/* Animation for category chips */
@keyframes chipPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(132, 220, 245, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(132, 220, 245, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(132, 220, 245, 0);
  }
}

.category-chip.active {
  animation: chipPulse 2s infinite;
}
</style>
