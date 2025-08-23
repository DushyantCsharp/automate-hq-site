// app/error.js
"use client";
export default function Error({ error, reset }) {
  return (
    <main className="container-pad py-24">
      <div className="card p-8">
        <h1 className="h1">Something went wrong</h1>
        <p className="mt-3 text-white/70">{String(error?.message || "Unknown error")}</p>
        <button onClick={() => reset()} className="mt-6 rounded-xl bg-brand-600 hover:bg-brand-500 px-5 py-3">
          Try again
        </button>
      </div>
    </main>
  );
}
