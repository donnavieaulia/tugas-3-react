import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
      <p className="text-6xl font-black text-emerald-600">404</p>
      <h1 className="mt-4 text-xl font-bold text-slate-900">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        ← Kembali ke beranda
      </Link>
    </section>
  );
}

export default NotFoundPage;
