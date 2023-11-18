import { functioncontext } from "../Authcontext";
import { BsChevronRight, BsFillCaretRightFill } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Cardskeleton from "./Cardskeleton";
import Skeleton from "react-loading-skeleton";
const Popular = () => {
  const { data, isloading } = functioncontext();
  const [open, setopen] = useState(true);
  const divref=useRef(null)
  const rightslider = () => {
    const slider = document.querySelector("#slide");
   
    slider.scrollLeft=slider.scrollLeft+window.innerWidth
   
    
    
   
    
   
  };
  const leftslider = () => {
    const slider = document.querySelector("#slide");
    const length=(slider.firstChild.clientHeight) ;
    slider.scrollLeft=slider.scrollLeft-length;
  };
  const fulltext = () => {
    setopen(!open);
  };

  return (
    <>
      <AiFillCaretLeft
        onClick={leftslider}
        className="text-[65px]  absolute font-bold text-black-600 rounded-2xl 
    bg-gray-300 opacity-[0.7] sm:text-3xl md:text-5xl sm:top-[30%] sm:z-40 top-[40%] left-[1%] z-40 hover:bg-slate-400"
      />
      <BsFillCaretRightFill
        onClick={rightslider}
        className="text-[65px] absolute  font-bold text-black-600 rounded-2xl 
    bg-gray-300 opacity-[0.7]  top-[40%] md:text-5xl sm:text-3xl sm:top-[30%] sm:z-40 sm:right-0    hover:bg-slate-400 right-[1%] z-40"
      />

      <div 
        className=" w-[100%] h-[95vh] sm:h-[50vh] sm:w-[100vw] md:h-[73vh] sm:overflow-hidden scroll-smooth  flex   overflow-hidden "
        id="slide" 
      >
        {data.map((item, i) => (
          <>
            <div
              key={item.id}
              className="min-w-[100vw] sm:min-w-[100vw] sm:h-96 object-center relative bg-black w-[100vw]  "
            >
              <div className="  w-[600px] sm:w-[100vw] top-[25%] sm:right-0  absolute right-36 z-20  md:w-[100vw] md:right-0  md:text-center">
                <h1 className="text-[60px] text-white mb-6  sm:text-xs  font-oswald font-bold sm:ml-8 md:text-xl  ">
                  {item.title}
                </h1>
                <span className="font-bold sm:text-[9px]  text-yellow-500  text-xl mr-[10px] sm:ml-3 md:text-sm">
                  Released Date: {item.release_data}
                </span>
                <span className="text-xl sm:text-[9px] md:text-sm  text-yellow-500 font-bold">
                  Popularity {item.popularity}
                </span>
                <p
                  className={`mt-[10px] sm:text-[8px] sm:w-52 sm:text-center  sm:mx-5 text-white leading-5 sm:leading-none md:px-5 mx-auto  text-xl font-semibold ${
                    open ? "line-clamp-3 " : ""
                  }`}
                >
                  {item.overview}
                </p>
                <button
                  className="bg-black rounded-xl hover:bg-gray-700 mt-[15px] text-white p-2 font-mono sm:text-[10px] sm:py-1 sm:ml-6 font-bold md:text-sm "
                  onClick={fulltext}
                >
                  ${open ? "Read More" : "Read Less"}
                </button>
                <Link
                  to={{
                    pathname: `/${item.id}`,
                    state: { object: item, data: data },
                  }}
                >
                  <div className="bg-black bg-opacity-50 hover:bg-opacity-90 cursor-pointer text-white w-[200px] font-bold rounded-2xl font-borlow   text-center p-[15px]  text-[18px] mt-[15px] md:mx-auto md:text-sm sm:text-[10px] sm:px-2 py-1 sm:ml-5 sm:w-fit ">
                    Watch Trailer
                  </div>
                </Link>
              </div>
              
              <img 
                className="  object-cover brightness-50 "
                src={`http://image.tmdb.org/t/p/original/${item.poster}`}
              ></img>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Popular;
