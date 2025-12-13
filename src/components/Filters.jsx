import { useContext } from "react";
import { PodcastContext } from "../utils/PodcastContext";

export default function Filters() {
  const { search, setSearch, sortKey, setSortKey, sortOptions } =
    useContext(PodcastContext);

  return (
    <div className="filters">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search podcasts..."
        aria-label="Search podcasts by title"
      />

      <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
        {sortOptions.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
