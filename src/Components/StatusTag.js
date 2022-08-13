import React from "react";

export default function StatusTag({ status }) {
  const textStyle =
    status === "inStock"
      ? { style: "text-[#2ad12d] font-semibold", text: "In stock" }
      : { style: "text-[red] font-semibold", text: "Out of stock" };
  return (
    <div className={`${textStyle.style} text-center`}>{textStyle.text}</div>
  );
}
