"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Wishlist() {
    const router = useRouter();
  const items = [
    {
        title:'Villa',
      description:
        "TypeHouses & Villas Bedrooms1 Bathrooms1 FurnishingSemi-Furnished Listed by OwnerSuper Builtup area (ft²)1125 Carpet Area (ft²)1000 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: " 299.00 $",
      img:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    },
    {
        title:'Appartment',
      description:
      "TypeHouses & Villas Bedrooms1 Bathrooms1 FurnishingSemi-Furnished Listed by OwnerSuper Builtup area (ft²)1125 Carpet Area (ft²)1000 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      price: " 319.00 $",
      img:'https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/4b3453e4add2884cf12d47ef54f51381-full.webp'
    },
  ];

  const details = () => {
    router.push('/productDetails')
  }
  return (
    <div className="p-5 m-5 bg-white flex flex-col gap-[60px]" onClick={details}>
      <div>
        <h1 className="text-3xl font-bold">Wishlist</h1>
      </div>
      {items.map((element, index) => (
        <div className="flex gap-[60px]" key={index}>
            <div className="w-[250px] h-[250px]">
                <img className="min-h-[250px] min-w-[250px] max-h-[250px] max-w-[250px]" src={element.img} alt="" />
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="text-2xl font-bold">{element.title}</h1>
                <p className="">{element.description}</p>
                <h1 className="text-2xl font-bold">{element.price}</h1>
            </div>
        </div>
        
      ))}
    </div>
  );
}
