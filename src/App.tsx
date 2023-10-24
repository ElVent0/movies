import MoviesLibrary from "./components/MoviesLibrary";
import movies from "./data/movies.json";

const App = () => {
  return <MoviesLibrary movies={movies} />;
};

export default App;
