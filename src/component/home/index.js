import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Bx from "./bxx.png"
import {GetCategory} from '../../action'

export default function Home() {
     const dispatch =  useDispatch();
     const allCategory = useSelector(state=>state.category);
     useEffect(()=>{
        dispatch(GetCategory())
     },[])
      

     const renderCategories = (categories) => {
      console.log(categories)
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <div className="flex text-white text-normal font-normal p-2" key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </div>

      );
    }
    
    return myCategories;
  }

console.log(allCategory.allCategory)
     
	return (
		<div className="">
  <div className="justify-center items-center flex h-48 relative" style={{backgroundColor:"#1B3992"}}>

   <div className="h-full absolute left-0 w-96 flex justify-center p-6 rounded-r-full" style={{backgroundColor:"#2D499A"}}>
     <div className="flex text-white text-4xl font-bold">ApiOnline</div>
   </div>
   <div className="absolute flex w-auto justify-center align-center right-10 top-8">
   
     
        {allCategory.categories?.length > 0 ? renderCategories(allCategory.categories) : null}
 
     <div className="flex text-white text-normal font-normal p-2">
     <span>|</span>
     </div>
     <div className="flex text-white text-normal font-normal p-2">
     {/*<img src="https://img.icons8.com/ios/18/ffffff/shopping-cart.png"/>*/}
     <Link to={"/login"}>Login</Link>
     </div>
     {/*<div className="flex text-white text-normal font-normal p-2">
     <Link to={"/login"}>More</Link>
     </div>
*/}     <div className="flex text-white text-normal font-normal p-2">
     <Link to={"/detail"}>Cart</Link>
     </div>
     
        
      

      
   </div>
    
   {/*<h1 className="text-6xl text-white font-extrabold font-mono">Akira B2B </h1>*/}
    <div className="border border-gray-300 p-6   bg-white shadow-lg rounded-md   w-9/12  absolute  -bottom-16 ">
       
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
     {/*<div className="flex">
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
    </div>*/}
    <main className="my-8">
  <div className="container mx-auto px-6">
    <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
    <span className="mt-3 text-sm text-gray-500">200+ Products</span>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">


      <Link to="/detail" className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              'url("https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg")'
          }}
        >
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">H2SO4</h3>
          <span className="text-gray-500 mt-2">500</span>
        </div>
      </Link>

      <Link to="/detail" className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              'url("https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg")'
          }}
        >
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">H2SO4</h3>
          <span className="text-gray-500 mt-2">500</span>
        </div>
      </Link>

      <Link to="/detail" className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              'url("https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg")'
          }}
        >
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">H2SO4</h3>
          <span className="text-gray-500 mt-2">500</span>
        </div>
      </Link>

      <Link to="/detail" className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              'url("https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg")'
          }}
        >
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">H2SO4</h3>
          <span className="text-gray-500 mt-2">500</span>
        </div>
      </Link>

      <Link to="/detail" className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div
          className="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              'url("https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg")'
          }}
        >
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">H2SO4</h3>
          <span className="text-gray-500 mt-2">500</span>
        </div>
      </Link>





    </div>

    {/*
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
        >
          <span>1</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
        >
          <span>2</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
        >
          <span>3</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
        >
          <span>Next</span>
        </a>
      </div>
    </div>*/}


  </div>
</main>

  </div>
  <div className="h-56 bg-gray-100"></div>
</div>


	)}