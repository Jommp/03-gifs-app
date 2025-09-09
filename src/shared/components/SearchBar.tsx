import { useState, type KeyboardEvent } from "react";

interface Props {
  placeholder: string;
  button?: string;
  onQuery: (query: string) => void;
};

export const SearchBar = ({ placeholder, button = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeyDown = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key.key !== 'Enter') return;

    handleSearch();
  };

  return (
    <section className="search-container">
      <input
        type="text"
        placeholder={ placeholder }
        onChange={(ev) => setQuery(ev.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        { button }
      </button>
    </section>
  );
};
