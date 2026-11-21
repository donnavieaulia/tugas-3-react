import Modal from "./Modal";
import formatRupiah from "../utils/formatRupiah";

function DeleteConfirmModal({ product, onConfirm, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <div className="text-4xl">🗑️</div>
        <h2 className="mt-2 text-lg font-bold text-slate-900">Hapus Produk?</h2>
        <p className="mt-1 text-sm text-slate-500">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <span className="text-xs font-medium text-slate-400">
            ID: {product.id}
          </span>
          <h3 className="font-semibold text-slate-900">{product.name}</h3>
          <p className="text-emerald-600">{formatRupiah(product.price)}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Batal
        </button>
        <button
          onClick={() => onConfirm(product.id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Hapus Produk
        </button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmModal;
