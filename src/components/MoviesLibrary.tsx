import { FC, useState } from "react";
import { MovieType } from "../movieType";
import StarsList from "../components/StarsList";
import { useResultMoviesList } from "../hooks/useResultMoviesList";
import { useToggleMenu } from "../hooks/useToggleMenu";
import { useFilterLists } from "../hooks/useFilterLists";
import RatingFilter from "./RatingFilter";
import GenreFilter from "./GenreFilter";

interface MoviesLibraryProps {
  movies: MovieType[];
}

const MoviesLibrary: FC<MoviesLibraryProps> = ({ movies }) => {
  const [inputData, setInputData] = useState("");

  const {
    ratingToggles,
    genreToggles,
    handleRatingList,
    handleGenreList,
    isRatingCheckedAny,
    isGenreCheckedAny,
  } = useFilterLists();

  const { resultMoviesList, genresList } = useResultMoviesList(
    movies,
    inputData,
    ratingToggles,
    genreToggles
  );

  const { toggleRating, toggleGenre, handleToggleRating, handleToggleGenre } =
    useToggleMenu();

  return (
    <div className="flex justify-center pt-10">
      <ul className="flex gap-2 h-12">
        <li className="h-full relative">
          <input
            className="border border-black h-full w-80 block px-2"
            type="text"
            placeholder="Enter movie name"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          {resultMoviesList && resultMoviesList.length ? (
            <ul className="absolute mt-1 border border-black">
              {resultMoviesList.map((item, index) => (
                <li key={index} className=" w-80 flex p-2 items-center">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <StarsList stars={item.rating} />
                  </div>
                  <p className="ml-auto text-gray-800">{item.category}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
        <li className="h-full relative">
          <RatingFilter
            handleToggleRating={handleToggleRating}
            toggleRating={toggleRating}
            handleRatingList={handleRatingList}
            isRatingCheckedAny={isRatingCheckedAny}
            ratingToggles={ratingToggles}
          />
        </li>
        <li className="h-full relative">
          <GenreFilter
            handleToggleGenre={handleToggleGenre}
            toggleGenre={toggleGenre}
            handleGenreList={handleGenreList}
            isGenreCheckedAny={isGenreCheckedAny}
            genresList={genresList}
            genreToggles={genreToggles}
          />
        </li>
      </ul>
    </div>
  );
};

export default MoviesLibrary;
