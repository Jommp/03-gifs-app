import { useState } from 'react';

import type { Gif } from './gifs/interfaces/gif.interface';

import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';

import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';

export const GifsApp = () => {
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

  return (
    <>
      <CustomHeader
        title='Buscador de GIFS'
        description='Descubre y comparte el GIF perfecto'
      />

      <SearchBar
        placeholder='Buscar GIF'
        onSearch={handleSearch}
      />

      <PreviousSearches
        searches={previousSearches}
        onPreviousSearchClicked={handlePreviousSearchClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
