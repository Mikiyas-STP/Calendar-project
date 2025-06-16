
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
