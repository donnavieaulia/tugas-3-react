import { useState } from 'react';
import ProductList from './components/ProductList';
import initialProducts from './data/initialProducts';

function App() {
  const [products] = useState(initialProducts);

  return (
    <main className="container">
      <section className="panel">
        <header className="panel-header">
          <div>
            <h1>Manajemen Produk</h1>
            <p className="subtitle">Kelola daftar produk dan harga dalam satu tempat.</p>
          </div>
        </header>

        <ProductList products={products} onEdit={() => {}} onDelete={() => {}} />

        <p className="footer-info">
          Menampilkan {products.length} dari {products.length} produk
        </p>
      </section>
    </main>
  );
}

export default App;
