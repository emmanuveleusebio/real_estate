import React from "react";
import UserInfo from "../components/adminContent";
import Header from "../components/header";
import Footer from "../components/footer";
import Graph from "../components/salesGraph";

export default function userInfo() {
  return (
    <div className="body pb-10">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <UserInfo />
      <Graph />
    </div>
  );
}
