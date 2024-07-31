"use client";
import React from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import Upload from "../components/uploads";
import AddPage from "../components/addCard";
import Footer from "../components/footer";

export default function () {
  return (
    <div className="body">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>

      <Header />
      <Profile />
      <Upload />
      <Footer />
    </div>
  );
}
