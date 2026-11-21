import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import initialProducts from "./data/initialProducts";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [viewMode] = useState("grid");

  const handleAdd = (data) => {
    const nextId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { id: nextId, ...data }]);
  };

  const handleEdit = (id, data) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...data } : p)));
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <ProductListPage
                products={products}
                viewMode={viewMode}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetailPage products={products} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
