"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [logDetails, setLogDetails] = useState({
        username: '',
        password: '',
        email: '',
    })
    const handleChange = (e)=> {
        const {name, value} = e.target;
        setLogDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }))
        
    }
   
    const handleSubmit = async ()=> {
        try {
            const submitLog = await axios.post('api/login', logDetails)
            if (submitLog.status === 200){
              router.push('/homePage')
            } else {
              alert(submitLog.data.message || 'Login failed')
            }
            
        } catch (error) {
            console.error('Err  or:', error.response?.data.message || error.message);        }        
    }

  return (
    <div className="bg-blue-300">
      <div className="relative">
        <img
          className="h-screen w-screen object-cover opacity-75"
          src="https://e0.pxfuel.com/wallpapers/436/360/desktop-wallpaper-black-and-white-skyscraper-drawing-building-drawing.jpg"
          alt=""
        />
        <div className="register-card flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 p-5 rounded-xl gap-[35px]">
          <h1 className="text-3xl font-bold text-white">Login</h1>

          <div className="flex flex-col gap-[30px]">
            <label className="text-white font-bold flex flex-col  ps-3" htmlFor="username">User Name
                <input onChange={handleChange} className="rounded-xl py-1 px-7 text-black" type="text" name="username" />
                </label>

                <label className="text-white font-bold flex flex-col  ps-3" htmlFor="email">Email
                <input onChange={handleChange} className="rounded-xl py-1 px-7 text-black" type="text" name="email" />
                </label>
                <label className="text-white font-bold flex flex-col  ps-3" htmlFor="password">Password
                <input onChange={handleChange} className="rounded-xl py-1 px-7 text-black" type="text" name="password" />
                </label>
    
                
          </div>
          <div className="flex gap-[20px] pb-10">
            
            <button className="register bg-purple-500 py-2 px-6 rounded-xl text-white">Register</button>
            <button onClick={handleSubmit} className="register bg-purple-500 py-2 px-6 rounded-xl text-white">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
