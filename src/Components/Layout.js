import React from "react";
import BookList from "./BookList";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="mx-24 my-12">
        <BookList />
      </section>
    </>
  );
}
