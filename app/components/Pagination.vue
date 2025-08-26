<script setup lang="ts">
import { defineProps, computed } from "vue";

type PaginationProps = {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (p: number) => void;
};

const props = defineProps<PaginationProps>();

const totalPages = computed<number>(() =>
  Math.ceil(props.total / props.pageSize)
);

const pages = computed<(number | string)[]>(() => {
  const arr: (number | string)[] = [];
  const total = totalPages.value;
  const current = props.page;

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  arr.push(1);

  if (current > 5) {
    arr.push("...");
  } else {
    for (let i = 2; i < current; i++) {
      arr.push(i);
    }
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    if (!arr.includes(i)) arr.push(i);
  }

  if (current < total - 3) {
    arr.push("...");
  } else {
    for (let i = current + 2; i < total; i++) {
      arr.push(i);
    }
  }

  arr.push(total);

  return arr;
});
</script>

<template>
  <div
    v-if="totalPages > 1"
    class="flex justify-center items-center gap-2 mt-8 font-sans"
  >
    <!-- Prev -->
    <button
      @click="props.onPageChange(props.page - 1)"
      :disabled="props.page === 1"
      class="px-4 py-2 rounded-lg border border-custom-arcade-primary/30 text-custom-arcade-primary hover:border-custom-arcade-primary hover:text-custom-arcade-primary transition disabled:opacity-40 disabled:hover:border-custom-arcade-primary/30 disabled:cursor-not-allowed"
    >
      Prev
    </button>

    <!-- Pages -->
    <template v-for="(p, i) in pages" :key="i">
      <span
        v-if="p === '...'"
        class="px-3 py-2 text-custom-arcade-primary select-none"
        >...</span
      >
      <button
        v-else
        @click="props.onPageChange(p as number)"
        :class="[
          'px-4 py-2 rounded-lg border transition',
          props.page === p
            ? 'bg-custom-arcade-primary text-custom-arcade-dark font-semibold shadow-md'
            : 'border-custom-arcade-primary/30 text-custom-arcade-primary hover:border-custom-arcade-primary hover:text-custom-arcade-primary',
        ]"
      >
        {{ p }}
      </button>
    </template>

    <!-- Next -->
    <button
      @click="props.onPageChange(props.page + 1)"
      :disabled="props.page === totalPages"
      class="px-4 py-2 rounded-lg border border-custom-arcade-primary/30 text-custom-arcade-primary hover:border-custom-arcade-primary hover:text-custom-arcade-primary transition disabled:opacity-40 disabled:hover:border-custom-arcade-primary/30 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>
