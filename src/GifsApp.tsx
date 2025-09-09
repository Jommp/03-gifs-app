import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      <header className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </header>

      <section className="search-container">
        <input type="text" placeholder="Buscar Gifs" />
        <button>Buscar</button>
      </section>

      <section className="previous-searches">
        <h2>Busquedas previas</h2>

        <ul className="previous-searches-list">
          <li>Dofus retro</li>
          <li>Gears of war 3</li>
          <li>League of Legends</li>
        </ul>
      </section>

      <section className="gifs-container">
        {
          mockGifs.map((gif) => (
            <article className="gif-card">
              <img src={gif.url} alt={gif.title} />

              <h3>
                { gif.title }
              </h3>

              <p>
                { `${gif.width}X${gif.height} (1.5MB)` }
              </p>
            </article>
          ))
        }
      </section>
    </>
  );
};
