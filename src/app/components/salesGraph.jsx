import React from "react";

export default function Graph() {
  const sales = [3, 5, 6, 8, 5, 3, 7];
  const maxSales = 10;
  const highest = Math.max(...sales);
  const graphHeight = 500;
  return (
    <div className="m-auto flex justify-center flex-col w-fit bg-white p-10 rounded-2xl">
    <div className="flex  h-full ">
      <div className="flex flex-col h-full justify-around gap-6 py-6 font-bold">
        <h1>100</h1>
        <h1>90</h1>
        <h1>80</h1>
        <h1>70</h1>
        <h1>60</h1>
        <h1>50</h1>
        <h1>40</h1>
        <h1>30</h1>
        <h1>20</h1>
        <h1>10</h1>
      </div>
      <div className=" border-s-2 border-s-black border-b-2 border-b-black h-[500px] w-[800px] flex gap-[10px] items-end">
        {sales.map((val, index) => {
          const barHeight = (val / maxSales) * graphHeight;
          return (
            <div
              key={index}
              className={`w-[50px] bg-gray-500`}
              style={{ height: `${barHeight}px` }}
            ></div>
          );
        })}
      </div>
      <div className="font-bold">
        <p>X-Month</p>
        <p>Y-Percentage</p>
        <p>Highest Revenue-{highest}.000$</p>
      </div>
      </div>
      <div className="flex  h-full gap-[51px] px-12 font-bold">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
        <h1>7</h1>
        <h1>8</h1>
        <h1>9</h1>
        <h1>10</h1>
        <h1>11</h1>
        <h1>12</h1>
      </div>
    </div>
  );
}
