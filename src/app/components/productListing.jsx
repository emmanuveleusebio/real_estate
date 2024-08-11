"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/proudctSlice";
import { viewDetails } from '../features/dataSlice';
import Skelton from "./skeltonLoading";


export default function Listing() {
  const dispatch = useDispatch()
  const router = useRouter();
  const { products, status, error } = useSelector((state) => state.products);
  const  valuee = useSelector((state) => state.globalValues.productDetails)
  const auth = useSelector((state) => state.globalValues.isAuth)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProducts()).unwrap();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

 

  const moreDetails = async (details) => {
    dispatch(viewDetails(details))
    router.push(`/productDetails`);
  };

  if (status === 'loading') {
    return <div>
      <Skelton />
    </div>;
  }

  if (status === 'failed') {
    return <div>Error loading products. Please try again later.</div>;
  }

  return (
    <div className="container m-auto font-sans pt-5 flex justify-center flex-col">
      <div>
        <h1 className="text-3xl p-5 pb-10">Explore</h1>
        <div className="cardLists p-5 grid grid-cols-4 gap-[60px] m-auto">
        

        {products.map((details, index) => (
              <div key={index}
              className="max-w-[250px] overflow-hidden products"
              onClick={() => moreDetails(details)}
            >
              <div className="h-[170px]">
                <img
                  className="h-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JPCLyMnmt-P2m_PgFpOejiPyXzjU8P-85Q&s"
                  alt=""
                />
              </div>
              <div className="p-4">
                <p className=" text-2xl">{details.title}</p>
                <p className="">{details.location.length > 15 ? details.location.slice(0, 15) + '...' : details.location}</p>
                <p className=" text-xl">{details.price}</p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

