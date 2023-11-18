import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
// import YouTube from "react-youtube";
import YouTube from 'react-youtube-embed'
import Cast from "./Cast";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Topdmovieetail = () => {
  const rightslide = () => {
    const slide = document.querySelector("#sliderupcoming");
    slide.scrollLeft = slide.scrollLeft + 400;
  };
  const leftslide = () => {
    const slide = document.querySelector("#sliderupcoming");
    slide.scrollLeft = slide.scrollLeft - 400;
  };
  const param = useParams();
  const location = useLocation();
  const [id, setid] = useState("");
  const [load, setload] = useState(false);
  const [cross, setcross] = useState(true);
  const [cast, setcast] = useState([]);
  const [enable, setenable] = useState(false);
  const { object, data } = location.state;
  const { movie, all } = location.state;
  console.log(location.state);
  console.log(all);
  console.log(movie);
  console.log(data);

  useEffect(() => {
    const trailerfetch = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${
          object?.id || movie?.id
        }?api_key=20a16400fe2972ffc1a5c5c84f714fc5&append_to_response=videos
      `);
        const data = await res.json();
        console.log(data);
        let p;
        const trailer = (data || movie).videos.results.find((item) =>
          item.name.includes("Trailer")
        );
        console.log(trailer);
        setid(trailer.key);
      } catch (error) {
        console.log("error");
      }
    };

    trailerfetch();
  }, [object, movie]);
  console.log(id);

  ///for the cast
  useEffect(() => {
    async function castfetch() {
      try {
        const res = await fetch(
          ` https://api.themoviedb.org/3/movie/${
            object?.id || movie?.id
          }?api_key=20a16400fe2972ffc1a5c5c84f714fc5&append_to_response=credits`
        );
        const data = await res.json();
        const cast = data.credits.cast;
        setcast(cast);
      } catch (error) {
        console.log(error);
      }
      setenable(true);
    }
    castfetch();
  }, [object, movie]);

  const enablesetter = () => {
    setenable(false);
  };

  const setyoutube = () => {
    setload(false);
  };
  const setloadscreen = () =>{
    setload(true);
   
  
   
  };

   
  
  const obj = {
   
    // height: "400",
    // width: "900",
    // height: "400",
    // // width: "900",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="relative overflow-hidden sm:p- ">
        {load && (
          <div className="bg-gray-950 opacity-[0.7]  w-[100%] h-[100%] absolute top-[0] left-[0] z-20"></div>
        )}
        <div className="bg-gray-900 h-[100vh] sm:w-[100%]   p-[5px]   relative ">
          <div className=" absolute bg-gray-950 rounded-3xl  w-[73vw] top-[85px] h-[86vh] ml-[408px] sm:top-[53%] sm:ml-0 sm:h-[400px] sm:w-[96%] sm:mx-1">
            <AiOutlinePlayCircle
              className="text-[90px] hover:text-yellow-400 ml-[4%] mt-[3%] text-[white] transition-transform sm:text-4xl duration-700 ease-in-out hover:scale-125 "
              onClick={setloadscreen}
            />
            <div className="absolute top-[4%] font- ml-[15%]">
              <p className="font-extrabold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-purple-400 sm:text-sm sm:ml-4 to-pink-600 line-clamp-1">
                {object?.title || movie?.title}
              </p>
              <p className="text-gray-400 text-[25px] ml-[10px] mt-[-5px]">
                Official Trailer
              </p>
              <p className="text-yellow-400 text-[15px] ml-[10px] sm:-ml-0 font-semibold font-oswald mt-[10px]">
                <span className="mr-[8px]  sm:text-[10px]">
                  Popularity {object?.popularity || movie?.popularity}
                </span>

                <span className="mr-[8px] sm:text-[10px]">
                  Rating {object?.rating || movie?.rating}
                </span>
                <span className="mr-[8px] sm:text-[10px]">
                  Release-date {object?.release_data || movie?.release_data}
                </span>
              </p>

              <div className="text-white  mt-10 sm:mt-2 w-[700px] sm:w-fit sm:text-sm text-xl ">
                <p className=" line-clamp-3 sm:mr-2 sm:w-fit font-bold text-red-600 font-borlow ">
                  Overview
                </p>
                <p className="line-clamp-3">
                  {object?.overview || movie?.overview}
                </p>
                <div>
                  <Cast cast={cast} />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[400px] h-[667px] sm:w-[100%] sm:h-[250px] object-cover rounded-3xl mt-20"
            src={`http://image.tmdb.org/t/p/original/${
              object?.poster || movie?.poster
            }`}
          ></img>
          {load && (
            <div className="absolute   z-30 ml-[400px] sm:mx-2 sm:h-[30%]  sm:w-[90%] top-[70px] w-[67%] h-[65%] " id="back">
             <div className="flex w-fit bg-black">
              <span className="text-white absolute sm:left-[2%] left-[6%] z-[34] top-12 bg-black text-[16px] px-2 sm:text-[13px] sm:top-[37%] ">Close</span>
              <RxCross1
                onClick={setyoutube}
                className="text-[23px]  absolute z-[34]  top-1 left-[119px] font-bold bg-black text-white lg: sm:top-8 sm:left-14 sm:text-[19px]  mt-11 "
              />
             </div>
             
               <div className=" ">
               <YouTube
                className=" ml-[50px] sm:ml-1 sm:top-7  mt-11"
                id={`${id}`}
                autoplay={true}
                opts={obj}
              ></YouTube>
                </div>
             
            </div>
          )}
        </div>
        {enable && (
          <div className="bg-gray-950 relative overflow-hidden p-4 ">
            <h1 className="text-center text-6xl text-yellow-400 font-bold font-title  p-[25px] sm:text-3xl sm:py-3">
              SIMILAR
            </h1>
            <div
              className="flex overflow-hidden scroll-smooth       "
              id="sliderupcoming"
            >
              <FaCircleChevronLeft
                className="absolute z-10 text-[57px]  text-white hover:text-gray-500 top-[57%] left-[3%] sm:text-4xl sm:ml-1"
                onClick={leftslide}
              />
              <FaCircleChevronRight
                className="absolute z-10 text-[57px] text-white hover:text-gray-500 top-[57%] right-[3%] text-4xl sm:text-4xl sm:ml-1"
                onClick={rightslide}
              />

              {data &&
                data.map((item, i) => (
                  <Link
                    key={i}
                    onClick={enablesetter}
                    to={{
                      pathname: `/${item.id}`,
                      state: { object: item, data: data },
                    }}
                  >
                    <div className="min-w-[270px] h-[350px] m-[10px] sm:h-[200px] sm:min-w-[170px]">
                      <img
                        className="object- transition-transform ease-in-out duration-500 hover:scale-110 hover:brightness-50"
                        src={`http://image.tmdb.org/t/p/original/${item.poster}`}
                      ></img>
                    </div>
                  </Link>
                ))}
              {all &&
                all.map((item, i) => (
                  <Link
                    key={i}
                    onClick={enablesetter}
                    to={{
                      pathname: `/${item.id}`,
                      state: { object: item, data: all },
                    }}
                  >
                    <div className="min-w-[270px] h-[350px] m-[10px] sm:h-[200px] sm:min-w-[170px]">
                      <img
                        className="object- transition-transform ease-in-out duration-500 hover:scale-110 hover:brightness-50"
                        src={`http://image.tmdb.org/t/p/original/${item.poster}`}
                      ></img>
                    </div>
                  </Link>
                ))}
                
            </div>
            
          </div>
          
        )}
      
      </div>
      {enable && <Footer/> }
      
      
    </>
  );
};
export default Topdmovieetail;
