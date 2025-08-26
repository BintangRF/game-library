// server/api/games.get.ts
import axios from "axios";
import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const {
    page = "1",
    pageSize = "20",
    search = "",
    category = "",
  } = getQuery(event);

  try {
    const res = await axios.get("https://www.freetogame.com/api/games");
    let allGames = res.data;

    if (search && typeof search === "string") {
      const lowerSearch = search.toLowerCase();

      allGames = allGames.filter((game: any) =>
        game.title.toLowerCase().includes(lowerSearch)
      );
    }

    if (category !== "All" && typeof category === "string") {
      allGames = allGames.filter((game: any) => game.genre === category);
    }

    const pageNum = parseInt(page as string, 10);
    const size = parseInt(pageSize as string, 10);

    const start = (pageNum - 1) * size;
    const end = start + size;

    const paginatedItems = allGames.slice(start, end);

    return {
      items: paginatedItems,
      total: allGames.length,
      page: pageNum,
      pageSize: size,
    };
  } catch (error) {
    return { error: "Failed to fetch games" };
  }
});
