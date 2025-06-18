const dayIndexMap = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6
};

//function to translate rules like "second Tuesday of October" into a real date.
export function getDateForCommemorativeDay(dayData, year) {
    const monthIndex = new Date(`${dayData.monthName} 1, ${year}`).getMonth();
    const targetDayIndex = dayIndexMap[dayData.dayName]; // Correctly get the target day number (e.g., "Tuesday" -> 2)

    if (targetDayIndex === undefined) {
        return null; // The day name was invalid
    }

    const dates = [];
    const date = new Date(year, monthIndex, 1);

    while (date.getMonth() === monthIndex) {
        // Correctly compare the day number (0-6)
        if (date.getDay() === targetDayIndex) {
            dates.push(new Date(date));
        }
        date.setDate(date.getDate() + 1);
    }

    if (dayData.occurence === "last") {
        return dates[dates.length - 1];
    }

    const indexMap = {
        first: 0,
        second: 1,
        third: 2,
        fourth: 3
    };
    return dates[indexMap[dayData.occurence]];
}