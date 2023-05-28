import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./ProjectsContainer.css";

export default function ProjectsContainer({ data, togglePurchaseState }) {
  // Renders the  UI for list of projects. The data is passed as props from the parent component

  return (
    <div>
      <h2>Projects List</h2>
      <div className="projects-grid">
        {data.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            togglePurchaseState={togglePurchaseState}
          />
        ))}
      </div>
    </div>
  );
}
