import { functioncontext } from "../Authcontext";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Search = () => {
  const { all } = functioncontext();
  console.log(all);
  const [list, setlist] = useState(true);
  const inputref = useRef();
  const [name, setname] = useState([]);
  const [movie, setmovie] = useState({});
  const [load, setload] = useState(false);
  const History = useHistory();
  const submitmovie = (e) => {
    inputref.current.value = " ";
    setlist(!list);
    console.log(e.target.innerText);
    for (const i in all) {
      if (all[i].title === e.target.innerText) {
        console.log("setted");
        setmovie(all[i]);
        setload(true);
      }
    }
  };
  {
    load &&
      History.push({
        pathname: `/${movie.id}`,
        state: { movie: movie, all: all },
      });
  }

  //    useEffect(()=>{
  //     const names=[];
  //     for(const i in all){
  //      names.push(all[i].title);

  //     }
  //     setname(names)
  //    },[all])
  let t = false;

  const bar = (e) => {
    setlist(!list)
    setload(false);
    const arr = [];

    for (const i in all) {
      if (all[i].title.includes(e.target.value) && e.target.value.length > 0) {
        arr.push(all[i].title);
        setname(arr);
      }
     
    }
  

}
useEffect(()=>{
  if(inputref.current.value===""){
    setlist(!list);
  }
},[inputref])

  console.log(movie);
  console.log(movie.id);

  return (
    <>
      <div className="text-black font-bold bg-yellow-400 text-2xl font-alfa left-6 top-4 cursor-pointer  transition-transform hover:scale-105 duration-500 ease-in-out px-6 py-1 absolute  z-40 hover:bg-yellow-600   sm:px-3 sm:top-2 sm:text-[10px] sm:rounded-none rounded-2xl sm:py-1 ">
        <Link to="/">Movies</Link>
      </div>
      {name != null && list && (
        <div className="absolute z-50 bg-black opacity-80 font-bold overflow-x-hidden text-white top-[60px] text-[20px] overflow-auto w-[57%] scrollbar-thin scrollbar-thumb-gray-400 sm:w-[200px] sm:max-h-[150px]  sm:top-9 sm:left-7 max-h-[300px] ml-[15%] ">
          {name.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer sm:py-0 sm:text-[10px] sm:line-clamp-1 sm:my-3 p-4 rounded-xl hover:bg-slate-600   list-none m-7 bg-slate-500 opacity-80"
              onClick={submitmovie}
            >
              {item}
            </li>
          ))}
        </div>
      )}

      <div className="absolute  top-2 bg-opacity-70 w-[100%] rounded-3xl z-30">
        <input
          ref={inputref}
          onChange={bar}
          className="bg-opacity-50 font-oswald bg-gray-800 w-[50%] outline-none text-white text-2xl sm:py-1 sm:text-[14px]   p-[10px]  ml-[15%] sm:ml-[29%]"
          placeholder="Enter Movie name"
        ></input>
        <button className="text-white absolute font-mono hover:bg-blue-500  text-3xl p-[7px] sm:px-2 sm:py-0 sm:rounded-sm   top-[2px] sm:text-[13px] bg-blue-900 z-40 ">
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
