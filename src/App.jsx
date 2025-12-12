import { useState, useEffect } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import PodcastGrid from "./components/PodcastGrid";
import { PodcastProvider } from "./utils/PodcastContext";
import Header from "./components/Header";
import Filters from "./components/Filters";
import "./App.css";

export default function App() {
  const [podcasts, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        setLoading(true);
        const podcastsArray = await fetchPodcasts(
          setPodcast,
          setError,
          setLoading
        );
      } catch (err) {
        console.error(err);
        setError("Failed to load podcasts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  return (
    <PodcastProvider initialPodcasts={podcasts}>
      <Header />
      <Filters />
      <main>
        {loading && <p>Loading Podcasts</p>}

        {error && <p>Error occurred while fetching podcasts: {error}</p>}

        {!loading && !error && <PodcastGrid podcasts={podcasts} />}
      </main>
    </PodcastProvider>
  );
}
