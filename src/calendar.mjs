//The UI layout of our Calendar
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

  // ----- button -------
  const prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.textContent = " ← Previous";
  prevButton.setAttribute("aria-label", "Go to previous month");


  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next → ";
  nextButton.setAttribute("aria-label", "Go to the next month");

  // ----- Dropdown -------
  const monthLabel = document.createElement("label");   //for label
  monthLabel.htmlFor = "month-select";
  monthLabel.textContent = "Month: ";
  const monthSelect = document.createElement("select"); //for dropdown
  monthSelect.id = "month-select";


  const yearLabel = document.createElement("label");
  yearLabel.htmlFor = "year-select";
  yearLabel.textContent = "Year: ";
  const yearSelect = document.createElement("select");
  yearSelect.id = "year-select";

//the calader controls appended
  controlsDiv.append(prevButton, nextButton, monthLabel, monthSelect, yearLabel, yearSelect);

  // -- Table calendar  --
  const table = document.createElement("table");
  table.id = "calendar-grid";


  const thead = document.createElement("thead"); //heading for daynames
  const headerRow = document.createElement("tr");

  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  dayNames.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th); // .append() doesn't offer much advantage inside a loop
  });

  thead.appendChild(headerRow);

  const tbody = document.createElement("tbody");
  tbody.id = "calendar-body";
  table.append(thead, tbody);
  tableDiv.appendChild(table);

  calendarContainer.append(titleDiv, controlsDiv, tableDiv); //everything appended here
  document.body.appendChild(calendarContainer); //appened to the body of the html

  return { monthSelect, yearSelect, prevButton, nextButton, tbody }; //to dynamically use them outside this function e.g eventlistner
}