<template>
  <div class="flex flex-col min-h-screen bg-custom-arcade-dark">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
