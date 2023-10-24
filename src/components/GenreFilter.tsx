import { FC, ChangeEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface GenreFilterProps {
  handleToggleGenre: () => void;
  toggleGenre: boolean;
  handleGenreList: (e: ChangeEvent<HTMLInputElement>) => void;
  isGenreCheckedAny: boolean;
  genresList: string[];
  genreToggles: string[];
}

const GenreFilter: FC<GenreFilterProps> = ({
  handleToggleGenre,
  toggleGenre,
  handleGenreList,
  isGenreCheckedAny,
  genresList,
  genreToggles,
}) => {
  return (
    <>
      <button
        onClick={handleToggleGenre}
        id="genre"
        className="border border-black h-full w-28 flex gap-6 items-center justify-center"
      >
        <p className="">Genre</p>
        <IoIosArrowDown />
      </button>
      {toggleGenre && (
        <ul className="border border-black mt-1 absolute w-28 p-2">
          <li>
            <input
              type="checkbox"
              id="any"
              onChange={(e) => {
                handleGenreList(e);
              }}
              checked={isGenreCheckedAny}
            />{" "}
            Any genre
          </li>
          {genresList.map((item, index) => {
            const isChecked = genreToggles.includes(item);
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(e) => {
                    handleGenreList(e);
                  }}
                  checked={isChecked}
                />{" "}
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default GenreFilter;
