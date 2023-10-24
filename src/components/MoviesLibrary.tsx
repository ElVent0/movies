import { FC, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { MovieType } from "../movieType";

interface MoviesLibraryProps {
  movies: MovieType[];
}

const MoviesLibrary: FC<MoviesLibraryProps> = ({ movies }) => {
  const [resultMoviesList, setResultMoviesList] = useState<MovieType[]>([]);

  useEffect(() => {
    setResultMoviesList(movies);
  }, [movies]);

  //   console.log(resultMoviesList);

  const GetStars = ({ stars }) => {
    const fillStars = Math.floor(stars);
    const halfStars = Math.round(stars % 1);
    const emptyStars = Math.floor(10 - stars);
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

  return (
    <div className="flex justify-center pt-10">
      <ul className="flex gap-2 h-12">
        <li className="h-full relative">
          <input
            className="border border-black h-full w-80 block px-2"
            type="text"
            placeholder="Enter movie name"
          />
          <ul className="absolute mt-1 border border-black">
            {resultMoviesList.map((item, index) => (
              <li key={index} className=" w-80 flex p-2 items-center">
                <div className="">
                  <p className="font-bold">{item.title}</p>
                  <GetStars stars={item.rating} />
                </div>
                <p className="ml-auto text-gray-800">{item.category}</p>
              </li>
            ))}
          </ul>
        </li>
        <li className="h-full relative">
          <button className="border border-black h-full w-28 flex gap-6 items-center justify-center">
            <p className="">Rating</p>
            <IoIosArrowDown />
          </button>
          <ul className="border border-black mt-1 absolute w-56 p-2">a</ul>
        </li>
        <li className="h-full relative">
          <button className="border border-black h-full w-28 flex gap-6 items-center justify-center">
            <p className="">Genre</p>
            <IoIosArrowDown />
          </button>
          {/* <ul className="border border-black mt-1 absolute w-28 p-2">
            <li>
              <input type="checkbox" id="Ane genre" /> Ane genre
            </li>
            <li>
              <input type="checkbox" id="Action" /> Action
            </li>
            <li>
              <input type="checkbox" id="Comedy" /> Comedy
            </li>
            <li>
              <input type="checkbox" id="Drama" /> Drama
            </li>
            <li>
              <input type="checkbox" id="Thriller" /> Thriller
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
  );
};

export default MoviesLibrary;
