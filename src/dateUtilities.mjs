//function to translate rules like "second Tuesday of October" into a real date.
import {dayNames } from "./calendar.mjs" 

export function getDateForCommemorativeDay(dayData, year) {
    const monthIndex = new Date(`${dayData.monthName} 1, ${year}`).getMonth();
    dayNames.indexOf(dayData.dayName);
    const dates = [];
    const date = new Date(year, monthIndex, 1);
    while (date.getMonth() === monthIndex) {
        if (date.getDay() === dayNames) {
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