import React, { useRef, useState } from "react";
import { Books, RentedBooks } from "../Data/Books";
import StatusTag from "./StatusTag";
import Modal from "./Modal";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";
import RentBook from "./RentBook";

export default function BookList() {
  const scrollRef = useRef(null);
  const [booksDisplayed, setBooksDisplayed] = useState(Books.slice(0, 4));
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [ismodalAddOpen, setIsModalAddOpen] = useState(false);
  const [ismodalRentOpen, setIsModalRentOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [rentedBooks, setRentedBooks] = useState(RentedBooks);

  const seeMoreBooks = () => {
    setBooksDisplayed(Books.slice(0, booksDisplayed.length + 4));
  };

  const filterByTitle = (titleFilter) => {
    if (titleFilter.length >= 1) {
      const filterdBooks = Books.filter((eachBook) =>
        eachBook.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
      setBooksDisplayed(filterdBooks);
    } else setBooksDisplayed(Books.slice(0, 4));
  };

  const setModalInfo = (bookData, modalType) => {
    if (modalType === "seeInfo") {
      setIsModalOpen(true);
    } else setIsModalRentOpen(true);
    executeScroll();
    setModalData(bookData);
  };

  const addNewBook = (newBook) => {
    const objHelper = {};
    objHelper[newBook?.isbn] = [];
    Books.unshift(newBook);
    setRentedBooks({ ...rentedBooks, ...objHelper });
    setBooksDisplayed(Books.slice(0, 4));
  };

  const rentBook = (userInfo) => {
    const objHelper = {};

    if (rentedBooks?.[modalData?.isbn]) {
      objHelper[modalData?.isbn] = rentedBooks?.[modalData?.isbn];
      objHelper[modalData?.isbn].push(userInfo);
    } else {
      objHelper[modalData?.isbn] = [];
      objHelper[modalData?.isbn].push(userInfo);
    }
    setRentedBooks({ ...rentedBooks, ...objHelper });
  };

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <>
      <div
        className={ismodalOpen || ismodalAddOpen ? "opacity-10" : ""}
        ref={scrollRef}
      >
        <div className="grid grid-cols-4 gap-6 mb-16">
          <div className="text-2xl font-semibold">Book List</div>
          <div className="ml-auto" />
          <input
            type="text"
            id="title"
            name="title"
            style={{ border: "1px solid black" }}
            className="mx-2"
            onChange={(event) => filterByTitle(event.target.value)}
            placeholder="Title"
            data-cy="searchTitle"
          />
          <button
            type="button"
            onClick={() => setIsModalAddOpen(true)}
            className="bg-[#f7edf7] w-24 h-8"
            data-cy="addBook"
          >
            Add
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {booksDisplayed.map((eachBook, index) => {
            const checkRentAvability =
              eachBook.quantity - rentedBooks?.[eachBook?.isbn]?.length === 0;
            return (
              <div key={eachBook.isbn} className="grid h-96 bg-[#f7edf7]">
                <button
                  type="submit"
                  className="flex content-center flex-col justify-center h-72"
                  onClick={() => setModalInfo(eachBook, "seeInfo")}
                  data-cy={`checkInfo${index}`}
                >
                  <img
                    src={
                      eachBook?.cover ||
                      "https://readersend.com/wp-content/uploads/2018/04/book-sample_preview-1.png"
                    }
                    alt="/"
                    className="w-36 h-56 my-4 self-center"
                  />
                  <h4 className=" m-auto">{eachBook?.title}</h4>
                </button>
                {eachBook.quantity !== 0 ? (
                  <StatusTag status="inStock" />
                ) : (
                  <StatusTag status="outOfStock" />
                )}
                <div className="flex justify-center my-4">
                  <button
                    type="button"
                    className={
                      checkRentAvability
                        ? "bg-[#949296] w-24 h-8 text-[white] opacity-25"
                        : "bg-[#949296] w-24 h-8 text-[white]"
                    }
                    onClick={() => setModalInfo(eachBook, "rent")}
                    disabled={checkRentAvability}
                    data-cy={`rentBook${index}`}
                  >
                    Rent Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => seeMoreBooks()}
            disabled={booksDisplayed.length === Books.length}
            className={
              booksDisplayed.length === Books.length
                ? "text-[#a08da1] mt-4"
                : "text-[#352936] mt-4"
            }
            data-cy="seeMore"
          >
            See more
          </button>
        </div>
      </div>
      {ismodalOpen && (
        <Modal show={ismodalOpen} handleClose={() => setIsModalOpen(false)}>
          <BookInfo
            modalData={modalData}
            rentedBooks={rentedBooks}
            setRentedBooks={setRentedBooks}
          />
        </Modal>
      )}
      {ismodalAddOpen && (
        <Modal
          show={ismodalAddOpen}
          handleClose={() => setIsModalAddOpen(false)}
        >
          <AddBook
            setIsModalAddOpen={setIsModalAddOpen}
            addNewBook={addNewBook}
          />
        </Modal>
      )}

      {ismodalRentOpen && (
        <Modal
          show={ismodalRentOpen}
          handleClose={() => setIsModalRentOpen(false)}
        >
          <RentBook
            setIsModalRentOpen={setIsModalRentOpen}
            modalData={modalData}
            rentBook={rentBook}
          />
        </Modal>
      )}
    </>
  );
}
