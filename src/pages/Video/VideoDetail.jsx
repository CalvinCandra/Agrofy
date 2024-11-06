import VideoImport from "../../data/VideoImport";
import ImageImport from "../../data/ImageImport";

export default function VideoDetail() {
  return (
    <section className="bg-white pt-10 lg:pt-28">
      <div className="w-full lg:w-konten mx-auto mb-10 pt-10 lg:pt-0 p-2 lg:p-0">
        {/* Video */}
        <div className="flex justify-center">
          <video
            controls
            poster={ImageImport.artikel1}
            className="rounded-lg w-full"
          >
            <source src={VideoImport.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Judul */}
        <div className="my-10">
          <h1 className="font-bold text-3xl lg:text-5xl py-3">
            Cuan dari limbah padi Part.1
          </h1>

          <div className="flex items-center">
            <i className="fa-solid fa-calendar-days me-2"></i>
            <h5 className="mt-0.5">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </h5>
            <div className="p-1 rounded-full bg-black mx-4 mt-0.5"></div>
            <i className="fa-solid fa-user me-2 text-sm mt-0.5"></i>

            <h5 className="mt-0.5">WillyCandra</h5>
          </div>
        </div>

        {/* Deskiripsi */}
        <div className="">
          <p className="text-justify">
            Limbah pertanian, terutama dari proses produksi padi, telah menjadi
            salah satu masalah yang signifikan di negara-negara agraris seperti
            Indonesia. Setiap tahunnya, jutaan ton sekam padi dihasilkan sebagai
            limbah sisa proses penggilingan. Sekam ini seringkali dianggap
            sebagai bahan tak berguna dan dibuang begitu saja. Di berbagai
            wilayah, sekam padi dibiarkan menumpuk atau dibakar secara terbuka,
            yang menyebabkan polusi udara serta pemborosan sumber daya. Padahal,
            sekam padi memiliki potensi besar untuk diolah menjadi produk yang
            lebih bermanfaat, salah satunya adalah arang sekam. Arang sekam
            merupakan produk hasil pembakaran sekam padi secara terkendali.
            Pengolahan sekam menjadi arang sekam tidak hanya membantu mengurangi
            limbah, tetapi juga menciptakan produk yang dapat dimanfaatkan di
            berbagai sektor seperti pertanian, industri, dan energi. Dalam
            konteks keberlanjutan dan ekonomi sirkular, pengelolaan limbah
            menjadi produk bernilai seperti arang sekam adalah langkah penting
            untuk mengurangi jejak lingkungan sekaligus meningkatkan
            produktivitas.
          </p>

          <div className="my-5">
            Arang sekam memiliki berbagai manfaat yang signifikan di berbagai
            sektor, antara lain:
            <ol className="list-decimal list-inside pl-5">
              <li className="my-2">
                <span className="font-bold">Pertanian:</span> Arang sekam
                digunakan sebagai bahan yang dapat memperbaiki kualitas tanah.
                Dengan pori-porinya yang khas, arang sekam mampu menyerap air
                dan menyimpan nutrisi, sehingga membantu menjaga kelembaban
                tanah dan memperbaiki sirkulasi udara di dalamnya. Arang ini
                juga menstimulasi pertumbuhan mikroorganisme bermanfaat yang
                penting untuk kesuburan tanah. Dengan demikian, penggunaan arang
                sekam dapat mengurangi ketergantungan pada pupuk kimia.
              </li>
              <li className="my-2">
                <span className="font-bold">Industri:</span> Di industri
                konstruksi, arang sekam digunakan sebagai bahan tambahan dalam
                pembuatan produk seperti bata ringan dan beton. Arang sekam
                meningkatkan ketahanan termal dan mekanis pada produk bangunan.
                Selain itu, arang sekam digunakan sebagai penyerap racun dan
                logam berat dalam proses penjernihan air.
              </li>
              <li className="my-2">
                <span className="font-bold">Energi:</span> Arang sekam memiliki
                potensi sebagai bahan bakar alternatif yang ramah lingkungan.
                Penggunaannya sebagai bahan bakar menghasilkan emisi polutan
                yang lebih rendah dibandingkan kayu bakar atau batu bara, dan
                membantu mengurangi tingkat deforestasi.
              </li>
            </ol>
          </div>

          <p className="text-justify">
            Pengolahan limbah padi, khususnya sekam, menjadi arang sekam
            menawarkan solusi berkelanjutan untuk mengatasi permasalahan
            lingkungan akibat limbah pertanian. Selain membantu mengurangi
            tumpukan limbah dan polusi udara, arang sekam memiliki berbagai
            manfaat yang dapat digunakan di sektor pertanian, industri, dan
            energi. Melalui langkah-langkah pengolahan yang sederhana, sekam
            padi yang sebelumnya dianggap sebagai sampah bisa diubah menjadi
            sumber daya yang bernilai tinggi. Oleh karena itu, penting bagi para
            petani dan masyarakat untuk memahami manfaat dari arang sekam serta
            mengadopsi metode pengolahan limbah ini guna mewujudkan pertanian
            yang lebih ramah lingkungan dan produktif.
          </p>
        </div>
      </div>
    </section>
  );
}
