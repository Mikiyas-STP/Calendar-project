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
    //Create the initial date in UTC to avoid timezone errors.
    const date = new Date(Date.UTC(year, monthIndex, 1));

    //Use UTC functions for the loop to make it timezone-safe.
    while (date.getUTCMonth() === monthIndex) {
        //Use getUTCDay() to check the day in UTC.
        if (date.getUTCDay() === targetDayIndex) {
            dates.push(new Date(date));
        }
        //Use setUTCDate() and getUTCDate() to increment the day in UTC.
        date.setUTCDate(date.getUTCDate() + 1);
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