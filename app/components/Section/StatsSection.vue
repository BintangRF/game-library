<script setup lang="ts">
const { data: games } = useGames();

// 🔹 Hitung Stats
const totalGames = computed(() => games.value?.length || 0);
const totalGenres = computed(() =>
  games.value ? new Set(games.value.map((g: any) => g.genre)).size : 0
);
const totalPlatforms = computed(() =>
  games.value ? new Set(games.value.map((g: any) => g.platform)).size : 0
);

// Animation counter
const animatedTotalGames = ref(0);
const animatedTotalGenres = ref(0);
const animatedTotalPlatforms = ref(0);

onMounted(() => {
  // Animate the counters
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      callback(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // Start animations with slight delays for visual effect
  setTimeout(
    () =>
      animateValue(
        0,
        totalGames.value || 500,
        2000,
        (val) => (animatedTotalGames.value = val)
      ),
    300
  );
  setTimeout(
    () =>
      animateValue(
        0,
        totalGenres.value || 500,
        1500,
        (val) => (animatedTotalGenres.value = val)
      ),
    600
  );
  setTimeout(
    () =>
      animateValue(
        0,
        totalPlatforms.value || 500,
        1800,
        (val) => (animatedTotalPlatforms.value = val)
      ),
    900
  );
});
</script>

<template>
  <!-- ✅ Stats Section -->
  <section id="stats" class="container relative overflow-hidden">
    <!-- Judul Section -->
    <SectionTitle
      title="Game Stats"
      subtitle="Discover our massive collection of free-to-play games across multiple platforms and genres"
    />

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      <!-- Games Available -->
      <div class="stat-card group">
        <div class="stat-icon">
          <span class="text-3xl">🎮</span>
        </div>
        <div class="stat-content">
          <p class="stat-number">{{ animatedTotalGames }}+</p>
          <p class="stat-label">Games Available</p>
        </div>
        <div class="stat-glow"></div>
      </div>

      <!-- Genres -->
      <div class="stat-card group">
        <div class="stat-icon">
          <span class="text-3xl">🏷️</span>
        </div>
        <div class="stat-content">
          <p class="stat-number">{{ animatedTotalGenres }}+</p>
          <p class="stat-label">Unique Genres</p>
        </div>
        <div class="stat-glow"></div>
      </div>

      <!-- Platforms -->
      <div class="stat-card group">
        <div class="stat-icon">
          <span class="text-3xl">💻</span>
        </div>
        <div class="stat-content">
          <p class="stat-number">{{ animatedTotalPlatforms }}+</p>
          <p class="stat-label">Platforms</p>
        </div>
        <div class="stat-glow"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: rgba(26, 26, 46, 0.6);
  border: 2px solid var(--color-custom-arcade-primary);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-custom-arcade-accent);
  box-shadow: 0 10px 25px rgba(82, 82, 212, 0.3);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(82, 82, 212, 0.2);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon {
  background: rgba(132, 220, 245, 0.3);
  transform: scale(1.1);
}

.stat-content {
  text-align: center;
  z-index: 2;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: "Orbitron", sans-serif;
  background: linear-gradient(
    135deg,
    var(--color-custom-arcade-primary),
    var(--color-custom-arcade-accent)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--color-custom-white);
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
}

.stat-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(82, 82, 212, 0.1),
    rgba(132, 220, 245, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.stat-card:hover .stat-glow {
  opacity: 1;
}
</style>
