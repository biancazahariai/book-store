import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "" : "hidden";

  return (
    <div className={showHideClassName}>
      <div
        style={{
          position: "absolute",
          width: "75%",
          border: "3px solid black",
          background: "white",
          left: "13%",
          top: "20%",
          padding: "20px",
        }}
      >
        {children}
        <button
          type="button"
          onClick={handleClose}
          className="justify-self-end"
          style={{ position: "absolute", top: "0", right: "1%" }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
