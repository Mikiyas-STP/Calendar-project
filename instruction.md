# 📅 Project Instructions and Roles

## Overview

This project implements a dynamic calendar that displays commemorative days which occur annually but not on fixed dates (e.g., "second Tuesday of October"). The calendar supports month/year navigation and generates an iCal (`.ics`) file for importing into calendar apps like Google Calendar.

---

## 👥 Team Roles and Responsibilities

### Karla — Web/UI Lead

- Build and maintain the frontend calendar UI (`web.mjs`):
  - Render the calendar grid for any given month/year.
  - Implement previous/next buttons and month/year selectors.
  - Display commemorative days accurately from `days.json`.
  - Ensure accessibility (ARIA roles, semantic HTML, keyboard nav).
- Perform browser testing and address UI bugs.

### Miki — Backend/Node Lead

- Implement the `.ics` generator script (`generate-icals.mjs`) using shared logic.
- Maintain shared date logic in `common.mjs`.
- Write unit tests for logic functions.
- Set up CI/CD (e.g., GitHub Actions) for automatic deployment.
- Verify `.ics` files import correctly into Google Calendar.

---

## 🔁 Role Division by File

| Person | Files                                                 | Responsibilities                                      |
|--------|-------------------------------------------------------|-------------------------------------------------------|
| Karla  | `index.html`, `web.mjs`                               | UI rendering, DOM handling, navigation, accessibility |
| Miki   | `common.mjs`, `generate-icals.mjs`, `common.test.mjs` | Shared logic, backend generation, testing, deployment |

---

## 🚀 Workflow and Milestones

| Milestone               | Tasks (Karla)                           | Tasks (Miki)                                 | Notes                                |
|------------------------|-----------------------------------------|----------------------------------------------|--------------------------------------|
| Setup & Skeleton        | Project structure, render current month | Initialize `.ics` generator and shared logic | Use `common.mjs` for all logic       |
| Calendar Navigation     | Add prev/next buttons, dropdowns        | Begin `.ics` logic per event                 | UI must support all years/months     |
| Commemorative Days      | Load and show days from `days.json`     | Use shared logic to generate correct `.ics`  | Must support all JSON formats        |
| Testing & Accessibility | Test UI, add ARIA/labels                | Write unit tests for date logic              | Ensure 100% Lighthouse accessibility |
| Deployment & Review     | Final testing, UI polish                | Automate deployment, test `.ics` import      | Use GitHub Actions, Vercel, etc.     |

---

## 📁 Folder Structure

```

/.vscode
└── settings.json                 # (Optional) IDE settings

/icals-data
├── days.json                    # Source data for commemorative days
└── generate-icals.mjs           # Node script to generate `.ics` files

/src
├── calendar.mjs                 # Calendar rendering logic
├── common.mjs                   # Shared date calculation logic
├── dateutilities.mjs            # Helper functions for nth/last weekday
└── web.mjs                      # Frontend entry, event handling

/test
└── common.test.mjs              # Unit tests for date logic

index.html                       # Main webpage
README.md                        # Documentation
instruction.md                   # This file

```

---

## 🛠️ Development Notes

- Use **ES Modules** (`import`/`export`) consistently across JS files.
- Serve files over HTTP (e.g. `http-server`) to avoid CORS/module issues.
- Keep date logic DRY by centralizing in `common.mjs` (used by both frontend & Node).
- `.ics` must include individual events (no recurrence) for 2020–2030.
- Accessibility is **mandatory** – use Lighthouse to test.
- Use GitHub for version control, with PRs and feature branches.
- Sync often and review each other’s code for understanding.

---

## ✅ Testing

- **Unit tests** (Miki) in `/test/common.test.mjs` for:
  - Calculating “nth weekday of a month”
  - Finding the “last weekday” of a month
  - Parsing data from `days.json`

- **Manual UI testing** (Karla):
  - Rendering correct days
  - Navigation buttons
  - Commemorative day labels

---

## 🌐 Deployment

- **Deployment platform:** GitHub Pages, Vercel, or Netlify
- **CI/CD:** GitHub Actions automates deployment
- **Verification tasks:**
  - Karla: UI & accessibility test post-deployment
  - Miki: `.ics` import test via Google Calendar

---

## 📣 Communication Plan

- Sync daily or each session to share blockers/progress
- Use GitHub Issues or team chat to track tasks
- Code reviews before merge to ensure clarity and understanding

---

## 📚 References & Resources

- [Node.js `fs` module](https://nodejs.org/api/fs.html)
- [MDN: JavaScript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices/)
- [Google Calendar Importing Help](https://support.google.com/calendar/answer/37118)

---

## ✅ Summary of Role Division

### Karla — Frontend Developer

- Files: `index.html`, `web.mjs`
- Responsibilities:
  - Calendar grid, DOM manipulation
  - JSON parsing & display of commemorative days
  - Accessibility & manual UI testing

### Miki — Backend Developer

- Files: `generate-icals.mjs`, `common.mjs`, `common.test.mjs`
- Responsibilities:
  - Shared logic for commemorative date calculation
  - `.ics` generation for 2020–2030
  - Deployment & unit testing

---

## 🤝 Collaboration Plan

- Share logic via `common.mjs` (no duplicated calculation)
- Merge often, avoid conflicts