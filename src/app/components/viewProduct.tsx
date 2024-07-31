'use client'
import React from "react";
import Header from "./header";
import { useRouter } from "next/navigation";

export default function Details() {
  const router = useRouter();

  const chat = () => {
    router.push('chatPage')
  }
  return (
    <div className="h-[100%] p-7">
      
      <div className="bg-[white] p-10">
        <h1 className="text-3xl py-7">Luxury sea facing 3BHK appartment </h1>
        <div className="details-img">
        <img className="w-[100%] max-h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8eII_00s8ul7Z-O9tKk5DcHn5woeSbI6_w&s" alt="" />
        <i className="fa-solid fa-angle-left left-angle"></i>
        <i className="fa-solid fa-angle-right right-angle"></i>
        </div>
        <h2 className="text-2xl py-5">Description </h2>
        <p>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble</p>
        <h3 className="text-2xl py-5">Details</h3>
        <ul>
            <li>TypeHouses & Villas</li>
            <li>Bedrooms2</li>
            <li>Bathrooms4+</li>
            <li>semi furnished</li>
        </ul>
        <div className="flex justify-between items-center">
        <h2 className="text-2xl">72400 $</h2>
        <button onClick={chat} className="buttons bg-blue-500 px-[70px] py-3 rounded-2xl text-white">Chat</button>
        </div>

      </div>

    </div>
  );
}
