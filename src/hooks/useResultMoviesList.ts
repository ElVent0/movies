import { useEffect, useState } from "react";
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
  useEffect(() => {
    const resultMovies = movies
      .filter((item) => {
        return item.title
          .toLocaleLowerCase()
          .includes(inputData.toLocaleLowerCase());
      })
      .filter((item) =>
        ratingToggles.length && !ratingToggles.includes("any")
          ? ratingToggles.includes(item.rating.split(".")[0])
          : item
      )
      .filter((item) =>
        genreToggles.length && !genreToggles.includes("any")
          ? genreToggles.includes(item.category)
          : item
      );

    setResultMoviesList(resultMovies);
  }, [genreToggles, inputData, movies, ratingToggles]);

  return { resultMoviesList, genresList };
};
