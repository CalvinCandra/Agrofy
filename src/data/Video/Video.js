import ImageImport from "../ImageImport";

const DataVideo = [
  {
    img: ImageImport.artikel1,
    judul: "Cuan dari limbah padi. Part.1",
    deskirpsi: "Mengubah limbah padi menjadi arang sekam, tambah cuan sekali.",
  },
  {
    img: ImageImport.artikel2,
    judul: "Produk dari  Limbah Jagung. Part 1",
    deskirpsi:
      "Kreativitas tanpa batas! Temukan cara unik mengubah limbah jagung menjadi produk kerajinan tangan yang bernilai tinggi.",
  },
  {
    img: ImageImport.artikel3,
    judul: "Pembuatan Pakan Ternak. Part 1",
    deskirpsi:
      "Solusi cerdas untuk peternak! Manfaatkan batang pisang yang sering terbuang menjadi pakan ternak berkualitas, hemat biaya, dan ramah lingkungan.",
  },
  {
    img: ImageImport.artikel4,
    judul: "Mengelola Tebon Jagung. Part 1",
    deskirpsi:
      "Pelajari cara mengolah tebon jagung menjadi pakan tambahan yang kaya nutrisi, meningkatkan bobot badan kambing, dan menjaga kesehatan ternak.",
  },
  {
    img: ImageImport.artikel5,
    judul: "Pengertian Limbah Organik dan Cara Pengeloaan. Part 1",
    deskirpsi:
      "Pahami bagaimana limbah organik dapat mencemari tanah. Dapatkan pengetahuan lengkap tentang teknik-teknik pengelolaan limbah organik yang ramah lingkungan. ",
  },
  {
    img: ImageImport.artikel1,
    judul: "Cuan dari limbah padi. Part 2",
    deskirpsi: "Mengubah limbah padi menjadi arang sekam, tambah cuan sekali.",
  },
  {
    img: ImageImport.artikel2,
    judul: "Produk dari  Limbah Jagung. Part 2",
    deskirpsi:
      "Kreativitas tanpa batas! Temukan cara unik mengubah limbah jagung menjadi produk kerajinan tangan yang bernilai tinggi.",
  },
  {
    img: ImageImport.artikel3,
    judul: "Pembuatan Pakan Ternak. Part 2",
    deskirpsi:
      "Solusi cerdas untuk peternak! Manfaatkan batang pisang yang sering terbuang menjadi pakan ternak berkualitas, hemat biaya, dan ramah lingkungan.",
  },
  {
    img: ImageImport.artikel4,
    judul: "Mengelola Tebon Jagung. Part 2",
    deskirpsi:
      "Pelajari cara mengolah tebon jagung menjadi pakan tambahan yang kaya nutrisi, meningkatkan bobot badan kambing, dan menjaga kesehatan ternak.",
  },
  {
    img: ImageImport.artikel5,
    judul: "Pengertian Limbah Organik dan Cara Pengeloaan. Part 2",
    deskirpsi:
      "Pahami bagaimana limbah organik dapat mencemari tanah. Dapatkan pengetahuan lengkap tentang teknik-teknik pengelolaan limbah organik yang ramah lingkungan. ",
  },
  {
    img: ImageImport.artikel1,
    judul: "Cuan dari limbah padi. Part 3",
    deskirpsi: "Mengubah limbah padi menjadi arang sekam, tambah cuan sekali.",
  },
  {
    img: ImageImport.artikel2,
    judul: "Produk dari  Limbah Jagung. Part 3",
    deskirpsi:
      "Kreativitas tanpa batas! Temukan cara unik mengubah limbah jagung menjadi produk kerajinan tangan yang bernilai tinggi.",
  },
];

const Video = DataVideo.map((data, index) => ({
  id: index + 1,
  ...data,
}));

export default Video;
