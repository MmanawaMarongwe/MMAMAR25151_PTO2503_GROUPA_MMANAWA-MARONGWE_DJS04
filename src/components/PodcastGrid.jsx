import PodcastCard from "./PodcastCard";
import { dateFormat } from "../utils/dateFormat.js";
import { genreList } from "../utils/genreList.js";
import { genres } from "../data.js";

export default function PodcastGrid({ podcasts = [] }) {
  console.log("PodcastGrid podcasts:", podcasts);
  const podcastElements = podcasts.map((podcast) => {
    return (
      <PodcastCard
        key={podcast.id}
        title={podcast.title}
        image={podcast.image}
        seasons={podcast.seasons}
        genres={genreList(podcast.genres, genres)}
        updated={dateFormat(podcast.updated)}
      />
    );
  });

  return (
    <>
      <section className="podcast-grid">{podcastElements}</section>
    </>
  );
}
