"use client";
import React from "react";
import Header from "./header";
import Listing from "./productListing";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/proudctSlice";

export default function HeaderCatagories() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const showCategories = (category) => {
    dispatch(getProducts(category));
  };

  const allCategories = () => {
    dispatch(getProducts());
  };

  return (
    <div className="sticky top-0  z-10 ">
      <Header />
      <div className="  w-full catorery-header">
        <div className=" flex w-full z-10">
          <div className="bg-red-500 flex-1 text-white all-catogries">
            <p
              onClick={() => allCategories()}
              className="allCatogries all-catogries"
            >
              All catagories
            </p>
          </div>
          <div
            onClick={() => showCategories("house")}
            className=" flex-1 text-white catogries"
          >
            House
          </div>
          <div
            onClick={() => showCategories("hotel")}
            className="flex-1 text-white catogries"
          >
            Hotel
          </div>
          <div
            onClick={() => showCategories("camp house")}
            className="flex-1 text-white catogries"
          >
            Camp House
          </div>
          <div
            onClick={() => showCategories("villa")}
            className="flex-1 text-white catogries"
          >
            Villa
          </div>
          <div className="flex-1 text-white catogries">Appartment</div>
        </div>
      </div>
    </div>
  );
}
