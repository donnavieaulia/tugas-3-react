import { useState } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import initialProducts from './data/initialProducts';

function App() {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <main className="container">
      <section className="panel">
        <header className="panel-header">
          <div>
            <h1>Manajemen Produk</h1>
            <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
          </div>
        </header>

        <SearchBar value={search} onChange={setSearch} total={products.length} />

        <ProductList products={filteredProducts} onEdit={() => {}} onDelete={() => {}} />

        <p className="footer-info">
          Menampilkan {filteredProducts.length} dari {products.length} produk
        </p>
      </section>
    </main>
  );
}

export default App;
