//This is our application's entry point where it controls the flow of everything.
import { createCalendarLayout } from "./calendar.mjs";
import { populateMonthsSelect, populateYearsSelect, getMonthGrid } from "./common.mjs";
import { getDateForCommemorativeDay } from "./dateUtilities.mjs";
import commemorativeDays from "../../icals-data/days.json" with { type: "json" };

//function to find all events for a given month and year
function getEventsForMonth(year, month) {
  const events = new Map(); 

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

//function to render calendar days into the table body
function renderCalendarGrid(year, month, tbody) {
  const events = getEventsForMonth(year, month); // Get all events
  
  tbody.innerHTML = "";
  const weeks = getMonthGrid(year, month);

  weeks.forEach((week) => {
    const tr = document.createElement("tr");
    week.forEach((day) => {
      const td = document.createElement("td");
      if (day !== null) {
        td.textContent = day; // Set the day number

        if (events.has(day)) {
          const eventDiv = document.createElement("div");
          eventDiv.className = "event";
          eventDiv.textContent = events.get(day);
          td.appendChild(eventDiv);
        }
      }
      tr.appendChild(td);
    });y
    tbody.appendChild(tr);
  });
}



function initializeApp() {
  console.log("Initializing calendar...");
  const ui = createCalendarLayout();

  //Populate the Controls
  populateMonthsSelect(ui.monthSelect);
  populateYearsSelect(ui.yearSelect);

  const today = new Date();
  ui.monthSelect.value = today.getMonth();
  ui.yearSelect.value = today.getFullYear();

  //initial month and year are set then render the calendar dates
  renderCalendarGrid(today.getFullYear(), today.getMonth(), ui.tbody);

  //eventListeners to update the calendar
  ui.monthSelect.addEventListener("change", () => {
    renderCalendarGrid(Number(ui.yearSelect.value), Number(ui.monthSelect.value), ui.tbody);
  });
  ui.yearSelect.addEventListener("change", () => {
    renderCalendarGrid(Number(ui.yearSelect.value), Number(ui.monthSelect.value), ui.tbody);
  });

  ui.prevButton.addEventListener("click", () => {
    let month = Number(ui.monthSelect.value);
    let year = Number(ui.yearSelect.value);

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

  ui.nextButton.addEventListener("click", () => {
    let month = Number(ui.monthSelect.value);
    let year = Number(ui.yearSelect.value);
 
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }

    ui.monthSelect.value = month;
    ui.yearSelect.value = year;
    renderCalendarGrid(year, month, ui.tbody);
  });
}

initializeApp();