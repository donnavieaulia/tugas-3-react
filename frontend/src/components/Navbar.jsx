import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkBase = "px-3 py-2 rounded-lg text-sm font-medium transition";

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-emerald-600">
          🛍️ Manajemen Produk
        </Link>
        <div className="flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Beranda
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
