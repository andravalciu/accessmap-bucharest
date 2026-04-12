import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
            Accessibility-first city exploration
          </span>

          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            Find more accessible places in Bucharest
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AccessMap Bucharest helps users explore locations based on
            accessibility features like ramps, stairs, elevators, and accessible
            facilities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/map"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm transition hover:bg-emerald-700"
            >
              Explore Map
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-slate-700 font-semibold transition hover:bg-slate-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Accessibility filters
            </h2>
            <p className="mt-3 text-slate-600">
              Discover locations based on ramps, elevators, stairs, and other
              accessibility-related details.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Interactive city map
            </h2>
            <p className="mt-3 text-slate-600">
              Explore Bucharest through a visual map interface designed to make
              accessibility information easier to scan.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Community-focused idea
            </h2>
            <p className="mt-3 text-slate-600">
              Built as a concept for helping people make more informed decisions
              before visiting a place.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
