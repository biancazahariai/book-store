import React, { useState } from "react";

export default function AddBook(props) {
  const [dataHelper, setDataHelper] = useState({});
  const { setIsModalAddOpen, addNewBook } = props;

  const customSubmit = (event) => {
    addNewBook({ ...dataHelper, rent: 0 });
    setIsModalAddOpen(false);
    setDataHelper({
      isbn: "",
      title: "",
      author: "",
      quantity: 0,
      price: 0,
      cover: "",
    });
    event.preventDefault();
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Add New Book</h2>
      <form onSubmit={(event) => customSubmit(event)} className="my-4">
        <div className="grid grid-cols-3">
          <div className="grid grid-rows-2">
            <label htmlFor="isbn">
              ISBN <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="text"
              id="isbn"
              name="isbn"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.isbn}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, isbn: event.target.value })
              }
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="title">
              Title <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.title}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, title: event.target.value })
              }
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="author">
              Author <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="text"
              id="author"
              name="author"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.author}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, author: event.target.value })
              }
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="quantity">
              Quantity <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="number"
              id="quantity"
              name="quantity"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.quantity}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, quantity: event.target.value })
              }
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="price">
              Price <span className="text-[red]">*</span>
            </label>
            <input
              required
              type="number"
              step="0.01"
              id="price"
              name="price"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.price}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, price: event.target.value })
              }
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="cover">Cover</label>
            <input
              type="link"
              id="cover"
              name="cover"
              style={{ border: "1px solid black" }}
              className="mx-2"
              value={dataHelper?.cover}
              onChange={(event) =>
                setDataHelper({ ...dataHelper, cover: event.target.value })
              }
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button type="submit" className="bg-[#f7edf7] w-24 h-8">
            OK
          </button>
        </div>
      </form>
    </>
  );
}
