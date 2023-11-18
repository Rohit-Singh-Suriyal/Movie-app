import { functioncontext } from "../Authcontext";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import Cardskeleton from "./Cardskeleton";
const Upcoming = () => {
  const { upcoming, comingloading } = functioncontext();
  console.log(upcoming);
  const rightslide = () => {
    const slide = document.querySelector("#sliderupcoming");
    slide.scrollLeft = slide.scrollLeft + 400;
  };
  const leftslide = () => {
    const slide = document.querySelector("#sliderupcoming");
    slide.scrollLeft = slide.scrollLeft - 400;
  };

  return (
    <>
      <div className="bg-gray-950 relative">
        <h1 className="text-center text-6xl sm:text-2xl sm:p-2 text-yellow-400 font-bold font-title  p-[25px] md:text-4xl md:py-3">
          UPCOMING
        </h1>
        <div className="flex overflow-hidden sm:h-[40vh] scroll-smooth " id="sliderupcoming">
          <FaCircleChevronLeft
            className="absolute z-20 text-[57px] sm:text-3xl sm:top-[50%]  text-white hover:text-gray-500 top-[57%] left-[3%] md:text-4xl"
            onClick={leftslide}
          />
          <FaCircleChevronRight
            className="absolute z-20 text-[57px] sm:text-3xl sm:top-[50%] text-white hover:text-gray-500 top-[57%] right-[3%] md:text-4xl"
            onClick={rightslide}
          />
          {comingloading && <Cardskeleton cards={10} />}
          {upcoming.map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/${item.id}`,
                state: { object: item, data: upcoming },
              }}
            >
              <div className="min-w-[270px]  h-[350px] m-[10px] sm:h-[200px] sm:min-w-[170px]  md:min-w-[240px] md:h-[250px]   ">
                <img className="object-fit"
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
export default Upcoming;
