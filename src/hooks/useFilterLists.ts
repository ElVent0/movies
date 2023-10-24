import { useState, ChangeEvent } from "react";

export const useFilterLists = () => {
  const [ratingToggles, setRatingToggles] = useState(["any"]);
  const [genreToggles, setGenreToggles] = useState(["any"]);

  const handleRatingList = (e: ChangeEvent<HTMLInputElement>) => {
    let resultArrey;

    if (ratingToggles.includes(e.target.id)) {
      resultArrey = ratingToggles.filter((item) => item !== e.target.id);
    } else if (e.target.id === "any") {
      resultArrey = [e.target.id];
    } else {
      resultArrey = ratingToggles.filter((item) => item !== "any");
      resultArrey = [...resultArrey, e.target.id];
    }

    setRatingToggles(resultArrey);
  };

  const handleGenreList = (e: ChangeEvent<HTMLInputElement>) => {
    let resultArrey;

    if (genreToggles.includes(e.target.id)) {
      resultArrey = genreToggles.filter((item) => item !== e.target.id);
    } else if (e.target.id === "any") {
      resultArrey = [e.target.id];
    } else {
      resultArrey = genreToggles.filter((item) => item !== "any");
      resultArrey = [...resultArrey, e.target.id];
    }

    setGenreToggles(resultArrey);
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
