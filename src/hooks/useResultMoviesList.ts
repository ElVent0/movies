import { useEffect, useState } from "react";
// import { BsExclamationSquareFill } from "react-icons/bs";
import { MovieType } from "../movieType";

export const useResultMoviesList = (
  movies: MovieType[],
  inputData: string,
  ratingToggles: string[],
  genreToggles: string[]
) => {
  const [resultMoviesList, setResultMoviesList] = useState<MovieType[]>([]);
  const [genresList] = useState<string[]>([
    ...new Set(movies.map((item) => item.category)),
  ]);
  console.log(movies);
  useEffect(() => {
    const resultMovies = movies.filter((movie) => {
      const filteredByTitle = movie.title
        .toLowerCase()
        .includes(inputData.toLocaleLowerCase());

      const filteredByRating =
        ratingToggles.length && ratingToggles.includes("any")
          ? true
          : ratingToggles.includes(String(Math.floor(Number(movie.rating))));

      const filteredByGenre =
        genreToggles.length && genreToggles.includes("any")
          ? true
          : genreToggles.includes(movie.category);

      return filteredByTitle && filteredByRating && filteredByGenre && movie;
    });

    setResultMoviesList(resultMovies);
  }, [genreToggles, inputData, movies, ratingToggles]);

  return { resultMoviesList, genresList };
};
