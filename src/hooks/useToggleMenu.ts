import { useState } from "react";

export const useToggleMenu = () => {
  const [toggleRating, setToggleRating] = useState<boolean>(false);
  const [toggleGenre, setToggleGenre] = useState<boolean>(false);

  const handleToggleRating = () => {
    if (toggleGenre) {
      setToggleGenre(false);
    }
    setToggleRating((prev) => !prev);
  };

  const handleToggleGenre = () => {
    if (toggleRating) {
      setToggleRating(false);
    }
    setToggleGenre((prev) => !prev);
  };

  return { toggleRating, toggleGenre, handleToggleRating, handleToggleGenre };
};
