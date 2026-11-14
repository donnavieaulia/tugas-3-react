import { useState } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ProductFormModal from './components/ProductFormModal';
import initialProducts from './data/initialProducts';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handleAdd = (data) => {
    const nextId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: nextId, ...data }]);
    setIsAddOpen(false);
  };

  return (
    <main className="container">
      <section className="panel">
        <header className="panel-header">
          <div>
            <h1>Manajemen Produk</h1>
            <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setIsAddOpen(true)}>
            + Tambah Produk
          </button>
        </header>

        <SearchBar value={search} onChange={setSearch} total={products.length} />

        <ProductList products={filteredProducts} onEdit={() => {}} onDelete={() => {}} />

        <p className="footer-info">
          Menampilkan {filteredProducts.length} dari {products.length} produk
        </p>
      </section>

      {isAddOpen && (
        <ProductFormModal
          title="Tambah Produk"
          description="Masukkan informasi produk baru."
          submitLabel="Simpan Produk"
          onSubmit={handleAdd}
          onClose={() => setIsAddOpen(false)}
        />
      )}
    </main>
  );
}

export default App;
