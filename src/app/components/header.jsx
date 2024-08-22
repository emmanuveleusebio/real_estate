"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  chatCollections,
  wishlistdata,
  membershipPlans,
} from "../features/dataSlice";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const profile = async () => {
    NProgress.start();
    try {
      router.push("/profile");
    } finally {
      NProgress.done();
    }
  };
  const wishlist = async () => {
    NProgress.start();
    try {
      const list = await axios.get("api/wishlist");
      dispatch(wishlistdata(list.data.productsWithImages));
      router.push("/wishlist");
    } catch (error) {
      console.log(error);
    } finally {
      NProgress.done();
    }
  };

  const premium = async () => {
    NProgress.start();
    try {
      router.push("/subscriptions");
      const result = await axios.get("api/membership");
      dispatch(membershipPlans(result.data.cards));
    } catch (error) {
      console.log(error);
    } finally {
      NProgress.done();
    }
  };
  const home = async () => {
    NProgress.start();
    try {
      router.push("/homePage");
    } catch (error) {
      console.log("error while switching page", error);
    }
    NProgress.done();
  };
  const message = async () => {
    NProgress.start();
    try {
      const result = await axios.get("api/chat", {
        params: {
          method: "involvedChats",
        },
      });
      router.push("/messages");
      dispatch(chatCollections(result.data.name));
    } catch (error) {
      console.log("error while getting involved chats", error);
    } finally {
      NProgress.done();
    }
  };

  return (
    <div className="sticky z-10 w-full bg-[white]  top-0 border-b-2 py-3">
      <div className="flex p-3 justify-around w-full items-center  border-b-black">
        <div>
          <h1 className="text-3xl font-bold">Brand Name</h1>
        </div>
        <div className="search bg-gray-200 rounded-xl p-1 ps-3">
          {" "}
          <i className="text-gray-500 fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="ps-1 bg-gray-200 "
            placeholder="Search"
          />
        </div>
        <ul className="flex space-x-[60px] navbar font-bold">
          <li onClick={home}>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div>
          <button
            onClick={premium}
            className="buttons bg-blue-500 rounded-xl text-white p-2"
          >
            Premium
          </button>
        </div>
        <i
          onClick={wishlist}
          className="text-red-400 text-2xl fa-solid fa-heart"
        ></i>
        <i
          onClick={profile}
          className="text-green-500 text-2xl fa-solid fa-user"
        ></i>
        <i
          onClick={message}
          className="text-blue-200 text-2xl fa-solid fa-message"
        ></i>
      </div>
    </div>
  );
}
