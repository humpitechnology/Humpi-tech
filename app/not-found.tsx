import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 py-20 text-center">
      <div>
        <div className="mx-auto grid size-28 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-5xl font-black text-white">404</div>
        <h1 className="mt-8 text-4xl font-black text-secondary">Page not found</h1>
        <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">The page may have moved, or the address may be incorrect. Return home or contact Humpi Technology for help.</p>
        <Link href="/" className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-bold text-white">Back to Home</Link>
      </div>
    </section>
  );
}
