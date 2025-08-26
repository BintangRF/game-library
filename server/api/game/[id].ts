export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const data = await $fetch(`https://www.freetogame.com/api/game?id=${id}`);

  return data;
});
