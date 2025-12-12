import { useState, useEffect } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import PodcastGrid from "./components/PodcastGrid";

import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ USER STORY: search state
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadPodcasts() {
      try {
        setLoading(true);
        const podcastsArray = await fetchPodcasts(
          setPodcasts,
          setError,
          setLoading
        );

        // If fetchPodcasts returns an array, set it. If it already sets state inside, this won’t break anything.
        if (Array.isArray(podcastsArray)) setPodcasts(podcastsArray);
      } catch (err) {
        console.error(err);
        setError("Failed to load podcasts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  // ✅ USER STORY: filter podcasts by title (updates as you type)
  const visiblePodcasts = podcasts.filter((p) =>
    p.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <Header />

      <main>
        {loading && <p>Loading Podcasts</p>}

        {error && <p>Error occurred while fetching podcasts: {error}</p>}

        {!loading && !error && (
          <>
            {/* ✅ Search UI (dynamic typing) */}
            <div className="search-bar">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search podcasts by title..."
                aria-label="Search podcasts by title"
              />
            </div>

            <PodcastGrid podcasts={visiblePodcasts} />
          </>
        )}
      </main>
    </>
  );
}
