function SearchBar({ value, onChange, total }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>
        <input
          type="text"
          placeholder="Cari nama produk..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-200 py-2 pl-10 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />
      </div>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500">
        {total} produk
      </span>
    </div>
  );
}

export default SearchBar;
