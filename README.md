# Commemorative Days Calendar Project

This project is a dynamic, timezone-safe web application that displays a calendar of commemorative days which occur on non-fixed dates (e.g., "the second Tuesday of October"). It provides a full user interface for navigating through months and years and includes a Node.js script to generate a standard iCal (`.ics`) file, allowing users to import these events directly into their own personal calendars.

This project was developed by a team of two, with a focus on creating a robust, maintainable, and professional-grade application.

**➡️ Live Demo Link:** https://karmikcalendar.netlify.app/

---

## ✨ Key Features

*   **Dynamic Calendar Display:** Renders a clean, grid-based calendar for any given month and year.
*   **Full Navigation:** Includes "Previous" and "Next" month buttons, as well as month and year dropdowns for easy navigation.
*   **Data-Driven Events:** Dynamically loads and displays events from an external `days.json` file, making the logic flexible and scalable.
*   **Timezone-Safe Calculations:** All date logic is performed exclusively in UTC, ensuring that commemorative days appear on the correct date for every user, regardless of their location.
*   **iCal File Generation:** A Node.js script (`generate-icals.mjs`) produces a standard `.ics` file containing all events from 2020 to 2030, ready for import into Google Calendar, Outlook, or Apple Calendar.
*   **Fully Accessible:** The user interface was built with accessibility as a priority, achieving a 100% Lighthouse accessibility score.
*   **Unit Tested:** Core logic is validated by a suite of unit tests, which proved crucial in identifying and fixing a major timezone bug.
*   **Shared & Modular Code:** The project follows modern development best practices by sharing core logic between the frontend and backend scripts, avoiding code duplication.

---

## 🚀 Technical Highlights: What Makes This Project Stand Out

1.  **Robust Timezone Handling:** The most significant technical achievement was re-architecting the date calculation logic to be fully UTC-compliant. This solved a critical bug where dates could be off by a day depending on the user's timezone, making the application reliable for a global audience.
2.  **Test-Driven Development in Practice:** The unit tests were not just for show; they were instrumental in discovering the critical timezone bug. This project serves as a real-world example of how a good testing strategy can ensure code quality and prevent major issues.
3.  **Clean, Modular Architecture:** The codebase is organized into distinct, single-responsibility modules (UI creation, grid logic, date utilities). This separation of concerns makes the project easy to understand, maintain, and scale.

---

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
*   **Backend/Scripting:** Node.js
*   **Testing:** Node.js built-in test runner (`node:test`)

---

## ⚙️ Getting Started

To run this project locally, you will need to have Node.js installed.

### 1. Running the Web Calendar

The web application uses ES Modules, which require a live server environment.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mikiyas-STP/Calendar-project.git
    cd Calendar-project
    ```
2.  **Install a simple HTTP server (if you don't have one):**
    ```bash
    npm install -g http-server
    ```
3.  **Start the server from the root of the project folder:**
    ```bash
    http-server
    ```
4.  Open your web browser and navigate to the local address provided (e.g., `http://127.0.0.1:8080`).

### 2. Generating the iCal File

The `.ics` file can be generated by running the Node.js script.

1.  **Navigate to the `icals-data` directory:**
    ```bash
    cd icals-data
    ```
2.  **Run the script using Node.js:**
    ```bash
    node generate-icals.mjs
    ```
3.  A file named `days.ics` will be created in this directory, containing all events from 2020-2030. You can then import this file into your preferred calendar application.

---

## 📁 Project Structure

```
/icals-data
├── days.json            # The source data for all commemorative days
└── generate-icals.mjs   # The Node.js script that generates the .ics file

/src
├── calendar.mjs         # Builds the HTML structure for the UI
├── common.mjs           # Contains grid logic and dropdown population functions
├── dateUtilities.mjs    # The core "brain" for UTC-safe date calculations
└── web.mjs              # The frontend application's main entry point

/test
└── commerative.test.mjs # Unit tests for the core date logic

index.html               # The main webpage for the calendar
README.md                # This file
```

---

## 👥 Authors

This project was a collaborative effort by:

*   **Karla** - Frontend/UI Lead
*   **Miki** - Backend/Core Logic Lead

```