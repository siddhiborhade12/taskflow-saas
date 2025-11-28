export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
        Organize Work, Boost Productivity
      </h1>

      <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8">
        TaskFlow helps individuals and teams stay focused, track progress, and get work done faster — all in one place.
      </p>

      <a href="#pricing">
        <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg hover:shadow-xl">
          Get Started — It’s Free
        </button>
      </a>
    </section>
  );
}
