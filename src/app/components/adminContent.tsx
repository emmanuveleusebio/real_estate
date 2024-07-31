import React from "react";

export default function UserInfo(){
    const users = [
        {
          userName: "Alice",
          date: "2024-07-27",
          type: "premium",
          plan: 'monthly',
          post: 6
        },
        {
          userName: "Bob",
          date: "2024-07-27",
          type: "normal",
          plan: 'null',
          post: 1
        },
        {
          userName: "Charlie",
          date: "2024-07-27",
          type: "premium",
          plan: 'yearly',
          post: 4
        },
        {
          userName: "Diana",
          date: "2024-07-27",
          type: "normal",
          plan: 'null',
          post: 2
        },
        {
            userName: "Alice",
            date: "2024-07-27",
            type: "premium",
           plan: 'weakly',
           post: 5
          },
          {
            userName: "Bob",
            date: "2024-07-27",
            type: "normal",
            plan: 'null',
            post: 0
          },
          {
            userName: "Charlie",
            date: "2024-07-27",
            type: "premium",
            plan: 'monthly',
            post: 3
          },
          {
            userName: "Diana",
            date: "2024-07-27",
            type: "normal",
            plan: 'null',
            post: 1
          }
      ];
      
    return(
        <div className="h-full object-cover ">
            <div className="flex flex-col gap-[20px] bg-gray-500 p-5">
            <div className="admin bg-white w-[400px] py-2 px-5 rounded-2xl">
           <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
            </div> 
            <h1 className="text-2xl font-bold text-white">Sales information</h1>
            <div className="flex justify-between">
                <label className="flex flex-col font-bold text-white" htmlFor="name">Customer
                    <input className="admin py-1 px-5 text-black" type="text" name="name" />
                </label>
                <label className="flex flex-col font-bold text-white" htmlFor="date">Date
                    <input className="admin py-1 px-5 text-black" type="text" name="date" />
                </label>
                <label className="flex flex-col font-bold text-white" htmlFor="type">Type
                    <input className="admin py-1 px-5 text-black" type="text" name="type" />
                </label>
                <label className="flex flex-col font-bold text-white" htmlFor="membership">Membership
                    <input className="admin py-1 px-5 text-black" type="text" name="membership" />
                </label>
            </div>
            </div>

            <div className="bg-white m-10">
            <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-500 text-white">
                            <th className="border p-2">SL</th>
                            <th className="border p-2">Customer</th>                          
                            <th className="border p-2">Type</th>
                            <th className="border p-2">Plan</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{user.userName}</td>
                                <td className="border p-2">{user.type}</td>
                                <td className="border p-2">{user.plan}</td>
                                <td className="border p-2">{user.post}</td>
                                <td className="border p-2">{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}