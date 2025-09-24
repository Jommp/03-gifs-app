import { useState } from "react";

import type { Gif } from "../interfaces/gif.interface";

import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handlePreviousSearchClicked = (term: string) => {
    console.log({ term });
  };

  const handleGetGifsByQuery = async (query: string = '') => {
    const results = await getGifsByQuery(query);

    setGifs(results);
  };

  const handleSearch = (query: string) => {
    const querySanitized = query.trim().toLowerCase();

    if (!querySanitized.length) return;

    if (previousSearches.includes(querySanitized)) return;

    const newPreviousSearches = [querySanitized, ...previousSearches].splice(0, 6);
    setPreviousSearches(newPreviousSearches);

    handleGetGifsByQuery(query);
  };

  return {
    gifs,
    previousSearches,

    handlePreviousSearchClicked,
    handleSearch
  };
};
