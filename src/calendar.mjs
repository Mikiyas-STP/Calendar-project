const calendarContainer = document.createElement ("div");
calendarContainer.id = "calendar-container";

const titleDiv = document.createElement("div");
titleDiv.id ="calendar-title";
titleDiv.textContent ="Commemorative Days Calendar";

const controlsDivs = document.createElement("div");
controlsDivs.id = "calendar-controls";

const tableDiv = document.createElement("div");
tableDiv.id = "calendar-table";

calendarContainer.appendChild(titleDiv);
calendarContainer.appendChild(controlsDivs);
calendarContainer.appendChild(tableDiv);


//appended to the body the structure
document.body.appendChild(calendarContainer);