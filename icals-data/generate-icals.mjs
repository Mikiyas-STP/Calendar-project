// This is a placeholder file which shows how you can access functions and data defined in other files. You can delete the contents of the file once you have understood how it works.
// It can be run with `node`.
import { getDateForCommemorativeDay } from "../src/dateutilities.mjs";
import daysData from "./days.json" with { type: "json" };
import fs from "node:fs";
import https from "node:https";
// Utility to fetch text from URL without async/await
function fetchText(url, callback) {
    let data = "";
    https.get(url, (res) => {
        res.on("data", (chunk) => data += chunk);
        res.on("end", () => callback(null, data));
    }).on("error", (err) => callback(err));
}
// Convert JS Date to ICS format: YYYYMMDD
function formatDateToICS(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
}
// Create a basic ICS file string
function createICS(name, description, date) {
    const formattedDate = formatDateToICS(date);
    return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTSTART;VALUE=DATE:${formattedDate}
DTEND;VALUE=DATE:${formattedDate}
SUMMARY:${name}
DESCRIPTION:${description}
END:VEVENT
END:VCALENDAR`;
}
// Start script
const year = new Date().getFullYear(); // You can change to fixed year if needed
let remaining = daysData.length;
console.log(`Generating .ics files for ${year}...`);
daysData.forEach((dayInfo) => {
    const date = getDateForCommemorativeDay(dayInfo, year);

    if (!date) {
        console.error(`Could not resolve date for ${dayInfo.name}`);
        return;
    }
    fetchText(dayInfo.descriptionURL, (err, description) => {
        if (err) {
            console.error(`Failed to fetch ${dayInfo.name} description:`, err.message);
            description = "No description available.";
        }
        const icsContent = createICS(dayInfo.name, description.trim(), date);
        const fileName = `icals-data/${dayInfo.name.replace(/\s+/g, "_")}.ics`;
        fs.writeFile(fileName, icsContent, (err) => {
            if (err) {
                console.error(`Failed to write ${fileName}:`, err.message);
            } else {
                console.log(`Created ${fileName}`);
            }
            if (--remaining === 0) {
                console.log("All .ics files generated.");
            }
        });
    });
});