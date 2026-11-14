# Manajemen Produk — Tugas 3 (Fundamental React)

Aplikasi React sederhana untuk mengelola daftar produk dan harganya.

## Fitur

- **Halaman utama**: menampilkan daftar produk dalam bentuk kartu (ID, nama, harga).
- **Pencarian**: memfilter produk berdasarkan nama secara langsung.
- **Tambah produk**: pop-up form dengan validasi (nama wajib diisi, harga harus lebih dari 0).
- **Edit produk**: pop-up form yang terisi data produk terpilih.
- **Hapus produk**: pop-up konfirmasi sebelum produk dihapus.

## Konsep React yang digunakan

- Komponen & props (`ProductCard`, `ProductList`, `SearchBar`, `Modal`, `ProductFormModal`, `DeleteConfirmModal`)
- State dengan `useState` (daftar produk, kata kunci pencarian, modal yang aktif)
- Rendering list dengan `map` + `key`
- Conditional rendering (modal, pesan produk tidak ditemukan)
- Controlled form input & event handling

## Struktur Folder

```
frontend/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── DeleteConfirmModal.jsx
    │   ├── Modal.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductFormModal.jsx
    │   ├── ProductList.jsx
    │   └── SearchBar.jsx
    ├── data/
    │   └── initialProducts.js
    └── utils/
        └── formatRupiah.js
```

## Cara Menjalankan

```bash
cd frontend
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.
