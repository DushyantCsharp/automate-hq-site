// app/not-found.js
export default function NotFound() {
  return (
    <main className="container-pad py-24">
      <div className="card p-8">
        <h1 className="h1">Page not found</h1>
        <p className="mt-3 text-white/70">Let’s get you back home.</p>
        <a href="/" className="mt-6 inline-block rounded-xl bg-brand-600 hover:bg-brand-500 px-5 py-3">Go home</a>
      </div>
    </main>
  );
}
