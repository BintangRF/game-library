<template>
  <!-- ✅ About Section -->
  <section id="about" class="container py-20 font-inter text-custom-white">
    <SectionTitle
      title="Tentang ArcadeHub"
      subtitle="ArcadeHub adalah perpustakaan game gratis berbasis web yang menghadirkan ratusan game dari berbagai genre. Jelajahi, temukan, dan mainkan game favoritmu kapan saja!"
    />

    <!-- ✅ Creative Grid Layout -->
    <div class="grid md:grid-cols-12 gap-8">
      <!-- Card 1 -->
      <div
        class="md:col-span-4 bg-custom-arcade-dark p-8 rounded-2xl border-2 border-custom-arcade-primary shadow-lg hover:shadow-custom-arcade-primary/50 hover:-translate-y-2 transform transition-all duration-300"
      >
        <Icon
          name="lucide:zap"
          class="w-14 h-14 mx-auto text-custom-arcade-primary animate-pulse"
        />
        <h3 class="mt-6 font-orbitron text-xl font-bold text-center">
          Cepat & Gratis
        </h3>
        <p class="text-sm text-gray-400 mt-3 text-center">
          Semua game bisa dimainkan
          <span class="text-custom-arcade-primary">tanpa biaya</span>
          dan tanpa ribet.
        </p>
      </div>

      <!-- Card 2 (Bigger Middle Card) -->
      <div
        class="md:col-span-4 bg-gradient-to-br from-custom-arcade-primary/20 to-custom-arcade-secondary/20 p-10 rounded-2xl border-2 border-custom-arcade-secondary shadow-xl hover:shadow-custom-arcade-secondary/50 hover:-translate-y-2 transform transition-all duration-300"
      >
        <Icon
          name="lucide:layout-grid"
          class="w-16 h-16 mx-auto text-custom-arcade-secondary animate-bounce"
        />
        <h3 class="mt-6 font-orbitron text-2xl font-extrabold text-center">
          Genre Lengkap
        </h3>
        <p class="text-sm text-gray-300 mt-3 text-center">
          Temukan game
          <span class="text-custom-arcade-secondary">Action, RPG, Horror</span>,
          dan banyak lagi.
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="md:col-span-4 bg-custom-arcade-dark p-8 rounded-2xl border-2 border-custom-arcade-accent shadow-lg hover:shadow-custom-arcade-accent/50 hover:-translate-y-2 transform transition-all duration-300"
      >
        <Icon
          name="lucide:users"
          class="w-14 h-14 mx-auto text-custom-arcade-accent animate-spin-slow"
        />
        <h3 class="mt-6 font-orbitron text-xl font-bold text-center">
          Untuk Semua Gamer
        </h3>
        <p class="text-sm text-gray-400 mt-3 text-center">
          Cocok untuk gamer
          <span class="text-custom-arcade-accent"> kasual maupun hardcore</span
          >.
        </p>
      </div>
    </div>
  </section>
</template>
