import React, { createContext, useMemo, useState } from "react";

export const PodcastContext = createContext(null);

export const SORT_OPTIONS = [
  { key: "date-desc", label: "Newest" },
  { key: "date-asc", label: "Oldest" },
  { key: "title-asc", label: "Title A–Z" },
  { key: "title-desc", label: "Title Z–A" },
];

export function PodcastProvider({ children, initialPodcasts = [] }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("default");
  const [genre, setGenre] = useState("all");

  const podcasts = useMemo(() => {
    const safePodcasts = Array.isArray(initialPodcasts) ? initialPodcasts : [];

    const searchQuery = search.trim().toLowerCase();

    // search
    const searchedPodcasts = searchQuery
      ? safePodcasts.filter((podcast) =>
          podcast.title.toLowerCase().includes(searchQuery)
        )
      : safePodcasts;

    //  Genre filter
    const filteredByGenre =
      genre === "all"
        ? searchedPodcasts
        : searchedPodcasts.filter((podcast) =>
            podcast.genres.includes(Number(genre))
          );

    // sort (applied to search results)
    if (sortKey === "default") return filteredByGenre;

    return [...filteredByGenre].sort((a, b) => {
      switch (sortKey) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "date-asc":
          return new Date(a.updated) - new Date(b.updated);
        case "date-desc":
        default:
          return new Date(b.updated) - new Date(a.updated);
      }
    });
  }, [initialPodcasts, search, genre, sortKey]);

  const value = {
    search,
    setSearch,
    sortKey,
    setSortKey,
    sortOptions: SORT_OPTIONS,
    podcasts,
    genre,
    setGenre,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
