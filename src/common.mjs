//to populate the Month and Year dropdown with options
export function populateMonthsSelect(monthSelect) {

  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  monthSelect.innerHTML = ""; 
  monthNames.forEach((monthName, index) => {
    const option = document.createElement("option");
    option.value = index; // 0-based month index
    option.textContent = monthName;
    monthSelect.appendChild(option);
  });
}

export function populateYearsSelect(yearSelect, startYear = 1900, endYear = 2200) {

  yearSelect.innerHTML = "";
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

//building the 2DGrid of the month
export function getMonthGrid(year, month) {

  const daysInMonth = new Date(year, month + 1, 0).getDate();//last day of the month by looking at day 0 of the next month.
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 1->monday

  //adjust our calender to start on monday->0(to be first day) 
  const startDayIndex = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
 
  let currentWeek = [];
  const grid = []; //the main grid array holding weeks
  let dayCounter = 1;

  //first, add the empty squares for the beginning of the first week
  for (let i = 0; i < startDayIndex; i++) {
    currentWeek.push(null); // null in the empty squares
  }

  
  while (dayCounter <= daysInMonth) {
    currentWeek.push(dayCounter);
    if (currentWeek.length === 7) {
      grid.push(currentWeek);
      currentWeek = []; //reset  the array for the other weeks
    }
    dayCounter++;  //fill the square until we run out of days
  }

  if (currentWeek.length > 0) {  //if their is incomplete week leftover
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }

    grid.push(currentWeek);
  }

  return grid;
}

