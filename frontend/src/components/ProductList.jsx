import ProductCard from "./ProductCard";

function ProductList({ products, viewMode, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 py-10 text-center text-slate-400">
        Produk tidak ditemukan.
      </p>
    );
  }

  const containerClass =
    viewMode === "grid"
      ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      : "flex flex-col gap-3";

  return (
    <div className={containerClass}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
