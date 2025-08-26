<script setup lang="ts">
definePageMeta({
  layout: "detail",
});

import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();

type GameProps = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  status: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots?: { id: number; image: string }[];
};

const fetchGames = async () => {
  return await $fetch<GameProps>(`/api/game/${route.params.id}`);
};

const {
  data: game,
  isLoading,
  error,
} = useQuery({
  queryKey: ["game"],
  queryFn: fetchGames,
});
</script>

<template>
  <section
    class="min-h-screen container bg-custom-arcade-dark text-custom-white font-inter"
  >
    <div v-if="isLoading" class="flex justify-center items-center h-[60vh]">
      <Loading />
    </div>
    <div v-else-if="error" class="flex justify-center items-center h-[60vh]">
      <Error />
    </div>

    <div v-else-if="game" class="space-y-8">
      <!-- Thumbnail + Title -->
      <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img
          :src="game.thumbnail"
          alt="thumbnail"
          class="w-full md:w-64 h-auto rounded-xl shadow-lg object-cover"
        />
        <div class="flex-1">
          <h1 class="text-3xl md:text-4xl font-orbitron font-extrabold mb-2">
            {{ game.title }}
          </h1>
          <p class="text-gray-300 text-sm md:text-base mb-3">
            {{ game.short_description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="px-3 py-1 bg-custom-arcade-primary rounded-full text-xs md:text-sm"
            >
              {{ game.genre }}
            </span>
            <span
              class="px-3 py-1 bg-custom-arcade-secondary rounded-full text-xs md:text-sm"
            >
              {{ game.platform }}
            </span>
          </div>
          <a
            :href="game.game_url"
            target="_blank"
            class="px-4 py-2 bg-custom-arcade-accent text-black font-bold rounded-lg shadow hover:bg-yellow-400 transition"
          >
            ▶ Play Now
          </a>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2 space-y-6">
          <!-- About -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-2 font-orbitron">
              About the Game
            </h2>
            <p
              class="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line"
            >
              {{ game.description }}
            </p>
          </div>

          <!-- Screenshots -->
          <div v-if="game.screenshots?.length">
            <h3 class="text-2xl md:text-3xl font-bold mb-2 font-orbitron">
              Screenshots
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="s in game.screenshots"
                :key="s.id"
                class="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  :src="s.image"
                  class="w-full h-48 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Game Info & System Requirements -->
        <div class="space-y-6">
          <!-- Game Info -->
          <div
            class="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 shadow hover:scale-[1.02] transition"
          >
            <h3 class="text-xl md:text-2xl font-bold mb-2 font-orbitron">
              Game Info
            </h3>
            <ul class="space-y-1 text-gray-300 text-sm md:text-base">
              <li><b>Status:</b> {{ game.status }}</li>
              <li><b>Publisher:</b> {{ game.publisher }}</li>
              <li><b>Developer:</b> {{ game.developer }}</li>
              <li><b>Release Date:</b> {{ game.release_date }}</li>
            </ul>
          </div>

          <!-- System Requirements -->
          <div
            class="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 shadow hover:scale-[1.02] transition"
          >
            <h3 class="text-xl md:text-2xl font-bold mb-2 font-orbitron">
              System Requirements
            </h3>
            <ul
              v-if="game.minimum_system_requirements"
              class="space-y-1 text-gray-300 text-sm md:text-base"
            >
              <li><b>OS:</b> {{ game.minimum_system_requirements.os }}</li>
              <li>
                <b>Processor:</b>
                {{ game.minimum_system_requirements.processor }}
              </li>
              <li>
                <b>Memory:</b> {{ game.minimum_system_requirements.memory }}
              </li>
              <li>
                <b>Graphics:</b> {{ game.minimum_system_requirements.graphics }}
              </li>
              <li>
                <b>Storage:</b> {{ game.minimum_system_requirements.storage }}
              </li>
            </ul>
            <p v-else class="text-gray-400 text-sm">No data available.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
