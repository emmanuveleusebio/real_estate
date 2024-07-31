'use client'
import React from "react";
import AddPage from "../components/addCard";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Upload(){
    return(
       <div>
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
         <AddPage />
         <Footer />
       </div>
    )
}