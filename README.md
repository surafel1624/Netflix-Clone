# 🎬 Netflix Clone (Vite + React)

A modern and fast Netflix clone built using **React.js** and bootstrapped with **Vite** for blazing-fast development and optimized production builds. This application replicates the core frontend experience of Netflix, integrating a dynamic movie database API to stream real-time trending, top-rated, and genre-specific media content.

---

## 🚀 Key Features

* **Dynamic Movie Feed:** Fetches real-time movie and TV show data (Trending, Top Rated, Action, Comedy, Horror, Documentaries, etc.) using the **TMDB API**.
* **Immersive Hero Banner:** Dynamically showcases a featured trending movie or show on page refresh with an auto-truncating description.
* **Interactive Trailers:** Click on any movie poster to instantly fetch and play its official YouTube trailer seamlessly inside the app (powered by `movie-trailer` and `react-youtube`).
* **Optimized Build Pipeline:** Powered by **Vite** for near-instant Hot Module Replacement (HMR) and lightweight production bundles.

---

## 🛠️ Architecture & Tech Stack

* **Frontend Framework:** React.js (Functional Components & Hooks)
* **Build Tool:** Vite
* **Data Fetching & State:** Axios (with custom instances and interceptors for API calls)
* **Styling:** Custom CSS Modules / Vanilla CSS (with Netflix-accurate dark UI aesthetics)
* **Media Processing:** `react-youtube` and `movie-trailer` for dynamic video injection
* **Icons:** React Icons / Material-UI Icons

---

## 🔧 Installation & Setup

Follow these steps to get the project running locally on your machine.

### Prerequisites
Ensure you have **Node.js (v16 or higher)** and **npm** installed. You will also need a free API key from [The Movie Database (TMDB)](https://www.themoviedb.org/).

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/netflix-clone.git](https://github.com/your-username/netflix-clone.git)
cd netflix-clone