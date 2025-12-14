# 🎧 React Podcast Explorer

## 🚀 Overview

This React podcast explorer app is a **podcast browsing application** that allows users to **search**, **sort**, **filter by genre**, and **paginate** through a list of podcast shows. The app fetches podcast data from an external API and updates the displayed results dynamically based on user interaction.

The application is designed to maintain a **consistent and responsive experience**, ensuring that all user selections remain active while navigating between pages.

## ✨ Features

- **Live Search**: Search podcasts by typing any part of the podcast title. Results update instantly.
- **Sorting Options**: Sort podcasts by newest, oldest, title A–Z, or title Z–A.
- **Genre Filtering**: Filter podcasts by selecting a genre from a dropdown.
- **Pagination**: Browse podcasts in pages of 8 items for improved readability and performance.
- **Synchronized UI Controls**: Search, sort, filter, and pagination work together seamlessly.
- **Loading & Error States**: Clear feedback is shown while data is loading or when an error occurs.
- **Error Boundary Handling**: Prevents blank screens by displaying a fallback message if a component crashes.

## 🛠️ Tech Stack

- **React** (functional components & hooks)
- **JavaScript (ES6+)**
- **Fetch API**
- **React Context API** (state management)
- **CSS3** (responsive styling)

## 📖 How to Use

1. Start the application locally or access the live demo (if available).
2. Use the **search input** to find podcasts by title.
3. Select a **genre** to filter podcasts by category.
4. Choose a **sorting option** to reorder the results.
5. Navigate between pages using the **pagination controls**.
6. Active filters and sorting remain applied while moving between pages.

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd DJS04
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## 🧪 Code Quality

- Clean and modular component structure.
- Centralised state management using React Context.
- Major components and utilities documented with **JSDoc comments**.
- Consistent formatting across JavaScript, JSX, HTML, and CSS files.

## 🎯 Future Improvements

- Persist user selections across page refreshes using localStorage.
- Add advanced filtering options (e.g. multiple genres).
- Improve accessibility and keyboard navigation support.
