//import fn to be tested
import { getDateForCommemorativeDay } from "../src/dateUtilities.mjs";
//import necessary tools to run our test
import assert from "node:assert";
import test from "node:test";

//Test1: Ada Lovelace Day in 2024 to checks the "second Tuesday" logic.
test("Calculates Ada Lovelace Day (2nd Tuesday of October) for 2024", () => {
    const dayData = { monthName: "October", dayName: "Tuesday", occurence: "second" };
    const year = 2024;
    const expectedDate = new Date(Date.UTC(2024, 9, 8)); // 9 = October ,Created the expected date in UTC.
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0); //Normalize the actual date to midnight UTC.
    
    assert.deepStrictEqual(actualDate, expectedDate, "Failed for Ada Lovelace Day 2024. Expected October 8th.");
});
//Test2: World Lemur Day in 2025 to checks the "last Friday" logic.
test("Calculates World Lemur Day (last Friday of October) for 2025", () => {
    const dayData = { monthName: "October", dayName: "Friday", occurence: "last" };
    const year = 2025;
    const expectedDate = new Date(Date.UTC(2025, 9, 31)); // 9 = October
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    assert.deepStrictEqual(actualDate, expectedDate, "Failed for World Lemur Day 2025. Expected October 31st.");
});
//Test3: International Red Panda Day in 2022 to checks the "third Saturday" logic.
test("Calculates International Red Panda Day (3rd Saturday of September) for 2022", () => {
    const dayData = { monthName: "September", dayName: "Saturday", occurence: "third" };
    const year = 2022;
    const expectedDate = new Date(Date.UTC(2022, 8, 17)); // 8 = September
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    assert.deepStrictEqual(actualDate, expectedDate, "Failed for Red Panda Day 2022. Expected September 17th.");
});
//Test4: A month where the first day matches the target day{a good edge case to test.}
test("Calculates first Saturday of September 2024", () => {
    const dayData = { monthName: "September", dayName: "Saturday", occurence: "first" };
    const year = 2024;
    const expectedDate = new Date(Date.UTC(2024, 8, 7)); // 8 = September
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    assert.deepStrictEqual(actualDate, expectedDate, "Failed for first Saturday of Sept 2024. Expected September 7th.");
});