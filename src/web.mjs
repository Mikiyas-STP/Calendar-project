// src/web.mjs
// This is the application's entry point. It controls the flow of everything.

// STEP 1: GATHER THE TEAMS (Importing)
// The Project Manager gets the phone numbers for the specialized teams it needs.
import { createCalendarLayout } from "./calendar.mjs"; // Imports the UI "builder" function.
import { populateMonthsSelect, populateYearsSelect } from "./common.mjs"; // Imports the "tool" functions.

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

  console.log("Calendar is ready and running!");

  // This is where you would add future steps, like telling the buttons what to do when clicked.
  // ui.nextButton.addEventListener('click', () => {
  //     console.log("Next button was clicked.");
  //     // Logic to change the month...
  // });
}

// STEP 6: START THE ENTIRE OPERATION (Execution)
// The plan is defined, but nothing has happened yet.
// This single line at the end is the "GO" signal. It calls the `initializeApp` function
// and triggers the entire chain of events defined above.
initializeApp();
