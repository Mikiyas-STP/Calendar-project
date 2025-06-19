//This is our main js file (the application's entry point)where it controls the flow of everything.

import { createCalendarLayout } from "./calendar.mjs"; // Imports the UI "builder" function.
import { populateMonthsSelect, populateYearsSelect, getMonthGrid } from "./common.mjs"; // Imports the functions
import { getDateForCommemorativeDay } from "./dateUtilities.mjs"; //Import the core date logic
import commemorativeDays from "../../icals-data/days.json" with { type: "json" }; //Import the event data

// New helper function to find all events for a given month and year
function getEventsForMonth(year, month) {
  const events = new Map(); // Using a Map is efficient for looking up events by day number

  commemorativeDays.forEach((dayInfo) => {
    // Check if the commemorative day belongs to the month we are currently displaying
    const eventMonthIndex = new Date(`${dayInfo.monthName} 1, 2000`).getMonth();
    if (eventMonthIndex === month) {
      const date = getDateForCommemorativeDay(dayInfo, year);
      if (date) {
        // Store the event in our map with the day number as the key (e.g., 8 -> "Ada Lovelace Day")
        events.set(date.getUTCDate(), dayInfo.name);
      }
    }
  });
  return events;
}

// Helper function to render calendar days into the table body
function renderCalendarGrid(year, month, tbody) {
  // Get all events for the currently displayed month and year
  const events = getEventsForMonth(year, month);

  // Clear any existing calendar rows
  tbody.innerHTML = "";

  // Get the 2D array of weeks and days from the calendar engine
  const weeks = getMonthGrid(year, month);

  // Iterate through each week
  weeks.forEach((week) => {
    const tr = document.createElement("tr");

    // Iterate through each day in the week (number or null)
    week.forEach((day) => {
      const td = document.createElement("td");

      // If day is not null, we populate the cell
      if (day !== null) {
        td.textContent = day; // Set the day number

        // Check if our events map has an entry for this day
        if (events.has(day)) {
          // If it does, create a small div to show the event name
          const eventDiv = document.createElement("div");
          eventDiv.className = "event"; // For potential styling
          eventDiv.textContent = events.get(day);
          td.appendChild(eventDiv);
        }
      }

      tr.appendChild(td);
    });

    // Append the completed week row to the table body
    tbody.appendChild(tr);
  });
}


//function to define the entire sequence of startup instructions.
function initializeApp() {
  console.log("Initializing calendar...");

  //createCalendarLayout function builds the UI and RETURNS the important interactive parts (like the dropdowns)and then we stored that in ui.
  const ui = createCalendarLayout();

  //Populate the Controls
  //use populateMonthsSelect to populate the monthSelect and yearSelect.
  populateMonthsSelect(ui.monthSelect);
  populateYearsSelect(ui.yearSelect);

  //after the dropdown have been populated  then we Set the Initial State
  //dropdowns to reflect today's date
  const today = new Date();
  ui.monthSelect.value = today.getMonth(); // January is 0, February is 1, etc.
  ui.yearSelect.value = today.getFullYear();

  // Now that the initial month and year are set, render the calendar dates
  renderCalendarGrid(today.getFullYear(), today.getMonth(), ui.tbody);

  //eventListeners to update the calendar
  //When the user changes the month dropdown
  ui.monthSelect.addEventListener("change", () => {
    renderCalendarGrid(Number(ui.yearSelect.value), Number(ui.monthSelect.value), ui.tbody);
  });
  // When the user changes the year dropdown
  ui.yearSelect.addEventListener("change", () => {
    renderCalendarGrid(Number(ui.yearSelect.value), Number(ui.monthSelect.value), ui.tbody);
  });
  // When the user clicks the "Previous" button
  ui.prevButton.addEventListener("click", () => {
    let month = Number(ui.monthSelect.value);
    let year = Number(ui.yearSelect.value);
    // Move back one month, adjusting year if needed
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    // Update the dropdown values and re-render the calendar
    ui.monthSelect.value = month;
    ui.yearSelect.value = year;
    renderCalendarGrid(year, month, ui.tbody);
  });
  // When the user clicks the "Next" button
  ui.nextButton.addEventListener("click", () => {
    let month = Number(ui.monthSelect.value);
    let year = Number(ui.yearSelect.value);
    // Move forward one month, adjusting year if needed
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    // Update the dropdown values and re-render the calendar
    ui.monthSelect.value = month;
    ui.yearSelect.value = year;
    renderCalendarGrid(year, month, ui.tbody);
  });
}
//start the entire execution. 
initializeApp();