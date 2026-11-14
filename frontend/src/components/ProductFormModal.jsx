import { useState } from 'react';
import Modal from './Modal';

// Dipakai untuk Tambah Produk (initialData kosong) dan Edit Produk (initialData = produk terpilih)
function ProductFormModal({
  title,
  description,
  submitLabel,
  initialData,
  onSubmit,
  onClose,
}) {
  const [name, setName] = useState(initialData?.name ?? '');
  const [price, setPrice] = useState(initialData?.price?.toString() ?? '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.trim() === '') {
      newErrors.name = 'Nama produk wajib diisi.';
    }
    if (price === '' || Number(price) <= 0) {
      newErrors.price = 'Harga harus lebih dari 0.';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSubmit({ name: name.trim(), price: Number(price) });
  };

  return (
    <Modal title={title} description={description} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate>
        {initialData?.id && <p className="form-id">ID: {initialData.id}</p>}

        <label className="form-label" htmlFor="product-name">
          Nama Produk
        </label>
        <input
          id="product-name"
          className={`form-input ${errors.name ? 'is-invalid' : ''}`}
          type="text"
          placeholder="Contoh: Pulpen"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        {errors.name && <p className="form-error">{errors.name}</p>}

        <label className="form-label" htmlFor="product-price">
          Harga (Rp)
        </label>
        <input
          id="product-price"
          className={`form-input ${errors.price ? 'is-invalid' : ''}`}
          type="number"
          min="1"
          placeholder="Contoh: 5000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price ? (
          <p className="form-error">{errors.price}</p>
        ) : (
          <p className="form-hint">Harga harus lebih dari 0.</p>
        )}

        <div className="modal-actions">
          <button type="button" className="btn btn-outline-primary" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn btn-primary">
            {submitLabel}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductFormModal;
