# 📅 Project Instructions and Final Report
## Overview
Our project is a dynamic, timezone-safe calendar application that displays annually recurring commemorative days. These events are based on flexible rules, such as "the second Tuesday of October," rather than fixed dates. The application provides full month and year navigation and can generate a standard iCal (`.ics`) file, allowing users to import these special events directly into their personal calendars like Google Calendar.
---
## 👥 Team Roles and Final Responsibilities
### Karla — Frontend/UI Lead
-   **Responsibilities:** Karla spearheaded the frontend development, focusing on everything the user sees and interacts with in the browser. She skillfully built the calendar's HTML structure from the ground up in `calendar.mjs` and managed all dynamic user events—like button clicks and dropdown changes—within `web.mjs`.
-   **Primary Files:** `index.html`, `src/web.mjs`, `src/calendar.mjs`, `common.mjs`

### Miki — Backend/Core Logic Lead
-   **Responsibilities:** Miki led the development of the core logic and backend features that power the application. He engineered the critical date-calculation engine in `dateUtilities.mjs`, wrote the Node.js script to generate the iCal file, and developed a suite of unit tests to guarantee the logic's correctness. Critically, he also identified and resolved a major timezone bug, ensuring the application's reliability.
-   **Primary Files:** `icals-data/generate-icals.mjs`, `src/dateUtilities.mjs`, `src/common.mjs`, `test/commerative.test.mjs`

---

## 🔁 Final Role Division by File

| Person | Files                                                              | Responsibilities                                                       |
|:-------|:-------------------------------------------------------------------|:-----------------------------------------------------------------------|
| Karla  | `index.html`, `src/web.mjs`, `src/calendar.mjs`, `common.mjs`            | UI Rendering, DOM Creation, Event Handling (Clicks/Changes), Accessibility. |
| Miki   | `icals-data/generate-icals.mjs`, `src/dateUtilities.mjs`, `src/common.mjs`, `test/commerative.test.mjs` | Core Date Calculation (UTC-Safe), iCal Generation, Unit Testing, Grid Logic. |

---

## 🚀 Key Technical Decisions & Achievements

This section highlights the most important technical accomplishments of our project.

1.  **Achieving Timezone Safety with UTC:** A critical challenge we overcame was ensuring date accuracy across different timezones. The initial implementation used the server's local time, which led to incorrect dates for international users. **Miki** successfully re-architected the `dateUtilities.mjs` file to perform all calculations exclusively in UTC, making the application robust and accurate for a global audience.

2.  **Leveraging Tests to Discover a Critical Bug:** The discovery of the timezone issue is a testament to our robust testing strategy. The unit tests written by **Miki** immediately failed when run in a standard UTC environment, which allowed us to pinpoint and fix the bug before release. This demonstrates the value of writing tests to ensure code quality.

3.  **Prioritizing Modular and Maintainable Code:** Following the initial build, both team members dedicated time to refactoring the code for better clarity and maintainability. **Karla** skillfully broke down the large `createCalendarLayout` function into smaller, more focused helper functions. In parallel, **Miki** improved the efficiency and readability of the main application logic.

---

## 📁 Final Folder Structure

```
/icals-data
├── days.json
└── generate-icals.mjs   # (Miki) Node script to generate .ics files

/src
├── calendar.mjs         # (Karla +Miki(code review)) Builds the HTML structure for the UI
├── common.mjs           # (Miki + Karla) Contains grid logic and dropdown population
├── dateUtilities.mjs    # (Miki) The core "brain" for UTC date calculation
└── web.mjs              # (Karla + Miki(code review)) Frontend entry point, event handling

/test
└── commerative.test.mjs # (Miki) Unit tests for the date logic

index.html               # (Karla) Main webpage entry point
README.md
instruction.md           # This file
```

---

## ✅ Testing Strategy

-   **Unit Testing (Miki):** A comprehensive test suite was implemented in `test/commerative.test.mjs`. These tests validate the core `getDateForCommemorativeDay` function against known UTC dates. This strategy proved invaluable, as it was directly responsible for identifying and confirming the fix for the critical timezone bug.

-   **Manual UI Testing (Karla):** Karla conducted continuous manual testing on the UI to guarantee a seamless and accessible user experience. Her checks confirmed that the calendar grid renders correctly, all navigation features work as expected, commemorative days appear on their proper UTC-calculated dates, and the application achieves a 100% Lighthouse accessibility score.

---

## 🌐 Deployment

-   **Platform:** The project is configured for deployment on modern hosting platforms like GitHub Pages and Netlify.
-   **Verification:**
    -   **Karla** is responsible for performing a final UI and accessibility audit on the live, deployed site.
    -   **Miki** is responsible for generating the final `days.ics` file and verifying that it imports successfully into Google Calendar.

---

## 📸 Demo Preview
https://karmikcalendar.netlify.app/


## 👩‍💻👨🏼‍💻 Collaborators

Built by

[Mikiyas](https://github.com/Mikiyas-STP) 

[Karla Grajales](https://github.com/Grajales-K)

---
