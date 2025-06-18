// src/web.mjs
// This is the application's entry point. It controls the flow of everything.

// STEP 1: GATHER THE TEAMS (Importing)
// The Project Manager gets the phone numbers for the specialized teams it needs.
import { createCalendarLayout } from "./calendar.mjs"; // Imports the UI "builder" function.
import { populateMonthsSelect, populateYearsSelect, getMonthGrid } from "./common.mjs"; // Imports the "tool" functions and calendar engine
import { getDateForCommemorativeDay } from "./dateUtilities.mjs"; // <-- ADDED: Import the core date logic
import commemorativeDays from "../../icals-data/days.json" with { type: "json" }; // <-- ADDED: Import the event data

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
        events.set(date.getDate(), dayInfo.name);
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

        // *** THIS IS THE KEY CHANGE ***
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

// STEP 2: DEFINE THE MASTER PLAN (The Main Function)
// This function contains the entire sequence of startup instructions.
function initializeApp() {
  console.log("Initializing calendar...");

  // STEP 3: EXECUTE THE FIRST TASK - Build the Structure
  // The Manager calls the Engineering Team (`calendar.mjs`) and gives the order: "Build the layout!"
  // The `createCalendarLayout` function builds the UI and RETURNS the important interactive parts (like the dropdowns).
  // We store these returned elements in the `ui` variable. This is like the engineers handing the manager the keys to the new building.
  const ui = createCalendarLayout();

  // STEP 4: EXECUTE THE SECOND TASK - Populate the Controls
  // Now that the structure exists and the manager has the "keys" (`ui`),
  // it calls the Tool Shop (`common.mjs`) and says: "Take this tool (`populateMonthsSelect`) and use it on this specific part (`ui.monthSelect`)."
  populateMonthsSelect(ui.monthSelect);
  populateYearsSelect(ui.yearSelect);

  // STEP 5: EXECUTE THE THIRD TASK - Set the Initial State
  // This is a quality-of-life step. The manager sets the dropdowns to reflect today's date
  // so the user has a sensible starting point. This can only happen AFTER the dropdowns have been populated in Step 4.
  const today = new Date();
  ui.monthSelect.value = today.getMonth(); // January is 0, February is 1, etc.
  ui.yearSelect.value = today.getFullYear();

  // STEP 6: RENDER THE INITIAL CALENDAR GRID
  // Now that the initial month and year are set, render the calendar dates
  renderCalendarGrid(today.getFullYear(), today.getMonth(), ui.tbody);

  // STEP 7: ADD EVENT LISTENERS TO UPDATE THE CALENDAR WHEN USER CHANGES CONTROLS

  // When the user changes the month dropdown
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

  console.log("Calendar is ready and running!");
}

// STEP 8: START THE ENTIRE OPERATION (Execution)
// The plan is defined, but nothing has happened yet.
// This single line at the end is the "GO" signal. It calls the `initializeApp` function
// and triggers the entire chain of events defined above.
initializeApp();