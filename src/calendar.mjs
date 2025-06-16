//we have all code in one function and we can call it
// when we need it, and send by return the key elements

export function createCalendarLayout() {
  //main container
  const calendarContainer = document.createElement("div");
  calendarContainer.id = "calendar-container";

  //title div
  const titleDiv = document.createElement("div");
  titleDiv.id = "calendar-title";
  titleDiv.textContent = "Commemorative Days Calendar";

  //controls div
  const controlsDiv = document.createElement("div");
  controlsDiv.id = "calendar-controls";

  const tableDiv = document.createElement("div");
  tableDiv.id = "calendar-table";

  // ----- button previous button -------
  const prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.textContent = " ← Previous";

  // ----- button previous button -------
  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next → ";

  // ----- Dropdown Months  -------
  const monthSelect = document.createElement("select");
  monthSelect.id = "month-select";

  // ----- Dropdown Years  -------
  const yearSelect = document.createElement("select");
  yearSelect.id = "year-select";

  //appended buttons and dropdown to its container.
  controlsDiv.appendChild(prevButton);
  controlsDiv.appendChild(nextButton);
  controlsDiv.appendChild(monthSelect);
  controlsDiv.appendChild(yearSelect);

  // ----- Table calendar  -------
  const table = document.createElement("table");
  table.id = "calendar-grid";

  // ----- header row with day names  -------
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  dayNames.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);

  // ----- body where dates will be injected dynamically  -------
  const tbody = document.createElement("tbody");
  tbody.id = "calendar-body";

  // ----- body where dates will be injected dynamically  -------
  table.appendChild(thead);
  table.appendChild(tbody);
  tableDiv.appendChild(table);

  calendarContainer.appendChild(titleDiv);
  calendarContainer.appendChild(controlsDiv);
  calendarContainer.appendChild(tableDiv);

  //appended to the body the structure
  document.body.appendChild(calendarContainer);

  return {
    monthSelect: monthSelect,
    yearSelect: yearSelect,
    prevButton: prevButton,
    nextButton: nextButton,
    tbody: tbody,
  };
}

