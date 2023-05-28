import React from "react";
import "./ProjectItem.css";
import { formatDate } from "../../utils";
import PurchaseButton from "../PurchaseButton/PurchaseButton";

export default function ProjectItem({ project, togglePurchaseState }) {
  //  Renders the UI for each project item. Passes purchase state to the purchase button component
  return (
    <div className="project-item">
      <div className="img-container">
        <img src={project.image} alt="project-img" />
      </div>
      <div className="project-item-description-container">
        <h3>{project.name}</h3>
        <ul className="list-right">
          <li>{project.available_credits} credits</li>
          <li>{formatDate(project.start_date)}</li>
        </ul>
      </div>
      <PurchaseButton
        state={project.purchaseState}
        onStateChange={() => togglePurchaseState(project.id)}
      />
    </div>
  );
}
