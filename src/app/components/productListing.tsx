"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Listing() {
  const router = useRouter();
  const [products, setProducts] = useState({})

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('api/isAuth')
      } catch (error) {
        router.push('/login')
      }
    }
    checkAuth();
  },[router])

  useEffect(()=> {
   const getData = async () => {
    try {
      console.log('this is working fine')
      const data = await axios.get('api/Products')
      setProducts(data)
      
    } catch (error) {
      console.log(error, 'error while getting data')
    }
   }
   getData()
  }, [])

  const moreDetails = async () => {
    router.push("/productDetails");
  };

  return (
    <div className="container m-auto font-sans pt-5 flex justify-center flex-col">
      <div>
        <h1 className="text-3xl p-5 pb-10">Explore</h1>
        <div className="cardLists p-5 grid grid-cols-4 gap-[60px] m-auto">
          <div
            className="max-w-[250px] overflow-hidden products"
            onClick={moreDetails}
          >
            <div className="h-[170px]">
              <img
                className="h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JPCLyMnmt-P2m_PgFpOejiPyXzjU8P-85Q&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>

          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT0GLdozA9O3qNafJIQWBZoRCWX-l1ECcvQ&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>

          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEVCezoKtvG1UXrf79CJMqLEbPWTrjQ6fBw&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>

          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5W1jGAjoYypQThjXtp0G1j8XZhDL6AU0-Q&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>

          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1tHKkHDEDSU1oi6OBDsWfW5Z2_PGcKNDXw&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>

          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JPCLyMnmt-P2m_PgFpOejiPyXzjU8P-85Q&s"
                alt=""
              />
            </div>
            <div className="p-2">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>
          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JPCLyMnmt-P2m_PgFpOejiPyXzjU8P-85Q&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>
          <div className="max-w-[250px] overflow-hidden products">
            <div className="h-[170px]">
              <img
                className="h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JPCLyMnmt-P2m_PgFpOejiPyXzjU8P-85Q&s"
                alt=""
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl">3Bhk House</p>
              <p className=""> 8 Guest , 3BedRoom </p>
              <p className=" text-xl">3891 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
