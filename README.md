## 🤖 How AI Helped Build This Project

During the development of this Smart Meeting Planner, various AI tools were used to accelerate progress, generate components, and debug issues efficiently. Below is a detailed account of the AI tools, prompts used, and their effectiveness.

### 🧠 AI Tools Used

- **ChatGPT (GPT-4)**
- **V0 by Vercel**
- **Claude (briefly)**

---

### 💬 ChatGPT Prompts & Contributions

| Prompt                                                                                     | Outcome                                                                 |
|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| FastAPI installation and setup guide                                                       | ✅ Successfully guided through backend setup                            |
| Create all required API routes from a provided PDF                                         | ✅ Generated accurate and complete routing logic                        |
| Utility to convert time to minutes (e.g., "02:00" → 120)                                   | ✅ Created a precise utility function and integrated it cleanly         |
| Debug: Why was the frontend appending input every time on submit?                         | ✅ Identified the state management issue and provided a working fix     |

---

### 🖼️ V0 Prompts & Contributions

| Prompt                                                                                     | Outcome                                                                 |
|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Upload PDF and generate UI                                                                | ✅ Provided a clean and functional UI layout using Tailwind + Shadcn    |
| Style and structure components                                                            | ✅ Helped in modularizing the UI and maintaining a consistent design    |
| Integrate generated UI with backend logic                                                 | ✅ Adapted frontend to connect with FastAPI routes                      |

---

### 🤏 Claude

Used briefly to help with:
- High-level architecture discussions
- Quick code clarifications

---

### ✅ Summary

AI tools—especially ChatGPT and V0—were invaluable in the development process, helping with code generation, bug fixing, and UI building. Most tasks guided by AI were implemented successfully with minor adjustments to suit the specific project context.




## 🚀 Future Improvements

If given additional time, the following improvements and features are planned to enhance the Smart Meeting Planner:

### 🗓 Google Calendar Integration
- Integrate with **Google Calendar API** to sync meetings and busy slots automatically.
- Each employee will have their own calendar updated in real-time.
- This will streamline scheduling and reduce manual updates.

### 🎨 Enhanced UI with Employee-Specific Views
- Redesign the UI to display each employee's **busy slots in separate sections**.
- Include **visually appealing charts or timelines** for better clarity.
- Improves the user experience and makes availability easier to interpret.

### 👥 Flexible Attendee Selection for Booking
- Add a feature to **select specific employees** when booking a meeting.
- Suggestions and bookings will be based only on the selected attendees' availability.
- Enables partial team or one-on-one meeting planning.

### ⚙️ Code Optimization and Database Integration
- Refactor existing code for **better performance and structure**.
- Replace in-memory storage with a **persistent database** like SQLite or PostgreSQL.
- This will allow for scalable data handling and long-term persistence.


