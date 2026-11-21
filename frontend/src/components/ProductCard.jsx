import { Link } from "react-router-dom";
import formatRupiah from "../utils/formatRupiah";

function ProductCard({ product, viewMode, onEdit, onDelete }) {
  const isList = viewMode === "list";

  return (
    <article
      className={`rounded-xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-sm ${
        isList ? "flex items-center justify-between gap-4" : ""
      }`}
    >
      {/* Klik kartu -> buka halaman detail */}
      <Link
        to={`/products/${product.id}`}
        className={isList ? "min-w-0 flex-1" : "block"}
      >
        <span className="text-xs font-medium text-slate-400">
          ID: {product.id}
        </span>
        <h3 className="truncate text-lg font-semibold text-slate-900 hover:text-emerald-600">
          {product.name}
        </h3>
        <p className="font-medium text-emerald-600">
          {formatRupiah(product.price)}
        </p>
      </Link>

      <div className={`flex gap-2 ${isList ? "" : "mt-4"}`}>
        <button
          onClick={() => onEdit(product)}
          className="rounded-lg border border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product)}
          className="rounded-lg border border-red-500 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
