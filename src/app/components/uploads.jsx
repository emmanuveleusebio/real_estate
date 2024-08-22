"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Upload() {
  const router = useRouter();
  const addPage = () => {
    router.push("/uploadPage");
  };
  return (
    <div className="container m-auto font-sans pt-10 flex justify-center flex-col">
      <div className="m-auto">
        <div className="flex items-center pb-7 gap-[15px]">
          <h1 className="text-3xl ">Uploads</h1>
          <div className="buttons bg-purple-500 px-2 py-1 rounded-full">
            <i
              className="text-white fa-solid fa-folder-plus"
              onClick={addPage}
            ></i>
          </div>
        </div>
        <div className=" cardLists p-5 grid grid-cols-3 gap-[60px] m-auto  border-t-[1px] border-t-black">
          <div className="max-w-[250px] overflow-hidden products">
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
        </div>
      </div>
    </div>
  );
}
