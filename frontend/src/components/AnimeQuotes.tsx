import { useState } from "react";

export default function AnimeQuotes() {
  const [animeQuote, setAnimeQuote] = useState<string | null>(null);
  const handleAnime = () => {
    setAnimeQuote(
      "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you! - Son Goku"
    );
  };

  return (
    <>
      {!!animeQuote && <div className="quote-card">{animeQuote}</div>}
      <button onClick={handleAnime}>Anime Quotes</button>
    </>
  );
}
