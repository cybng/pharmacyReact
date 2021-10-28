import React from 'react'
import {Link } from 'react-router-dom'
import Bx from "./bxx.png"

export default function index() {
	return (
		<div className="">
  <div className="justify-center items-center flex h-48 relative" style={{backgroundColor:"#1B3992"}}>

   <div className="h-full absolute left-0 w-96 flex justify-center p-6 rounded-r-full" style={{backgroundColor:"#2D499A"}}>
     <div className="flex text-white text-4xl font-bold">ApiOnline</div>
   </div>
   <div className="absolute flex w-auto justify-center right-10 top-8">
     <div className="flex text-white text-normal font-normal p-2">demo 1</div>
     <div className="flex text-white text-normal font-normal p-2">demo 2</div>
     <div className="flex text-white text-normal font-normal p-2">demo 3</div>
     <div className="flex text-white text-normal font-normal p-2">demo 4</div>
     <div className="flex text-white text-normal font-normal p-2">demo 5</div> 
     <div className="flex text-white text-normal font-normal p-2">
        <span className="flex p-2  rounded-lg" style={{backgroundColor:"#2D499A"}}>
        <img src="https://img.icons8.com/ios/18/ffffff/shopping-cart.png"/>
        </span>
        {/*<span className="flex h-full p-2 rounded-full">
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/change-user-male.png" className="flex h-6"/>
        Admin
        </span>*/}

     <div className="flex text-white text-normal font-normal pl-4 pt-0.5"> Login</div> 
     </div>
   </div>
    
   {/*<h1 className="text-6xl text-white font-extrabold font-mono">Akira B2B </h1>*/}
    <div className="border border-gray-300 p-6   bg-white shadow-lg rounded-lg   w-9/12  absolute  -bottom-16 ">
       
      <div className="">
        <div className="flex">
          <div className="flex border rounded w-full bg-white items-center p-2 ">
            <svg
              className="fill-current text-gray-800 mr-2 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path
                className="heroicon-ui"
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Medicine..."
              className="bg-white w-full focus:outline-none text-gray-700"
            />
          </div> 
          <button className="p-2 border rounded-md text-white ml-1" style={{backgroundColor:"#1B3992"}}>
          Search
        </button>
        </div>
         
      </div>

      <div className="flex mt-5"> 
        <span className="mx-1 text-blue-500 ">medicine</span> 
        <span className=" mx-1 text-blue-500">drug</span>  
        <span className=" mx-1 text-blue-500">tablet</span>  
        
      </div>
    </div>
  </div>
  <div className="container h-auto mx-auto justify-center m-20 shadow-lg bg-white border border-gray-100">
     <div className="flex">
    <Link to="/detail" className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></Link>
    <Link to="/detail" className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></Link>
    <Link to="/detail" className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></Link>
    <Link to="/detail" className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></Link>
    <Link to="/detail" className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></Link>  
    </div>
    <div className="flex">
    <div className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></div>
    <div className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></div>
    <div className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></div>
    <div className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></div>
    <div className="h-56 w-52 bg-gray-100 border border-gray-100 left-0 m-5"></div>  
    </div>
  </div>
  <div className="h-56 bg-gray-100"></div>
</div>


	)}