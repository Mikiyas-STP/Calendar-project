
export function populateMonthsSelect(selectElement) {
  const months = [
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

  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index; 
    option.textContent = month;
    selectElement.appendChild(option);
  });
}

export function populateYearsSelect(selectElement) {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 100; year <= currentYear + 200; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selectElement.appendChild(option);
  }
}

/**
 * The "Grid Calculator" engine. It takes a year and a month and calculates
 * @param {number} year - The full year (e.g., 2025).
 * @param {number} month - The month, from 0 (Jan) to 11 (Dec).
 * @returns {Array<Array<number|null>>} A 2D array of weeks and days.
 */

export function getMonthGrid(year, month) {
  // --- PART 1: Get the two key pieces of information ---

  // 1: How many days are in the month we asked for?
  // This trick gets the last day of the given month by asking for day 0 of the *next* month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //on what day of the week does this month start?
  //getDay() return 0 for sunday, 1 for monday, 2 for Tuesday ...etc
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // --- PART 2: Adjust for our week starting on Monday ---

  // The instructions say our calendar week starts on Monday.
  // We need to convert JavaScript's Sunday-first week (0=Sun) to a Monday-first week (0=Mon).
  // This is a simple calculation to find our "starting square" in the grid.
  // It's a compact if-else: if (firstDayOfWeek === 0) then startDayIndex is 6, else it's firstDayOfWeek - 1.
  const startDayIndex = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  // --- PART 3: Build the grid, week by week ---

  // This will be our final result, an array of weeks.
  const grid = [];

  // This is a temporary array to hold the 7 days of the week we are currently building.
  let currentWeek = [];

  //this is the number we'll be putting into the square, starting with 1
  let dayCounter = 1;

  //first, add the empty squares for the beginning of the first week
  for (let i = 0; i < startDayIndex; i++) {
    currentWeek.push(null);
    //null will be displayed in the empty squares
  }

  //Now, fill the square with day numbers until we run out of days.
  while (dayCounter <= daysInMonth) {
    currentWeek.push(dayCounter);
    if (currentWeek.length === 7) {
      grid.push(currentWeek); //add the completed week to our main

      //this will start a new empty array
      currentWeek = [];
    }

    dayCounter++;
  }

  // After the loop, check if there's an incomplete week left over.
  // (This handles months that don't end perfectly on a Sunday).
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
     //Add the final, now-completed week to the grid.
    grid.push(currentWeek);
  }


  // Now, return the completed grid.
  return grid;
}