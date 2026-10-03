Project Name:
Soccer Card Manager

Project Description:
Soccer Card Manager is a dynamic Angular web application designed to manage, display, and organize soccer player cards and database records. The application allows users to view player cards, add new player entries, and navigate through player database views using Angular Routing.

Technologies
- Angular
- TypeScript
- HTML
- CSS
- Node.js / npm

How to Run:
1. **Set up the Backend Server:**
   Before running the frontend, ensure the backend API server (`NodCharles`) is running. Follow the setup instructions in the [NodCharles Backend Repository](https://github.com/edenvidela-cyber/BULLFCManage-Backend) README to connect to MongoDB and start the server on port `5000`.

2. **Set up the Frontend Application:**
   - Clone or download this repository.
   - Open a terminal in the project directory.
   - Run `npm install` to install required dependencies.
   - Run `ng serve` or `npm start` for a dev server.
   - Navigate to `http://localhost:4200/` in your web browser.

Features:
- Player card list and showcase view
- Interactive forms to add new players and card entries
- Route-based navigation (`home`, `add-player`, `add-cards`, `cards`, `player-db`)
- Fallback route redirection to the home view
- Integration with the Express/MongoDB backend API

Author:
EdenVidela-Cyber