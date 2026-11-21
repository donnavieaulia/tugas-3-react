import { useState } from "react";
import Modal from "./Modal";

function ProductFormModal({
  title,
  description,
  submitLabel,
  initialData,
  onSubmit,
  onClose,
}) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [price, setPrice] = useState(initialData?.price?.toString() ?? "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.trim() === "") newErrors.name = "Nama produk wajib diisi.";
    if (price === "" || Number(price) <= 0)
      newErrors.price = "Harga harus lebih dari 0.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({ name: name.trim(), price: Number(price) });
  };

  const inputBase =
    "mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2";
  const inputOk =
    "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100";
  const inputBad = "border-red-400 focus:ring-red-100";

  return (
    <Modal title={title} description={description} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {initialData?.id && (
          <p className="text-xs font-medium text-slate-400">
            ID: {initialData.id}
          </p>
        )}

        <div>
          <label
            htmlFor="product-name"
            className="text-sm font-medium text-slate-700"
          >
            Nama Produk
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Contoh: Pulpen"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className={`${inputBase} ${errors.name ? inputBad : inputOk}`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="product-price"
            className="text-sm font-medium text-slate-700"
          >
            Harga (Rp)
          </label>
          <input
            id="product-price"
            type="number"
            min="1"
            placeholder="Contoh: 5000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`${inputBase} ${errors.price ? inputBad : inputOk}`}
          />
          {errors.price ? (
            <p className="mt-1 text-xs text-red-500">{errors.price}</p>
          ) : (
            <p className="mt-1 text-xs text-slate-400">
              Harga harus lebih dari 0.
            </p>
          )}
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Batal
          </button>
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductFormModal;
