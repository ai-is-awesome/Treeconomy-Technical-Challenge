let unix_timestamp = 976444914;

export const formatDate = (timestamp) => {
  let date = new Date(timestamp * 1000);

  // Creating an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = getOrdinalSuffix(date.getUTCDate());
  let month = monthNames[date.getUTCMonth()];
  let year = date.getUTCFullYear();

  let formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};

// Creating a function to get the suffix
function getOrdinalSuffix(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Type can be "asc" or "desc"
export function sortByDate(data, type) {
  return data.sort((a, b) =>
    type === "asc" ? a.start_date - b.start_date : b.start_date - a.start_date
  );
}

function capitalizeEachWord(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

export function formatProjectName(str) {
  return capitalizeEachWord(str);
}
