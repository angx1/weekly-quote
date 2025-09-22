import Image from "next/image";
import weeklyQuoteData from "../../public/data/weekly_quote.json";

export default function Home() {
  console.log("Weekly quote data:", weeklyQuoteData);
  console.log("Past quotes:", weeklyQuoteData.past_quotes);

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
        <div className="text-sm text-gray-500 dark:text-gray-500 mt-4 space-y-1">
          <p id="semana-cita-semanal">{weeklyQuoteData.date}</p>
          {weeklyQuoteData.video_url && (
            <a
              href={weeklyQuoteData.video_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              See in YouTube
            </a>
          )}
        </div>

        {weeklyQuoteData.past_quotes &&
          weeklyQuoteData.past_quotes.length > 0 && (
            <div className="mt-8 w-full max-w-2xl border-1 border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-600 underline underline-offset-4">
                Past Quotes
              </h3>
              <div className="space-y-3">
                {weeklyQuoteData.past_quotes.map((pastQuote, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      {pastQuote.quote}
                    </p>
                    {pastQuote.author && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        — {pastQuote.author}
                      </p>
                    )}
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 space-y-1">
                      <p>{pastQuote.date}</p>
                      {pastQuote.video_url && (
                        <a
                          href={pastQuote.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                        >
                          See in YouTube
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </main>
    </div>
  );
}
