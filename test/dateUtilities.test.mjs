import { getDateForCommemorativeDay } from "../src/dateUtilities.mjs";

//Test1: Ada Lovelace Day in 2024 -> checks the "second Tuesday" logic.
test("Calculates Ada Lovelace Day (2nd Tuesday of October) for 2024", () => {
    const dayData = { monthName: "October", dayName: "Tuesday", occurence: "second" };
    const year = 2024;
    const expectedDate = new Date(Date.UTC(2024, 9, 8)); // 9 = October
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    expect(actualDate).toEqual(expectedDate);
});

//Test2: World Lemur Day in 2025 -> checks the last Friday logic.
test("Calculates World Lemur Day (last Friday of October) for 2025", () => {
    const dayData = { monthName: "October", dayName: "Friday", occurence: "last" };
    const year = 2025;
    const expectedDate = new Date(Date.UTC(2025, 9, 31));
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0); //Normalize the actual date to midnight UTC.

    expect(actualDate).toEqual(expectedDate);
});

//Test3: International Red Panda Day in 2022 -> checks the third Saturday logic.
test("Calculates International Red Panda Day (3rd Saturday of September) for 2022", () => {
    const dayData = { monthName: "September", dayName: "Saturday", occurence: "third" };
    const year = 2022;
    const expectedDate = new Date(Date.UTC(2022, 8, 17)); //8 = September
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    expect(actualDate).toEqual(expectedDate);
});

//Test4: A month where the first day matches the target day/edge case
test("Calculates first Saturday of September 2024", () => {
    const dayData = { monthName: "September", dayName: "Saturday", occurence: "first" };
    const year = 2024;
    const expectedDate = new Date(Date.UTC(2024, 8, 7));
    const actualDate = getDateForCommemorativeDay(dayData, year);
    actualDate.setUTCHours(0, 0, 0, 0);

    expect(actualDate).toEqual(expectedDate);
});