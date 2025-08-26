<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

type GameProps = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  [key: string]: any;
};

type GamesResponseProps = {
  items: GameProps[];
  total: number;
  page: number;
  pageSize: number;
};

// state pagination & search
const page = ref(1);
const pageSize = ref(20);
const searchInput = ref("");
const searchQuery = ref("");

// state kategori
const activeCategory = ref("All");

// handle search
const handleSearch = () => {
  searchQuery.value = searchInput.value;
  page.value = 1;
};
const clearSearch = () => {
  searchInput.value = "";
  searchQuery.value = "";
  page.value = 1;
};

// fetcher
const fetchGames = async ({ queryKey }: { queryKey: any }) => {
  const [_key, page, pageSize, search, category] = queryKey;
  return await $fetch<GamesResponseProps>(
    `/api/all-games?page=${page}&pageSize=${pageSize}&search=${encodeURIComponent(
      search
    )}&category=${encodeURIComponent(category)}`
  );
};

// query key reactive
const queryKey = computed(() => [
  "games",
  page.value,
  pageSize.value,
  searchQuery.value,
  activeCategory.value,
]);

// fetch games
const {
  data: gamesData,
  isLoading,
  error,
} = useQuery({
  queryKey,
  queryFn: fetchGames,
});

// computed list games
const games = computed(() => gamesData.value?.items || []);
</script>

<template>
  <section
    id="games"
    class="min-h-screen container text-custom-arcade-accent font-inter"
  >
    <!-- Section Title -->
    <SectionTitle
      title="Free Arcade Games"
      subtitle="Browse by category or search your next favorite!"
    />

    <!-- Categories -->

    <Category v-model:activeCategory="activeCategory" />

    <!-- Search input -->
    <div class="mb-8 flex flex-col sm:flex-row items-center gap-4">
      <div class="relative w-full sm:flex-1">
        <input
          v-model="searchInput"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Search by title..."
          class="w-full p-3 rounded-lg border border-custom-white/20 bg-arcade-dark text-custom-white placeholder-custom-arcade-accent focus:outline-none focus:ring-2 focus:ring-custom-arcade-primary"
        />
        <button
          v-if="searchInput"
          @click="clearSearch"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-custom-arcade-accent hover:text-custom-arcade-primary"
          type="button"
        >
          <Icon name="lucide:x" class="w-5 h-5" />
        </button>
      </div>
      <button
        @click="handleSearch"
        class="px-6 py-3 bg-custom-arcade-primary text-white font-semibold rounded-lg hover:bg-custom-arcade-secondary transition-colors"
      >
        Search
      </button>
    </div>

    <!-- Loading / Error -->
    <div v-if="isLoading"><Loading /></div>
    <div v-else-if="error"><Error /></div>

    <!-- Games Grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <CardGame v-for="game in games" :key="game.id" :game="game" />
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-center">
      <Pagination
        v-if="gamesData && gamesData.total > pageSize"
        :total="gamesData.total"
        :page="page"
        :pageSize="pageSize"
        :onPageChange="(p: number) => (page = p)"
      />
    </div>
  </section>
</template>
