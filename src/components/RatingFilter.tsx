import { FC, ChangeEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import StarsList from "./StarsList";

interface RatingFilterProps {
  handleToggleRating: () => void;
  toggleRating: boolean;
  handleRatingList: (e: ChangeEvent<HTMLInputElement>) => void;
  isRatingCheckedAny: boolean;
  ratingToggles: string[];
}

const RatingFilter: FC<RatingFilterProps> = ({
  handleToggleRating,
  toggleRating,
  handleRatingList,
  isRatingCheckedAny,
  ratingToggles,
}) => {
  return (
    <>
      <button
        id="rating"
        onClick={handleToggleRating}
        className="border border-black h-full w-28 flex gap-6 items-center justify-center"
      >
        <p className="">Rating</p>
        <IoIosArrowDown />
      </button>
      {toggleRating && (
        <ul className="border border-black mt-1 absolute w-56 p-2">
          <li>
            <input
              type="checkbox"
              id="any"
              onChange={(e) => handleRatingList(e)}
              checked={isRatingCheckedAny}
            />{" "}
            Any rating
          </li>
          {[...Array(10).keys()].map((item) => {
            const isChecked = ratingToggles.includes(`${item + 1}`);
            return (
              <li key={item} className="flex gap-1">
                <input
                  type="checkbox"
                  id={`${item + 1}`}
                  onChange={(e) => handleRatingList(e)}
                  checked={isChecked}
                />
                <StarsList stars={String(item + 1)} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default RatingFilter;
