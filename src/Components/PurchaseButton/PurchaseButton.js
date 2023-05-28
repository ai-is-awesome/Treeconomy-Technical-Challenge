import React from "react";
import RoundedButton from "../RoundedButton/RoundedButton";

export default function PurchaseButton({ state, onStateChange }) {
  // Uses Rounded button component to render the button. Text and styles are handled within the component based on the value of state prop
  console.log("OnStateChange", onStateChange);
  const text = state === "purchase" ? "Purchase" : "Purchased";
  const className =
    state === "purchase" ? "text-white bg-green" : "text-white bg-orange";
  return (
    <RoundedButton className={className} onClick={onStateChange}>
      {text}
    </RoundedButton>
  );
}
