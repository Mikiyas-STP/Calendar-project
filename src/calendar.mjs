const calendarContainer = document.createElement ("div");
calendarContainer.id = "calendar-container";

const titleDiv = document.createElement("div");
titleDiv.id ="calendar-title";
titleDiv.textContent ="Commemorative Days Calendar";

const controlsDivs = document.createElement("div");
controlsDivs.id = "calendar-controls";

const tableDiv = document.createElement("div");
tableDiv.id = "calendar-table";


// ----- button previous button -------
const prevButton = document.createElement("button");
prevButton.id = "prev-button";
prevButton.textContent = "Previous";

// ----- button previous button -------
const nextButton = document.createElement("button")
nextButton.id = "next-button";
nextButton.textContent = "Next";

// ----- button previous button -------
const


calendarContainer.appendChild(titleDiv);
calendarContainer.appendChild(controlsDivs);
calendarContainer.appendChild(tableDiv);


//appended to the body the structure
document.body.appendChild(calendarContainer);