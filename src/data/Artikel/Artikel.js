import ImageImport from "../ImageImport";

const DataArtikel = [
  {
    img: ImageImport.artikel1,
    judul: "Cuan dari limbah padi",
    deskirpsi:
      "Jangan buang jerami! Ubah limbah padi jadi ladang uang. Pelajari cara mengolah jerami dan sekam menjadi produk bernilai tinggi.",
    href: "/artikel_detail",
  },
  {
    img: ImageImport.artikel2,
    judul: "Produk dari  Limbah Jagung",
    deskirpsi:
      "Kreativitas tanpa batas! Temukan cara unik mengubah limbah jagung menjadi produk kerajinan tangan yang bernilai tinggi.",
    href: "#",
  },
  {
    img: ImageImport.artikel3,
    judul: "Pembuatan Pakan Ternak",
    deskirpsi:
      "Solusi cerdas untuk peternak! Manfaatkan batang pisang yang sering terbuang menjadi pakan ternak berkualitas, hemat biaya, dan ramah lingkungan.",
    href: "#",
  },
  {
    img: ImageImport.artikel4,
    judul: "Mengelola Tebon Jagung",
    deskirpsi:
      "Pelajari cara mengolah tebon jagung menjadi pakan tambahan yang kaya nutrisi, meningkatkan bobot badan kambing, dan menjaga kesehatan ternak.",
    href: "#",
  },
  {
    img: ImageImport.artikel5,
    judul: "Pengertian Limbah Organik dan Cara Pengeloaan",
    deskirpsi:
      "Pahami bagaimana limbah organik dapat mencemari tanah. Dapatkan pengetahuan lengkap tentang teknik-teknik pengelolaan limbah organik yang ramah lingkungan. ",
    href: "#",
  },
];

const Artikel = DataArtikel.map((data, index) => ({
  id: index + 1,
  ...data,
}));

export default Artikel;
