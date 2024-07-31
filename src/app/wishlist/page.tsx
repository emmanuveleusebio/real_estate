'use client'
import React from "react";
import Wishlist from "../components/wishlist";
import Header from "../components/header";
import Footer from "../components/footer";

export default function WishlistPage() {
    return(
        <div className="body ">
            <Header />
            <Wishlist />
            <Footer />
        </div>
    )
}