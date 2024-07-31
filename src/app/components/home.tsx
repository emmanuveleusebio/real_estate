'use client'
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {

  
  const adv = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEYhiAXzS4JHV68XUq2IsssU8cS4Wr_1-ZK8v7zNPTSVysRoIqNmcj0xcw0BD-Pm-iw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXA1O9dKfBg-D4aXvQe-7HTCYevJlgcxAuOlY2LHSVNUcuptS0iLLg5P9NIMtavzdIFw&usqp=CAU']
  const [ addImg, setAddImg ] = useState(0)
  useEffect(() => {
   setTimeout(()=> {
    const imgIndex = (addImg + 1) % adv.length;
    setAddImg(imgIndex)
    },3000)
    
  }, [addImg])

  return (
    <div className="pt-[100px] container   m-auto">
      <div className=" flex justify-around">
        <div className=" w-1/4 flex flex-col border-r-2 border-r-black items-center">
          <div className="flex flex-col space-y-5 pt-5">
            <p>House for sale</p>
            <p>Flats</p>
            <p>Plots</p>
            <p>Villas</p>
          </div>
        </div>
        <div className="w-3/4  overflow-hidden">
          <img className=" h-[200px] p-3 w-full" src={adv[addImg]}  alt="error" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl pt-20 ps-10 font-bold">For You</h1>
        <div className="flex w-full  overflow-scroll space-x-5 p-10  h-[230px]  bg-950">
        <img className=" shadow-2xl rounded-3xl w-[200px]" src="https://imgs.search.brave.com/r0lyJ1UOBfa0W3JbnQXyc-ww-8KJWycgUtlIJNs0Vhk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzEyLzI4LzAx/LzM2MF9GXzExMjI4/MDExNl8yOGpnREpR/djR6bUpZSHhJNVpE/VzdlWlBUbFJVdkdS/bi5qcGc" alt="" />
        <img className=" shadow-2xl rounded-3xl w-[200px]" src="https://imgs.search.brave.com/ie2CcchQDb9VHRvdv87Ckg6oKalY-_hvm6Hs6x2eu1I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NzUyNTg4My9waG90/by9hcmNoaXRlY3R1/cmUtb2YtYS1tb2Rl/cm4tYnVpbGRpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXduaUl2WVJjVTVF/cVMwNWdDUkZvYllu/eW5aSWl3ekpsQ2xP/X2NyaFlaSzQ9" alt="" />
        <img className=" shadow-2xl rounded-3xl w-[200px]" src="https://imgs.search.brave.com/KGq--6tMvzG1IyFG1xqFZ_gYXhY8zH4ZyBAKZfhZ9OQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU5/MzcxNzkxL3Bob3Rv/L3Rhai1tYWhhbC1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TTVqNVdP/Ti1zYjVJYmVGeEU4/d0kzQ1JoRjFsWU8y/UWVGd0diSU1ZZzZm/Yz0" alt="" />
        <img className=" shadow-2xl rounded-3xl w-[200px]" src="https://imgs.search.brave.com/nxoEdE8VYmdoi5eCZxw0kf1axe5jQD3MmqiBDKgb7rU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAz/MDE1MjczL3Bob3Rv/L3JlZmVjdGlvbi1v/Zi1idWlsZGluZ3Mt/b24tYS1za3lzY3Jh/cGVyLWZhY2FkZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eG0zLWxIU1VvOFd4/R2tBeHNDbnZqMG1H/T0lyaGE2elZEa2tn/SC1iLWdhND0" alt="" />
        <img className=" shadow-2xl rounded-3xl min-w-[200px]" src="https://imgs.search.brave.com/h3mzXiMDtNizqFWXRRZmapM8UwHbq1uaxFAoLePaRQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzdi/L2JjL2UxN2JiYzkx/YzRkMDE4NjMyY2U5/MzRjMDhkNzMzNmM2/LmpwZw" alt="" />
        <img className=" shadow-2xl rounded-3xl min-w-[200px]" src="https://imgs.search.brave.com/u85gnq3pnpjGheAKVXu_plqrEUFyz6JOH9M7R6MVm3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTk0MzU0L3Bob3Rv/L2xlYW5pbmctdG93/ZXItb2YtcGlzYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N3FuZGw2aU41UElT/SkRKbFRHLVprcnJi/SWI2ZXpnQU9UbGh2/SUsyNm5DUT0" alt="" />
        </div>
      </div>
    </div>
  );
}
