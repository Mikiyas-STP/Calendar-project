# Project Instructions and Roles

## Overview

This project implements a dynamic calendar that displays commemorative days which occur annually but not on fixed dates (e.g., "second Tuesday of October"). The calendar supports navigation between months and years, and can generate an iCal (.ics) file for import into calendar applications.

---

## Team Roles and Responsibilities

### KARLA — Web/UI Lead

- Build and maintain the calendar user interface (`web.mjs`):
  - Render the calendar grid for any month/year.
  - Implement previous/next month buttons and month/year selectors.
  - Display commemorative days correctly on the calendar.
  - Ensure the UI is accessible (ARIA roles, keyboard navigation).
- Perform browser testing and fix UI bugs.

### MIKI — Backend/Node Lead

- Implement the iCal generation script (`generate-icals.mjs`) using shared logic.
- Develop and maintain shared date calculation functions in `common.mjs`.
- Write unit tests for key logic functions.
- Set up deployment automation (GitHub Actions or similar).
- Verify `.ics` file imports correctly into Google Calendar.

---

## Role Division by File

| Person | Files                              | Responsibilities                                                   |
|--------|----------------------------------|-------------------------------------------------------------------|
| Karla  | `index.html`, `web.mjs`           | Frontend UI, DOM calendar rendering, navigation, accessibility.  |
| Miki   | `common.mjs`, `generate-icals.mjs` | Shared date logic, iCal generation, backend scripts, testing.     |

---

## Workflow and Milestones

| Milestone           | Tasks (KARLA)                          | Tasks (MIKI)                          | Notes                          |
|---------------------|------------------------------------------|------------------------------------------|--------------------------------|
| Setup & skeleton    | Set up repo and folder structure. Render current month calendar. | Setup `generate-icals.mjs` skeleton. Setup shared logic file. | Share common date logic in `common.mjs`. |
| Calendar navigation | Add prev/next buttons and selectors.     | Begin `.ics` event generation code.      | Ensure navigation works for all months/years. |
| Commemorative days  | Show days from JSON on calendar.          | Complete `.ics` with all event dates.    | Use shared logic for date calculations. |
| Testing & accessibility | Enhance UI accessibility. Manual UI tests. | Write and run unit tests for date logic. | Achieve Lighthouse accessibility 100%. |
| Deployment & review | Test deployed site and fix UI issues.    | Configure automatic deployment.           | Confirm `.ics` imports into Google Calendar. |

---

## Folder Structure
## Current Folder Structure and Notes


/icals-data
├─ days.json # Commemorative days data file
└─ generate-icals.mjs # Node script for generating iCal (.ics) file

/tests
└─ common.mjs # Shared logic functions and possibly tests

/common.mjs # Shared date calculation logic used by both backend and frontend
/index.html # Entry point for the web app
/instruction.md # Project instructions and role division
/README.md # Project documentation
/web.mjs # Frontend calendar UI script

---

## Development Notes

- Use ES Modules (`import`/`export`) consistently across all JS files.
- Serve the website locally with an HTTP server (e.g., `http-server` npm package) to allow module loading.
- Keep date calculation logic DRY by centralizing it in `common.mjs` for both frontend and backend.
- Ensure the `.ics` file contains individual events (no recurrence rules) for years 2020-2030 inclusive.
- Accessibility is mandatory; test with Lighthouse or similar tools to ensure 100% score.
- Use GitHub for version control; make feature branches and PRs for changes.
- Collaborate regularly and review each other’s code.

---

## Testing

- Miki writes unit tests for date calculation functions in `/tests/common.test.js`.
- Tests cover:
  - Calculating the correct date for "nth weekday of month".
  - Handling "last weekday of month" cases.
  - Proper parsing of commemorative days from JSON.
- UI is manually tested for correct rendering of days and buttons.

---

## Deployment

- Configure automatic deployment via GitHub Actions (MIKI).
- Deploy to a platform such as Netlify, Vercel, or GitHub Pages.
- After deployment, Karla verifies the site UI and accessibility.
- Test `.ics` import by importing into Google Calendar as described in the project spec.

---

## Communication

- Sync daily or every session to discuss progress and blockers.
- Use GitHub Issues or a shared chat for task coordination.
- Code reviews before merging to main branch.

---

## Additional Resources

- [Node.js `fs` module](https://nodejs.org/api/fs.html) (for `.ics` generation)
- [MDN Docs: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
- [Google Calendar Import Guide](https://support.google.com/calendar/answer/37118)

---





## Summary Of Role Division by File

### Person 1: Frontend Developer
- Responsible for the **web user interface**.
- Files:
  - `index.html`
  - `web.mjs`
- Tasks:
  - Implement calendar display using DOM manipulation.
  - Load and display commemorative days from `days.json`.
  - Implement navigation buttons and month/year selector.
  - Write unit tests related to calendar UI and date calculation.
  - Ensure accessibility standards are met.

### Person 2: Backend Developer
- Responsible for the **Node.js script and shared logic**.
- Files:
  - `generate-icals.mjs`
  - `common.mjs` (shared date calculation logic)
- Tasks:
  - Implement date calculation functions for commemorative days.
  - Generate `days.ics` iCal file with events for 2020-2030.
  - Share date calculation logic with frontend.
  - Set up GitHub repository and continuous deployment.
  - Write unit tests for date calculation and iCal generation.

## Collaboration Plan

- Use `common.mjs` to share all date calculation logic between frontend and backend.
- Regularly sync code to GitHub to avoid merge conflicts.
- Review each other's code and ensure understanding of every line.
- Test the website in multiple months and years, verify iCal import in Google Calendar.
- Maintain clear communication on progress and blockers.