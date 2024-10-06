"use client";
import React, {lazy} from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Listing = lazy(() => import("../components/productListing"))
const Footer = lazy(() => import("../components/footer"))
const HeaderCatagories = lazy(() => import("../components/headerCatagories"))
// import Listing from "../components/productListing";
// import Footer from "../components/footer";
// import HeaderCatagories from "../components/headerCatagories";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "../store";
import Skelton from "../components/skeltonLoading";

export default function HomePage() {
  const router = useRouter();
  const [color, setColor] = useState("bg-blue-500");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("api/isAuth");
        setAuth(true);
      } catch (error) {
        setAuth(false);
        router.push("/login");
      } finally {
        setLoading(false); // Set loading to false after auth check
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return <Skelton />; // Optionally display a loading indicator
  }

  if (!auth) {
    return null; // Optionally return null or a different component if not authenticated
  }

  return ( 
    <Provider store={store}>
      <div className={`w-full h-full body`}>
        <HeaderCatagories />
        <div className=" flex items-center justify-center w-[100vw] h-[75vh]  bg-no-repeat bg-cover bg-center bg-[url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <h1 className="robo text-white  animate-slide-and-shake text-center text-[60px] max-w-[700px] font-[800]">Unlock your dream home, where comfort meets style</h1>
        </div>
        <Listing />
        <Footer />
      </div>
    </Provider>
  );
}
