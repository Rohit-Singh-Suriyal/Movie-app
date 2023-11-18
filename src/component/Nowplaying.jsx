import { functioncontext } from "../Authcontext";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Cardskeleton from "./Cardskeleton";
const Nowplaying = () => {
  const { now_playing, nowloading } = functioncontext();
  console.log(now_playing);

  const rightslide = () => {
    const slide = document.querySelector("#slidernow");
    slide.scrollLeft = slide.scrollLeft + 400;
  };
  const leftslide = () => {
    const slide = document.querySelector("#slidernow");
    slide.scrollLeft = slide.scrollLeft - 400;
  };

  return (
    <>
      <div className="bg-gray-950 relative pb-4">
        <h1 className="text-center text-6xl sm:text-2xl sm:p-2 text-yellow-400 font-bold font-title  p-[25px] md:text-4xl md:py-1 -mt-7">
          POPULAR
        </h1>
        <div className="flex overflow-hidden scroll-smooth  " id="slidernow">
          <FaCircleChevronLeft
            className="absolute z-20 text-[57px] sm:text-3xl  text-white hover:text-gray-500 top-[57%] left-[3%] md:text-4xl "
            onClick={leftslide}
          />
          <FaCircleChevronRight
            className="absolute z-20 text-[57px] sm:text-3xl text-white hover:text-gray-500 top-[57%] right-[3%] md:text-4xl "
            onClick={rightslide}
          />
          {nowloading && <Cardskeleton cards={10} />}
          {!nowloading &&
            now_playing.map((item) => (
              <Link
                to={{
                  pathname: `/${item.id}`,
                  state: { object: item, data: now_playing },
                }}
              >
                <div className="min-w-[270px] h-[350px] m-[10px]  sm:h-[200px] sm:min-w-[170px]  md:min-w-[240px] md:h-[250px] ">
                  <img
                    className="object- transition-transform ease-in-out duration-500 hover:scale-110 hover:brightness-50"
                    src={`http://image.tmdb.org/t/p/original/${item.poster}`}
                  ></img>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
export default Nowplaying;
