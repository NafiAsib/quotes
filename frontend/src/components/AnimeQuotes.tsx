import { useState } from "react";
import { AnimeQuote } from "../api/api";

export default function AnimeQuotes() {
  const [animeQuote, setAnimeQuote] = useState<string | null>(null);
  const handleAnime = () => {
    AnimeQuote()
      .then((res) => {
        setAnimeQuote(res.data.quote);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {!!animeQuote && <div className="quote-card">{animeQuote}</div>}
      <button onClick={handleAnime}>Anime Quotes</button>
    </>
  );
}
