import React from "react";

export default function RoundedButton({ children, className, onClick }) {
  console.log("Onclick", onClick);
  return (
    <button className={`rounded-btn ` + className} onClick={onClick}>
      {children}
    </button>
  );
}
