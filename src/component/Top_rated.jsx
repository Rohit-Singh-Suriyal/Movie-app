import { functioncontext } from "../Authcontext";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Cardskeleton from "./Cardskeleton";
const Top_rated = () => {
  const { toprated, toploading, loading } = functioncontext();
  const rightslide = () => {
    const slide = document.querySelector("#slider");
    slide.scrollLeft = slide.scrollLeft + 400;
  };
  const leftslide = () => {
    const slide = document.querySelector("#slider");
    slide.scrollLeft = slide.scrollLeft - 400;
  };

  return (
    <div className="bg-gray-950 relative">
      <h1 className="text-center text-6xl sm:text-2xl text-yellow-400 font-bold font-title  p-[25px] sm:p-2 md:text-4xl md:py-4">
        TOP RATED
      </h1>
      {toploading && <Cardskeleton cards={10} />}
      <div className="flex overflow-hidden scroll-smooth" id="slider">
        <FaCircleChevronLeft
          className="absolute z-20 text-[57px] sm:text-3xl  text-white hover:text-gray-500 top-[57%] left-[3%] md:text-4xl "
          onClick={leftslide}
        />
        <FaCircleChevronRight
          className="absolute z-20 text-[57px] sm:text-3xl text-white hover:text-gray-500 top-[57%] right-[3%]  md:text-4xl  "
          onClick={rightslide}
        />

        {toprated.map((item) => (
          <Link
            to={{
              pathname: `/${item.id}`,
              state: { object: item, data: toprated },
            }}
          >
            <div className="min-w-[270px] h-[350px] md:min-w-[240px] md:h-[250px] m-[10px] sm:h-[200px] sm:min-w-[170px] ">
              <img
                className="object- transition-transform ease-in-out duration-500 hover:scale-110 hover:brightness-50"
                src={`http://image.tmdb.org/t/p/original/${item.poster}`}
              ></img>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Top_rated;
