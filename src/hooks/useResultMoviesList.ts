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
    if (inputData === "") {
      setResultMoviesList([]);
      return;
    }

    let resultMovies;

    resultMovies = movies.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(inputData.toLocaleLowerCase());
    });

    if (ratingToggles.length > 0) {
      if (!ratingToggles.includes("any")) {
        resultMovies = resultMovies.filter((item) => {
          return ratingToggles.includes(item.rating.split(".")[0]);
        });
      }
    }

    if (genreToggles.length > 0) {
      if (!genreToggles.includes("any")) {
        resultMovies = resultMovies.filter((item) => {
          return genreToggles.includes(item.category);
        });
      }
    }

    setResultMoviesList(resultMovies);
  }, [genreToggles, inputData, movies, ratingToggles]);

  return { resultMoviesList, genresList };
};
