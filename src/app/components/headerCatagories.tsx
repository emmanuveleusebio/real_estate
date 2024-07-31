"use client";
import React from "react";
import Header from "./header";
import Listing from "./productListing";

export default function HeaderCatagories() {
  return (
    <div className="sticky top-0  z-10 ">
      <Header />
      <div className="  w-full catorery-header">
        <div className=" flex w-full z-10">
          <div className="bg-red-500 flex-1 text-white all-catogries">
            <p className="allCatogries all-catogries">All catagories</p>
          </div>
          <div className=" flex-1 text-white catogries">House</div>
          <div className="flex-1 text-white catogries">Hotel</div>
          <div className="flex-1 text-white catogries">Camp House</div>
          <div className="flex-1 text-white catogries">Villa</div>
          <div className="flex-1 text-white catogries">Appartment</div>
        </div>
      </div>
    </div>
  );
}
