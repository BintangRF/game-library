<script setup lang="ts">
import { NuxtLink } from "#components";

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  game_url?: string;
};

const props = defineProps<{
  game: Game;
}>();

// 🔹 Dynamic gradient untuk genre badge
const genreColors: Record<string, string> = {
  Shooter: "from-pink-500 to-red-500",
  RPG: "from-green-400 to-emerald-600",
  Strategy: "from-yellow-400 to-orange-500",
  MOBA: "from-blue-400 to-indigo-600",
  Fighting: "from-purple-500 to-pink-600",
};

const genreClass = computed(() => {
  return (
    genreColors[props.game.genre] ||
    "from-custom-arcade-secondary to-custom-arcade-primary"
  );
});
</script>

<template>
  <div
    class="relative group game-card rounded-2xl shadow-xl border-2 border-custom-arcade-primary transition-all duration-500 bg-gradient-to-b from-[#1a1a2e] to-[#0f172a] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]"
  >
    <!-- Ranking Badge -->
    <div
      class="absolute -top-3 -left-3 z-20 w-10 h-10 flex items-center justify-center bg-custom-arcade-accent rounded-full border-2 border-custom-arcade-dark font-orbitron font-bold text-custom-arcade-dark shadow-lg animate-bounce"
    >
      {{ props.game.id }}
    </div>

    <!-- Thumbnail -->
    <div class="relative overflow-hidden">
      <img
        :src="props.game.thumbnail"
        :alt="props.game.title"
        class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <!-- Overlay hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-custom-arcade-dark via-custom-arcade-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3"
      >
        <p class="text-custom-white text-xs font-inter line-clamp-2">
          {{ props.game.short_description || "No description available." }}
        </p>
      </div>
      <!-- Platform Badge -->
      <div
        class="absolute top-2 right-2 bg-custom-arcade-dark/90 text-custom-white text-xs px-2 py-1 rounded-full font-bold shadow-md"
      >
        {{ props.game.platform }}
      </div>
    </div>

    <!-- Info -->
    <div class="p-4 flex flex-col justify-between h-44">
      <div>
        <h3
          class="text-lg font-orbitron bg-gradient-to-r from-custom-arcade-primary via-custom-arcade-secondary to-custom-arcade-accent bg-clip-text text-transparent mb-2 truncate"
          :title="props.game.title"
        >
          {{ props.game.title }}
        </h3>
        <span
          class="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r text-white border border-custom-arcade-primary/50 shadow-sm"
          :class="genreClass"
        >
          {{ props.game.genre }}
        </span>
      </div>

      <!-- Actions -->
      <div class="mt-3 flex gap-2">
        <NuxtLink
          :to="`/game/${props.game.id}`"
          class="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white text-sm font-inter rounded-lg text-center shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] transition-all duration-300 hover:animate-pulse"
        >
          Details
        </NuxtLink>

        <a
          v-if="props.game.game_url"
          :href="props.game.game_url"
          target="_blank"
          class="flex-1 px-3 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-orange-400 hover:to-yellow-400 text-black text-sm font-inter rounded-lg text-center shadow-lg hover:shadow-[0_0_15px_rgba(250,204,21,0.7)] transition-all duration-300 hover:animate-pulse"
        >
          Play Now
        </a>
      </div>
    </div>

    <!-- Pixel Corners -->
    <div class="pixel-corner top-left"></div>
    <div class="pixel-corner top-right"></div>
    <div class="pixel-corner bottom-left"></div>
    <div class="pixel-corner bottom-right"></div>

    <!-- Animated neon border -->
    <div
      class="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none animate-borderGlow"
    ></div>
  </div>
</template>

<style scoped>
.pixel-corner {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--color-custom-arcade-accent);
}
.pixel-corner.top-left {
  top: -2px;
  left: -2px;
  clip-path: polygon(0 0, 0 100%, 100% 0);
}
.pixel-corner.top-right {
  top: -2px;
  right: -2px;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
}
.pixel-corner.bottom-left {
  bottom: -2px;
  left: -2px;
  clip-path: polygon(0 100%, 0 0, 100% 100%);
}
.pixel-corner.bottom-right {
  bottom: -2px;
  right: -2px;
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
}

.game-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Neon border glow animation */
@keyframes borderGlow {
  0% {
    box-shadow: 0 0 3px rgba(124, 58, 237, 0.6), 0 0 8px rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.9),
      0 0 15px rgba(59, 130, 246, 0.7);
  }
  100% {
    box-shadow: 0 0 3px rgba(124, 58, 237, 0.6), 0 0 8px rgba(59, 130, 246, 0.4);
  }
}
.animate-borderGlow {
  animation: borderGlow 3s infinite ease-in-out;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
