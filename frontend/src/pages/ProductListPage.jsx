import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import ProductFormModal from "../components/ProductFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

function ProductListPage({ products, viewMode, onAdd, onEdit, onDelete }) {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const submitAdd = (data) => {
    onAdd(data);
    setIsAddOpen(false);
  };

  const submitEdit = (data) => {
    onEdit(editingProduct.id, data);
    setEditingProduct(null);
  };

  const confirmDelete = (id) => {
    onDelete(id);
    setDeletingProduct(null);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Daftar Produk</h1>
          <p className="text-sm text-slate-500">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          + Tambah Produk
        </button>
      </header>

      <div className="mt-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          total={products.length}
        />
      </div>

      <div className="mt-6">
        <ProductList
          products={filteredProducts}
          viewMode={viewMode}
          onEdit={setEditingProduct}
          onDelete={setDeletingProduct}
        />
      </div>

      <p className="mt-6 text-center text-sm text-slate-400">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>

      {isAddOpen && (
        <ProductFormModal
          title="Tambah Produk"
          description="Masukkan informasi produk baru."
          submitLabel="Simpan Produk"
          onSubmit={submitAdd}
          onClose={() => setIsAddOpen(false)}
        />
      )}

      {editingProduct && (
        <ProductFormModal
          key={editingProduct.id}
          title="Edit Produk"
          description="Perbarui informasi produk yang dipilih."
          submitLabel="Simpan Perubahan"
          initialData={editingProduct}
          onSubmit={submitEdit}
          onClose={() => setEditingProduct(null)}
        />
      )}

      {deletingProduct && (
        <DeleteConfirmModal
          product={deletingProduct}
          onConfirm={confirmDelete}
          onClose={() => setDeletingProduct(null)}
        />
      )}
    </section>
  );
}

export default ProductListPage;
