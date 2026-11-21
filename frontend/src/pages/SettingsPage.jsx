import { Link } from "react-router-dom";

function SettingsPage({ viewMode, onChangeViewMode }) {
  const options = [
    {
      value: "grid",
      label: "Grid",
      icon: "▦",
      desc: "Tampilkan produk sebagai kartu.",
    },
    {
      value: "list",
      label: "List",
      icon: "☰",
      desc: "Tampilkan produk sebagai daftar baris.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Link
        to="/"
        className="text-sm font-medium text-emerald-600 hover:underline"
      >
        ← Kembali ke daftar
      </Link>

      <h1 className="mt-6 text-2xl font-bold text-slate-900">Settings</h1>
      <p className="text-sm text-slate-500">
        Atur bagaimana daftar produk ditampilkan.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {options.map((opt) => {
          const active = viewMode === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onChangeViewMode(opt.value)}
              className={`rounded-xl border p-5 text-left transition ${
                active
                  ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{opt.icon}</span>
                {active && (
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">
                    Aktif
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{opt.label}</h3>
              <p className="text-sm text-slate-500">{opt.desc}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default SettingsPage;
