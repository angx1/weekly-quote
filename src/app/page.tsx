import Image from "next/image";
import weeklyQuoteData from "../../public/data/weekly_quote.json";

export default function Home() {
  return (
    <div className="--font-geist-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <blockquote
          className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 mb-6"
          id="cita-semanal"
        >
          {weeklyQuoteData.quote}
        </blockquote>
        {weeklyQuoteData.author ? (
          <cite
            className="text-lg text-gray-600 dark:text-gray-400"
            id="autor-cita-semanal"
          >
            — {weeklyQuoteData.author}
          </cite>
        ) : null}
        <p
          className="text-sm text-gray-500 dark:text-gray-500 mt-4"
          id="semana-cita-semanal"
        >
          Week {weeklyQuoteData.week}
        </p>
      </main>
    </div>
  );
}
