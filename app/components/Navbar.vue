<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <nav
    class="bg-custom-arcade-dark text-custom-white font-orbitron shadow-lg fixed w-full z-50"
  >
    <div class="container flex items-center justify-between py-4">
      <!-- Logo -->
      <a
        href="#home"
        class="text-2xl font-bold text-custom-arcade-primary hover:text-custom-arcade-secondary transition flex items-center"
      >
        🎮 ArcadeHub
        <span
          class="text-xs bg-custom-arcade-accent text-custom-arcade-dark rounded px-2 py-1 ml-2"
        >
          Beta
        </span>
      </a>

      <!-- Menu Desktop -->
      <div class="hidden md:flex items-center gap-6 text-sm">
        <a
          href="#home"
          class="hover:text-custom-arcade-accent transition flex items-center"
        >
          <Icon name="lucide:home" class="w-4 h-4 mr-1" /> Home
        </a>
        <a
          href="#trending"
          class="hover:text-custom-arcade-accent transition flex items-center"
        >
          <Icon name="lucide:flame" class="w-4 h-4 mr-1" /> Trending
        </a>
        <a
          href="#games"
          class="hover:text-custom-arcade-accent transition flex items-center"
        >
          <Icon name="lucide:gamepad-2" class="w-4 h-4 mr-1" /> games
        </a>
        <a
          href="#stats"
          class="hover:text-custom-arcade-accent transition flex items-center"
        >
          <Icon name="lucide:bar-chart-3" class="w-4 h-4 mr-1" /> Stats
        </a>
        <a
          href="#about"
          class="hover:text-custom-arcade-accent transition flex items-center"
        >
          <Icon name="lucide:info" class="w-4 h-4 mr-1" /> About
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <Icon
            :name="isOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-6 h-6 text-custom-arcade-primary"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="md:hidden bg-custom-arcade-dark text-center py-4 transition-all duration-300"
    >
      <a
        href="#home"
        class="block py-3 hover:text-custom-arcade-accent transition border-b border-custom-arcade-darker"
        @click="isOpen = false"
      >
        <Icon name="lucide:home" class="w-4 h-4 inline-block mr-2" /> Home
      </a>
      <a
        href="#trending"
        class="block py-3 hover:text-custom-arcade-accent transition border-b border-custom-arcade-darker"
        @click="isOpen = false"
      >
        <Icon name="lucide:flame" class="w-4 h-4 inline-block mr-2" /> Trending
      </a>
      <a
        href="#games"
        class="block py-3 hover:text-custom-arcade-accent transition border-b border-custom-arcade-darker"
        @click="isOpen = false"
      >
        <Icon name="lucide:gamepad-2" class="w-4 h-4 inline-block mr-2" />
        games
      </a>
      <a
        href="#stats"
        class="block py-3 hover:text-custom-arcade-accent transition border-b border-custom-arcade-darker"
        @click="isOpen = false"
      >
        <Icon name="lucide:bar-chart-3" class="w-4 h-4 inline-block mr-2" />
        Stats
      </a>
      <a
        href="#about"
        class="block py-3 hover:text-custom-arcade-accent transition border-b border-custom-arcade-darker"
        @click="isOpen = false"
      >
        <Icon name="lucide:info" class="w-4 h-4 inline-block mr-2" /> About
      </a>
    </div>
  </nav>
</template>
