//a script to generate 'days.ics' containing all events
import { getDateForCommemorativeDay } from "../src/dateUtilities.mjs";
import daysData from "./days.json" with { type: "json" };
import fs from "node:fs";

//Convert JS Date to ICS format: YYYYMMDD
function formatDateToICS(date) {
    const yyyy = date.getUTCFullYear();
    const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(date.getUTCDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
}

//creating a single event block as a string
function createVEventString(name, date) {
    const formattedDate = formatDateToICS(date);
    const uid = `${formattedDate}-${name.replace(/\s+/g, "")}@days-calendar.project`;   // a unique ID for the event
    return `BEGIN:VEVENT
DTSTART;VALUE=DATE:${formattedDate}
DTEND;VALUE=DATE:${formattedDate}
SUMMARY:${name}
UID:${uid}
END:VEVENT`;
}

const allEventStrings = [];

for (let year = 2020; year <= 2030; year++) {
    //for each year calculate the date for each commemorative day
    daysData.forEach((dayInfo) => {
        const date = getDateForCommemorativeDay(dayInfo, year);

        // If the date is valid, create the event string and add it to our list
        if (date) {
            const eventString = createVEventString(dayInfo.name, date);
            allEventStrings.push(eventString);
        } else {
            console.warn(`Could not resolve date for ${dayInfo.name} in ${year}`);
        }
    });
}

const eventsContent = allEventStrings.join("\n");
// Wrap the events in main VCALENDAR structure
const finalIcsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//DaysCalendar//EN
${eventsContent}
END:VCALENDAR`;
const outputFileName = "days.ics";
fs.writeFile(outputFileName, finalIcsContent, (err) => {
    if (err) {
        console.error(`Failed to write ${outputFileName}:`, err.message);
    } else {
        console.log(`Successfully created ${outputFileName} containing ${allEventStrings.length} total events.`);
    }
});