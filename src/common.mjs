export function getMonthGrid(year, month) {
  // --- PART 1: Get the two key pieces of information ---

  // 1: How many days are in the month we asked for?
  // This trick gets the last day of the given month by asking for day 0 of the *next* month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //on what day of the week does this month start?
  //getDay() return 0 for sunday, 1 for monday, 2 for Tuesday ...etc
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // This is a temporary array to hold the 7 days of the week we are currently building.
  let currentWeek = [];

  // This is the main grid array holding weeks
  const grid = [];

  //this is the number we'll be putting into the square, starting with 1
  let dayCounter = 1;
   
  //first, add the empty squares for the beginning of the first week
  for(let i = 0; i < firstDayOfWeek; i++){
    currentWeek.push(null);
    //null will be displayed in the empty squares
  }

  //Now, fill the square with day numbers until we run out of days.
  while (dayCounter <= daysInMonth){
    currentWeek.push(dayCounter);

    if(currentWeek.length === 7){
      grid.push(currentWeek);  //add the completed week to our main

      //this will start a new empty array
      currentWeek = []; 
    }

    dayCounter++;
  }

  //when the month is complete filled, we will fill with null the rest
  if(currentWeek.length < 7){
    while(currentWeek.length < 7){
      currentWeek.push(null);
    }
  }

  //add the final, completed week to our grid.
  grid.push(currentWeek);


  //return the finished calendar
  return grid;
}
