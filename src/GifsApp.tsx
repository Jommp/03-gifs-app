import { mockGifs } from "./mock-data/gifs.mock";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

const previousSearches = [
  'Dofus retro',
  'Gears of war 3',
  'League of Legends'
];

export const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de GIFS"
        description="Descubre y comparte el GIF perfecto"
      />

      <SearchBar placeholder="Buscar GIF" />

      <PreviousSearches searches={previousSearches} />

      <GifList gifs={mockGifs} />
    </>
  );
};
