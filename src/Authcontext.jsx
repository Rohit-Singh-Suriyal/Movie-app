import { createContext, useEffect, useState } from "react"
import { useContext,useCallback } from "react";
const Authcontext=createContext();
export function Allcontext({children}){
    const[data,setdata]=useState([]);
    const[isloading,setisloading]=useState(true);
    const[toploading,settoploading]=useState(true);
    const[toprated,settoprated]=useState([]);
    const[upcoming,setupcoming]=useState([]);
    const[comingloading,setcomingloading]=useState(true)
    const[now_playing,setnow_playing]=useState([]);
    const[nowloading,setnowloading]=useState(true);
    const[all,setall]=useState([]);
  
   useEffect(()=>{

    async function fetchmovie(){
     
      try{
       const res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=20a16400fe2972ffc1a5c5c84f714fc5");
      const data=await res.json();
     
      const movie=data.results;
      
      const task=[];
     for (const i in movie) {
     
      
      task.push({
        title: movie[i].title,
        poster:movie[i].poster_path,
        overview: movie[i].overview,
        popularity: movie[i].popularity,
        release_data: movie[i].release_date,
        rating: movie[i].vote_average,
        id:movie[i].id
      });
    }
    setdata(task);
    setall((prevdata)=>
    [...prevdata.concat(task)]
   )
    
      
      
      }catch(error){
          console.log("error")
      }
     setisloading(false)  ///yahan  tk pahun gaya to succesfull ho jata hai
      
    }
  fetchmovie();
    
  },[])
  //for the TOP rated Movies
  useEffect(()=>{
   async function fetchdata(){
    try{
           const res=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=20a16400fe2972ffc1a5c5c84f714fc5");
           
           const data=await res.json();
           const movie=data.results;
           const task=[];
           for (const i in movie) {
      
            
            task.push({
              id:movie[i].id,
              title: movie[i].title,
              poster:movie[i].poster_path,
              overview: movie[i].overview,
              popularity: movie[i].popularity,
              release_data: movie[i].release_date,
              rating: movie[i].vote_average,
            });
          }
          settoprated(task);
          settoploading(false);
          setall((prevdata)=>
           [...prevdata.concat(task)]
          )

     



    }catch(error){
            console.log("errror");
    }   
   

   }
   fetchdata();
        




  },[])
  //for the upcoming movies
   
 useEffect(()=>{
   async function fetchupcoming(){
       try{
      const res=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=20a16400fe2972ffc1a5c5c84f714fc5");
      const data=await res.json();
      const movie=data.results;
      
      const task=[];
      for (const i in movie) {
      
            
        task.push({
          id:movie[i].id,
          title: movie[i].title,
          poster:movie[i].poster_path,
          overview: movie[i].overview,
          popularity: movie[i].popularity,
          release_data: movie[i].release_date,
          rating: movie[i].vote_average,
        });
      }
     setupcoming(task)
    setcomingloading(flase);
     setall((prevdata)=>
      [...prevdata.concat(task)]
     )



    }catch(error){
      console.log("error")
    }
    

   }
   fetchupcoming(); 
  


 },[]) 
 

 useEffect(()=>{
 async function fetchnowplaying(){
    try{
    const res=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=20a16400fe2972ffc1a5c5c84f714fc5");
    const data=await res.json();
    console.log(data);
    const movie=data.results;
    const task=[];
    for (const i in movie) {
      
            
      task.push({
        id:movie[i].id,
        title: movie[i].title,
        poster:movie[i].poster_path,
        overview: movie[i].overview,
        popularity: movie[i].popularity,
        release_data: movie[i].release_date,
        rating: movie[i].vote_average,
      });
    }
    setnow_playing(task)
    setnowloading(false)
    setall((prevdata)=>
    [...prevdata.concat(task)])
    }catch(error){
      console.log("error");
    }






 }
 fetchnowplaying();





 },[])
 console.log(all);

///for the searxh bar 

   
   
  
  


  
   
      


      
      
     
   


   

 return(
    <Authcontext.Provider value={{data ,isloading,toprated,nowloading,comingloading, toploading,upcoming,now_playing,all:all}}>
        {children}
    </Authcontext.Provider>
 )


}

export function functioncontext(){
     return useContext(Authcontext);
}
