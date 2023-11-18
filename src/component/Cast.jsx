import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";
const Cast = ({ cast }) => {
  console.log(cast);
  const right = () => {
    const cast = document.querySelector("#castslide");
    cast.scrollLeft = cast.scrollLeft + 200;
  };
  const left = () => {
    const cast = document.querySelector("#castslide");
    cast.scrollLeft = cast.scrollLeft - 200;
  };
  return (
    <>
      <p className="font-borlow text-[25px] font-semibold mt-5 sm:text-sm sm:mt-1 ">
        TOP CAST
      </p>
      <div className="relative  w-[60vw] ">
        <div className="absolute top-[30%] sm:w-[84vw] flex justify-between z-10 w-[60vw] bg-transparent  ">
          <FaCircleChevronLeft
            className="text-white  sm:text-2xl text-[35px] ml-4 sm:ml-0  "
            onClick={left}
          />
          <FaCircleChevronRight
            className="text-white  sm:text-2xl  text-[35px] mr-7 "
            onClick={right}
          />
        </div>

        <div
          className="flex overflow-hidden scroll-smooth bg-black sm:p-0  p-[7px] rounded-3xl sm:w-[90vw]  mt-3 sm:-ml-8"
          id="castslide"
        >
          {cast.map((item) => (
            <li className="list-none mr-3 ml-3 sm:mr-0 sm:ml-3 flex flex-col brightness-50 hover:brightness-100 justify-center sm:w-[100px] items-center hover:cursor-pointer  ">
              <img
                className="object-cover rounded-full min-w-[150px] h-[140px] hover:brightness-100 sm:min-w-[80px] sm:h-[80px]"
                src={`http://image.tmdb.org/t/p/original/${item.profile_path}`}
              ></img>
              <p className=" line-clamp-1">{item.name}</p>
              <p className="text-gray-500 line-clamp-1 sm:ml-4 sm:text-[10px] text-center w-[220px]">
                {item.character}
              </p>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cast;
