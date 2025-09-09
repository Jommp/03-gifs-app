interface Props {
  searches: string[];
  handlePreviousSearchClick: (term: string) => void;
}

export const PreviousSearches = ({ searches, handlePreviousSearchClick }: Props) => {
  return (
    <section className="previous-searches">
      <h2>Busquedas previas</h2>

      <ul className="previous-searches-list">
        {
          searches.map(search => (
            <li
              key={search}
              onClick={() => handlePreviousSearchClick(search)}
            >
              {search}
            </li>
          ))
        }
      </ul>
    </section>
  );
};
