"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Home from "../components/home";
import Listing from "../components/productListing";
import Footer from "../components/footer";
import Details from "../components/viewProduct";
import HeaderCatagories from "../components/headerCatagories";
import Profile from "../components/profile";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  const [color, setColor] = useState("bg-blue-500");
  const [val, setVal] = useState("");

  const change = () => {
    color === "bg-blue-500" ? setColor("bg-red-500") : setColor("bg-blue-500");
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(val);
    const data = { username: "example", password: "password" };
    const res = await axios.post("/api/login", data);
    console.log("success", res);
  };

  return (
    <div className={`w-full h-full body`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <HeaderCatagories />
      <Listing />
      <Footer />
    </div>
  );
}
