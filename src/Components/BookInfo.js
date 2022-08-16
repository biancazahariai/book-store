import React from "react";
import { checkRentedDate, formatDate } from "./utils";

export default function BookInfo({ modalData, rentedBooks, setRentedBooks }) {
  const cardInfo = [
    {
      cardTitle: "Number of books",
      cardNumber:
        modalData?.quantity - (rentedBooks?.[modalData?.isbn]?.length || 0),
    },
    {
      cardTitle: "Book price",
      cardNumber: `${modalData.price} $`,
    },
    {
      cardTitle: "Number of rented books",
      cardNumber: rentedBooks?.[modalData?.isbn]?.length || 0,
    },
  ];

  const bookBack = (rowInfo) => {
    const objHelper = {};
    objHelper[modalData?.isbn] = [];
    objHelper[modalData?.isbn] = rentedBooks?.[modalData?.isbn].filter(
      (eachUser) => eachUser?.name !== rowInfo?.name
    );
    setRentedBooks({ ...rentedBooks, ...objHelper });
  };

  return (
    <>
      <h2 className="text-xl font-semibold">{modalData.title}</h2>
      <h3 className="text-lg">{modalData.author}</h3>
      <div className="grid md:grid-cols-3 sm:grid-flow-row gap-2 my-4">
        {cardInfo?.map((eachInfo) => {
          return (
            <div
              className="grid grid-cols-2 bg-[#f7edf7] h-24 drop-shadow-2xl"
              key={eachInfo.cardTitle}
            >
              <h4 className="text-center text-lg self-center">
                {eachInfo.cardTitle}
              </h4>
              <p className="text-center text-lg self-center font-semibold">
                {eachInfo.cardNumber}
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <table className="md:w-5/6 mx-auto sm:table-auto">
          <tr style={{ border: "1.5px solid black" }}>
            <th>Name</th>
            <th>Book rental date</th>
            <th>Rent price</th>
            <th>Late fee</th>
            <th>Total payment</th>
            <th>Action</th>
          </tr>
          {rentedBooks?.[modalData?.isbn]?.map((item, index) => {
            return (
              <tr
                style={{ border: "1px solid black" }}
                className="text-center"
                key={index}
              >
                <td>{item.name}</td>
                <td>{formatDate(item.date)}</td>
                <td>{modalData.price} $</td>
                <td>{checkRentedDate(item.date, modalData).lateFee}</td>
                <td>{checkRentedDate(item.date, modalData).totalPayment}</td>
                <td>
                  <button
                    type="button"
                    className="hover:bg-[#c7c4cc] w-24"
                    onClick={() => bookBack(item)}
                    data-cy={`bookBack${index}`}
                  >
                    Book back
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
