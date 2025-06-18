import { getDateForCommemorativeDay } from "../src/dateUtilities.mjs";
import daysData from "./days.json" with { type: "json" };
import fs from "node:fs";

// This script is to generate a SINGLE file named 'days.ics' containing all events
// Convert JS Date to ICS format: YYYYMMDD
function formatDateToICS(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
}

// This function now creates a single VEVENT block as a string
function createVEventString(name, date) {
    const formattedDate = formatDateToICS(date);
    // Create a unique ID for the calendar event
    const uid = `${formattedDate}-${name.replace(/\s+/g, "")}@days-calendar.project`;
    // The DESCRIPTION field is not required for a group of 2, so it's omitted.
    return `BEGIN:VEVENT
DTSTART;VALUE=DATE:${formattedDate}
DTEND;VALUE=DATE:${formattedDate}
SUMMARY:${name}
UID:${uid}
END:VEVENT`;
}

const allEventStrings = [];
// Loop through the required year range
for (let year = 2020; year <= 2030; year++) {
    // For each year, calculate the date for each commemorative day
    daysData.forEach((dayInfo) => {
        const date = getDateForCommemorativeDay(dayInfo, year);

        if (date) {
            // If the date is valid, create the event string and add it to our list
            const eventString = createVEventString(dayInfo.name, date);
            allEventStrings.push(eventString);
        } else {
            console.warn(`Could not resolve date for ${dayInfo.name} in ${year}`);
        }
    });
}
// Join all the individual event strings together
const eventsContent = allEventStrings.join("\n");
// Wrap the events in the main VCALENDAR structure
const finalIcsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//DaysCalendar//EN
${eventsContent}
END:VCALENDAR`;
const outputFileName = "days.ics";
// Write the complete string to a single file
fs.writeFile(outputFileName, finalIcsContent, (err) => {
    if (err) {
        console.error(`Failed to write ${outputFileName}:`, err.message);
    } else {
        console.log(`Successfully created ${outputFileName} containing ${allEventStrings.length} total events.`);
    }
});