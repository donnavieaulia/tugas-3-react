import formatRupiah from '../utils/formatRupiah';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="product-card">
      <span className="product-id">ID: {product.id}</span>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{formatRupiah(product.price)}</p>
      <div className="card-actions">
        <button className="btn btn-outline-primary" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="btn btn-outline-danger" onClick={() => onDelete(product)}>
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
