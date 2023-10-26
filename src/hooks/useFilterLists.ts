import { useState, ChangeEvent } from "react";

export const useFilterLists = () => {
  const [ratingToggles, setRatingToggles] = useState(["any"]);
  const [genreToggles, setGenreToggles] = useState(["any"]);

  const handleRatingList = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    let resultArrey;

    if (ratingToggles.includes(id)) {
      resultArrey = ratingToggles.filter((item) => item !== id);
    } else {
      resultArrey = ratingToggles.filter((item) => item !== "any");
      resultArrey = id !== "any" ? [...resultArrey, id] : [id];
    }

    if (!resultArrey.length) {
      setRatingToggles(["any"]);
    } else {
      setRatingToggles(resultArrey);
    }
  };

  const handleGenreList = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    let resultArrey;

    if (genreToggles.includes(id)) {
      resultArrey = genreToggles.filter((item) => item !== id);
    } else {
      resultArrey = genreToggles.filter((item) => item !== "any");
      resultArrey = id !== "any" ? [...resultArrey, id] : [id];
    }

    if (!resultArrey.length) {
      setGenreToggles(["any"]);
    } else {
      setGenreToggles(resultArrey);
    }
  };

  const isRatingCheckedAny = ratingToggles.includes(`any`);
  const isGenreCheckedAny = genreToggles.includes(`any`);

  return {
    ratingToggles,
    genreToggles,
    handleRatingList,
    handleGenreList,
    isRatingCheckedAny,
    isGenreCheckedAny,
  };
};
