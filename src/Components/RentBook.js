import React, { useState } from "react";

export default function RentBook(props) {
  const [dataHelper, setDataHelper] = useState({});
  const { setIsModalRentOpen, rentBook } = props;

  const customSubmit = (event) => {
    rentBook({ ...dataHelper, date: new Date() });
    setIsModalRentOpen(false);
    setDataHelper({
      name: "",
    });
    event.preventDefault();
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Rent Book</h2>
      <form onSubmit={(event) => customSubmit(event)} className="my-4">
        <div className="grid grid-cols-3">
          <div className="grid grid-rows-2">
            <label htmlFor="name">
              Full Name <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.name}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, name: event.target.value })
              }
              data-cy="nameInput"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="bg-[#f7edf7] w-24 h-8"
            data-cy="okButton"
          >
            OK
          </button>
        </div>
      </form>
    </>
  );
}
