import { useContext } from "react";
import { PodcastContext } from "../utils/PodcastContext";

export default function Filters() {
  const { search, setSearch } = useContext(PodcastContext);

  return (
    <div className="filters">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search podcasts..."
        aria-label="Search podcasts by title"
      />
    </div>
  );
}
