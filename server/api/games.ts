export default defineEventHandler(async () => {
  const data = await $fetch(`https://www.freetogame.com/api/games`);

  return data;
});
