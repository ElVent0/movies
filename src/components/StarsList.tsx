import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FC } from "react";

interface StarsListProps {
  stars: string;
}

const StarsList: FC<StarsListProps> = ({ stars }) => {
  const fillStars = Math.floor(Number(stars));
  const halfStars = Math.round(Number(stars) % 1);
  const emptyStars = Math.floor(10 - Number(stars));

  return (
    <ul className="flex gap-0.5">
      {Array(fillStars)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <BsStarFill />
          </li>
        ))}
      {Array(halfStars)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <BsStarHalf />
          </li>
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <BsStar />
          </li>
        ))}
    </ul>
  );
};

export default StarsList;
