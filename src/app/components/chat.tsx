'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Chat(){
    const router = useRouter();
    const userImg = ['','https://img.freepik.com/free-vector/profile-picture-design_742173-13765.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user', 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg']

    const chatMessages = [
        {
          personId: 1,
          chatContent: "Hi there! How are you?",
          time: "2024-07-27T09:00:00Z"
        },
        {
          personId: 2,
          chatContent: "Hello! I'm doing great, thanks. How about you?",
          time: "2024-07-27T09:01:00Z"
        },
        {
          personId: 1,
          chatContent: "I'm good too. Just checking in.",
          time: "2024-07-27T09:02:00Z"
        },
        {
          personId: 2,
          chatContent: "Glad to hear that. Let me know if you need anything.",
          time: "2024-07-27T09:03:00Z"
        },
        {
            personId: 1,
            chatContent: "Hi there! How are you?",
            time: "2024-07-27T09:00:00Z"
          },
          {
            personId: 2,
            chatContent: "Hello! I'm doing great, thanks. How about you?",
            time: "2024-07-27T09:01:00Z"
          },
          {
            personId: 1,
            chatContent: "I'm good too. Just checking in.",
            time: "2024-07-27T09:02:00Z"
          },
          {
            personId: 2,
            chatContent: "Glad to hear that. Let me know if you need anything.",
            time: "2024-07-27T09:03:00Z"
          }
      ];
      const back = () => {
        router.push('productDetails')
      }
      
    return(
        <div className="p-10">
            <div className=" message sticky top-[10px] flex w-[600px] mx-auto items-center gap-[20px] bg-blue-200 rounded-[50px] px-7 py-2">
            <i onClick={back} className="fa-solid fa-arrow-left"></i>
            <div className="rounded-full w-[50px] ">
                <img className="rounded-full " src="https://img.freepik.com/free-vector/profile-picture-design_742173-13765.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user" alt="" />
            </div>
            <p>Hidesh Chaudery</p>
            </div>
            <div className="flex flex-col gap-[50px] py-[70px]">
           {chatMessages.map((content, index)=> (
           <div className={`flex ${content.personId === 1 ? 'flex-row-reverse' : 'flex-row'} gap-[10px]`}>
            <div className="rounded-full w-[50px]">
            <img className="rounded-full" src={userImg[content.personId]} alt="" />
            </div>
            <p className={`${content.personId == 1? 'bg-blue-400' : 'bg-red-400'} py-3 px-10 rounded-2xl text-white`}>{content.chatContent}</p>
           </div>
           ))}
           </div>
           <div className=" sticky bottom-[10px] flex justify-center">
            <div className="message bg-white rounded-3xl px-5 py-3">
            <input type="text" className=" w-[400px] rounded-3xl" />
            <i className="fa-solid fa-paper-plane"></i>
            </div>
           </div>
        </div>
    )
}