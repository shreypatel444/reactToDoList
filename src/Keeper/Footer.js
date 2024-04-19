import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="footer-div">
        <p className="footer">copyright ⓒ {date}</p>
      </div>
    </>
  );
}
