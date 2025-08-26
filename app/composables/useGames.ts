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
// Reusable fetch dengan cache otomatis by key
const fetchGames = async () => {
  return await $fetch<GameProps[]>(`/api/games`);
};

export function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    staleTime: 1000 * 60 * 50,
  });
}
