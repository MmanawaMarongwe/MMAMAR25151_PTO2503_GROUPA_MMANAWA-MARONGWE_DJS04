import React, { createContext, useMemo, useState } from "react";

export const PodcastContext = createContext(null);

export function PodcastProvider({ children, initialPodcasts = [] }) {
  const [search, setSearch] = useState("");

  const podcasts = useMemo(() => {
    const safePodcasts = Array.isArray(initialPodcasts) ? initialPodcasts : [];
    const searchQuery = search.trim().toLowerCase();

    if (!searchQuery) return safePodcasts;

    return safePodcasts.filter((p) =>
      p.title.toLowerCase().includes(searchQuery)
    );
  }, [initialPodcasts, search]);

  const value = {
    search,
    setSearch,
    podcasts, // ✅ searched list
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
