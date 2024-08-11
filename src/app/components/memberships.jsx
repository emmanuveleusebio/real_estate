'use client'
import React from 'react';
import { useSelector } from 'react-redux';

export default function Cards(){

    const plans = useSelector((state) => state.globalValues.membership)
    
    return(
        <div className='flex justify-around m-7 bg-white p-10 r-x-[20px] text-white '>
            {plans.map((element, index) =>(
                <div className='plans flex flex-col gap-[40px] p-7 max-w-[350px] rounded-tr-2xl rounded-br-2xl' key={index}>
                    <div>
                        <h3>{element.duration} days</h3>
                    </div>
                <div className='flex flex-col gap-[40px] justify-center'>
                <div className='flex justify-around'>
                    <i className=" text-green-400 text-[80px] fa-solid fa-circle-dollar-to-slot"></i>
                    </div>
                    <h1 className='text-2xl flex text-center'>One week premium membership</h1>
                    <ul className='flex flex-col m-auto text-center'>
                        <li>Unlimited uploads</li>
                        <li>25% More reach</li>
                        <li>Lorem Ipsum is simply</li>
                        <li>Printing and typesetting</li>
                    </ul>
                    <div className='flex justify-center'>
                        <p className='max-w-[250px] flex text-center'>{element.discription}</p>
                    </div>
                    <div>
                        <h1 className='text-2xl'>{element.price}$</h1>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}