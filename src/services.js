// Can contain business logic, API calls, data processing etc.

import { formatProjectName, sortByDate } from "./utils";

export const fetchProjects = () => {
  const url =
    "https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json";
  return fetch(url).then((response) => response.json());
};

// Business logic for processing and sanitizing data
export const processData = (data) => {
  // Sorting data in descending order
  const sortedData = sortByDate(data, "desc");
  // Formatting project name
  const formattedData = sortedData.map((project) => {
    return {
      ...project,
      name: formatProjectName(project.name),
      purchaseState: "purchase",
    };
  });

  return formattedData;
};
