import { useParams, Link } from "react-router-dom";
import formatRupiah from "../utils/formatRupiah";

function ProductDetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Kalau produk dengan ID itu tidak ada
  if (!product) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-5xl">🔍</p>
        <h1 className="mt-4 text-xl font-bold text-slate-900">
          Produk tidak ditemukan
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Produk dengan ID {id} tidak ada di daftar.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          ← Kembali ke daftar
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Link
        to="/"
        className="text-sm font-medium text-emerald-600 hover:underline"
      >
        ← Kembali ke daftar
      </Link>

      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-8">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          ID: {product.id}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          {product.name}
        </h1>
        <p className="mt-2 text-2xl font-semibold text-emerald-600">
          {formatRupiah(product.price)}
        </p>
      </div>
    </section>
  );
}

export default ProductDetailPage;
