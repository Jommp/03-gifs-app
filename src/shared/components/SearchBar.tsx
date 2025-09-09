interface Props {
  placeholder: string;
  button?: string;
};

export const SearchBar = ({ placeholder, button = 'Buscar' }: Props) => {
  return (
    <section className="search-container">
      <input type="text" placeholder={ placeholder } />

      <button>{ button }</button>
    </section>
  );
};
