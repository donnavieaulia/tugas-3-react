import Modal from './Modal';
import formatRupiah from '../utils/formatRupiah';

function DeleteConfirmModal({ product, onConfirm, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="delete-content">
        <div className="delete-icon" aria-hidden="true">🗑️</div>
        <h2 className="modal-title">Hapus Produk?</h2>
        <p className="modal-description">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="delete-preview">
          <span className="product-id">ID: {product.id}</span>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{formatRupiah(product.price)}</p>
        </div>
      </div>

      <div className="modal-actions">
        <button className="btn btn-outline-primary" onClick={onClose}>
          Batal
        </button>
        <button className="btn btn-danger" onClick={() => onConfirm(product.id)}>
          Hapus Produk
        </button>
      </div>
    </Modal>
  );
}

export default DeleteConfirmModal;
