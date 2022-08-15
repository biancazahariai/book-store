import React from "react";

export default function Header() {
  return (
    <div className="bg-[#f7edf7] h-24 align-center">
      <img
        src="./bookstore.png"
        className="w-48 h-24"
        alt="logo"
        data-cy="logo"
      />
    </div>
  );
}
