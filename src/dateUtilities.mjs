const dayIndexMap = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6
};

//to translate like "second Tuesday of October" into a real date.
export function getDateForCommemorativeDay(dayData, year) {
    const monthIndex = new Date(`${dayData.monthName} 1, ${year}`).getMonth();
    const targetDayIndex = dayIndexMap[dayData.dayName]; //e.gTuesday->2
    if (targetDayIndex === undefined) {
        return null;
    }


    const dates = [];
    const date = new Date(Date.UTC(year, monthIndex, 1)); //create initial date
    //while month and if day index match store the day in dates array
    while (date.getUTCMonth() === monthIndex) {
        if (date.getUTCDay() === targetDayIndex) {
            dates.push(new Date(date));
        }
        date.setUTCDate(date.getUTCDate() + 1); //increment
    }
    if (dayData.occurence === "last") {
        return dates[dates.length - 1]; //grab the final element in the array 
    }
    const indexMap = {
        first: 0,
        second: 1,
        third: 2,
        fourth: 3
    };
    return dates[indexMap[dayData.occurence]];
}