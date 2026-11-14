// 5000 -> "Rp5.000"
export default function formatRupiah(value) {
  return `Rp${Number(value).toLocaleString('id-ID')}`;
}
