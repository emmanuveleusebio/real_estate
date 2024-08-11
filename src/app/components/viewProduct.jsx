'use client'
import React from "react";    
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { wishlistdata, messageReceiverId, viewDetails  } from "../features/dataSlice";
import { useState } from "react";
import axios from "axios";


export default function Details() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState("");
  const details = useSelector((state) => state.globalValues.productDetails)

  const chat = async () => {
    console.log(details._id, 'this is the id');
    try {
        const response = await axios.get(`/api/productView`, {
            params: {
                productId: details._id
            }
        });
        dispatch(messageReceiverId(response.data.userId))
       
        router.push('chatPage');
    } catch (error) {
        console.error('Error fetching user ID:', error);
    }
};

  const wishlist = async () => {
    console.log(details._id, 'this is the id')
    const data = await axios.post('api/wishlist',{details:details._id})
    if (data.status === 201) {
      setPopupMessage("Product removed successfully");
    } else if (data.status === 200) {
      setPopupMessage("Product added successfully");
    }

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setPopupMessage("");
    }, 1000);

    console.log(data, 'hai hello')
    dispatch(wishlistdata(data.data.data))
    
  }

  return (
    <div className="h-[100%] p-7">
      
      <div className="bg-[white] p-10">
        <div className="flex justify-between">
        <h1 className="text-3xl py-7">{details.title}</h1>
        <i onClick={wishlist} className="flex my-auto mx-10 text-red-400 text-3xl fa-solid fa-heart"></i>
        </div>
        <div className="details-img">
        <img className="w-[100%] max-h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8eII_00s8ul7Z-O9tKk5DcHn5woeSbI6_w&s" alt="" />
        <i className="fa-solid fa-angle-left left-angle"></i>
        <i className="fa-solid fa-angle-right right-angle"></i>
        </div>
        <h2 className="text-2xl py-5">Description </h2>
        <p>{details.description}</p>
        <h3 className="text-2xl py-5">Details</h3>
        <ul>
            <li>TypeHouses & Villas</li>
            <li>Bedrooms2</li>
            <li>Bathrooms4+</li>
            <li>semi furnished</li>
        </ul>
        <div className="flex justify-between items-center">
        <h2 className="text-2xl">{details.price}</h2>
        <button onClick={chat} className="buttons bg-blue-500 px-[70px] py-3 rounded-2xl text-white">Chat</button>

        </div>
        

      </div>
    {popupMessage && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-green-500 text-white p-4 rounded">
      {popupMessage}
    </div>
  </div>
)}

    </div>
  );
}
