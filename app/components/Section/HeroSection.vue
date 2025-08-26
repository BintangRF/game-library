<template>
  <section
    id="home"
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-custom-arcade-dark via-black to-custom-arcade-secondary/30 text-center"
  >
    <!-- Background animasi grid + particle -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute animate-pulse inset-0 opacity-20 [background-image:linear-gradient(to_right,#22d3ee20_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee20_1px,transparent_1px)] [background-size:40px_40px]"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"
      ></div>
    </div>
    <div
      class="h-52 w-screen absolute bottom-0 bg-gradient-to-t from-custom-arcade-dark via-transparent to-transparent"
    ></div>

    <!-- Title -->
    <div class="relative z-10 max-w-3xl px-4">
      <h1
        class="text-5xl md:text-7xl font-bold mb-6 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-custom-arcade-primary via-custom-arcade-accent to-custom-arcade-secondary animate-gradient-x"
      >
        ARCADE HUB
      </h1>

      <!-- Typing / rotating tagline -->
      <p class="text-xl md:text-2xl text-custom-white/80 h-8 mb-10">
        <span
          class="animate-typing overflow-hidden border-r-2 border-custom-arcade-accent pr-2"
        >
          Temukan dunia game tanpa batas...
        </span>
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button
          class="px-8 py-4 bg-gradient-to-r from-custom-arcade-primary to-custom-arcade-accent text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition-all"
        >
          Mulai Jelajah
        </button>
        <button
          class="px-8 py-4 border border-custom-arcade-primary text-custom-arcade-primary font-semibold rounded-xl hover:bg-custom-arcade-primary/10 transition-all"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div class="animate-bounce text-custom-arcade-accent text-2xl">▼</div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi gradient bergerak */
@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}

/* Animasi typing */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.animate-typing {
  display: inline-block;
  white-space: nowrap;
  width: 0;
  animation: typing 10s steps(40, end) infinite;
}
</style>
