import { useState } from "react";
import { ProgrammingQuote } from "../api/api";

export default function ProgrammingQuotes() {
  const [programmingQuote, setProgrammingQuote] = useState<string | null>(null);
  const handleProgramming = async () => {
    ProgrammingQuote()
      .then((res) => {
        console.log(res);
        setProgrammingQuote(res.data.quote);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      {!!programmingQuote && (
        <div className="quote-card">{programmingQuote}</div>
      )}
      <button onClick={handleProgramming}>Programming Quotes</button>
    </>
  );
}
