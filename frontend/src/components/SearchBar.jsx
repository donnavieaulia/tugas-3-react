function SearchBar({ value, onChange, total }) {
  return (
    <div className="toolbar">
      <div className="search-box">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          type="text"
          placeholder="Cari nama produk..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <span className="product-count">{total} produk</span>
    </div>
  );
}

export default SearchBar;
