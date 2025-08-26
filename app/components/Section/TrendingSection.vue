<script setup lang="ts">
const { data: games, isLoading, error } = useGames();

// 🔹 Trending (random 6 game)
const trendingGames = computed(() => {
  if (!games.value) return [];
  return [...games.value]
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 6);
});
</script>

<template>
  <!-- ✅ Trending Games -->
  <section id="trending" class="container relative">
    <!-- Judul Section -->
    <SectionTitle
      title="Trending Now"
      subtitle="Check out the hottest games this week!"
    />

    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else-if="error">
      <Error />
    </div>

    <!-- Grid Card -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      <CardGame v-for="game in trendingGames" :key="game.id" :game="game" />
    </div>
  </section>
</template>
