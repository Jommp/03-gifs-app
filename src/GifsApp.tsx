import { useState } from "react";

import { mockGifs } from "./mock-data/gifs.mock";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState(['Dofus retro'])

  const handlePreviousSearchClicked = (term: string) => {
    console.log({ term });
  };

  return (
    <>
      <CustomHeader
        title="Buscador de GIFS"
        description="Descubre y comparte el GIF perfecto"
      />

      <SearchBar placeholder="Buscar GIF" />

      <PreviousSearches
        searches={previousSearches}
        onPreviousSearchClicked={handlePreviousSearchClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
