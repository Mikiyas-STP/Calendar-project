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

  // ----- button previous button -------
  // ----- Added aria label for accessibility screen readers -------
  const prevButton = document.createElement("button");
  prevButton.id = "prev-button";
  prevButton.textContent = " ← Previous";
  prevButton.setAttribute("aria-label", "Go to previous month");

  // ----- button previous button -------
  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.textContent = "Next → ";
  nextButton.setAttribute("aria-label", "Go to the next month");

  // ----- Dropdown Months  -------
  // ----- ACCESSIBILITY LABELS Months -------
  const monthLabel = document.createElement("label");
  monthLabel.htmlFor = "month-select";
  monthLabel.textContent = "Month: ";

  const monthSelect = document.createElement("select");
  monthSelect.id = "month-select";

  // ----- Dropdown Years  -------
  // ----- ACCESSIBILITY LABELS Years -------
  const yearLabel = document.createElement("label");
  yearLabel.htmlFor = "year-select";
  yearLabel.textContent = "Year: ";

  const yearSelect = document.createElement("select");
  yearSelect.id = "year-select";

  //appended buttons and dropdown to its container.
  controlsDiv.append(prevButton, nextButton, monthLabel, monthSelect, yearLabel, yearSelect);

  // ----- Table calendar  -------
  const table = document.createElement("table");
  table.id = "calendar-grid";

  // ----- header row with day names  -------
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  dayNames.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th); // .append() doesn't offer much advantage inside a loop
  });

  thead.appendChild(headerRow);

  // ----- body where dates will be injected dynamically  -------
  const tbody = document.createElement("tbody");
  tbody.id = "calendar-body";

  // ----- body where dates will be injected dynamically  -------
  table.append(thead, tbody);
  tableDiv.appendChild(table);

  calendarContainer.append(titleDiv, controlsDiv, tableDiv);

  //appended to the body the structure
  document.body.appendChild(calendarContainer);

  // Using property shorthand for a more compact return statement
  return { monthSelect, yearSelect, prevButton, nextButton, tbody };
}