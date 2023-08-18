import { useState } from "react";

export default function ProgrammingQuotes() {
  const [programmingQuote, setProgrammingQuote] = useState<string | null>(null);
  const handleProgramming = () => {
    setProgrammingQuote(
      "The best way to predict the future is to invent it. - Alan Kay"
    );
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
