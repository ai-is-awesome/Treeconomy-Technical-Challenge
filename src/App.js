import "./reset.css";
import "./App.css";
import ProjectsContainer from "./Components/ProjectsContainer/ProjectsContainer";
import { fetchProjects, processData } from "./services";

import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const App = () => {
  const results = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchProjects(),
  });

  const [processedData, setProcessedData] = useState(
    results.data ? processData(results.data) : []
  );

  // Wait for the api results to come in before setting the initial state of every project to "purchase"

  const togglePurchaseState = (id) => {
    console.log("Toggle state!");
    setProcessedData((prev) => {
      return prev.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            purchaseState:
              project.purchaseState === "purchase" ? "purchased" : "purchase",
          };
        }
        return project;
      });
    });
  };

  // Updating the state if  the api returns results
  useEffect(() => {
    if (!results.data) return;
    setProcessedData(processData(results.data));
  }, [results.data]);

  return (
    <>
      <div className="container main-container">
        <h1>Treeconomy - Piyush</h1>
        {results.data && (
          <ProjectsContainer
            data={processedData}
            togglePurchaseState={togglePurchaseState}
          />
        )}
      </div>
    </>
  );
};

export default App;
