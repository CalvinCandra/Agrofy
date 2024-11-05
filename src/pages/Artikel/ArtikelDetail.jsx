import ImageImport from "../../data/ImageImport";

export default function ArtikelDetail() {
  return (
    <section className="bg-white lg:pt-28 pt-12">
      <div className="w-konten m-auto">
        {/* Judul */}
        <div className="my-10">
          <h1 className="font-bold text-3xl lg:text-5xl py-3">
            Cuan dari limbah padi
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

        {/*Gambar*/}
        <div className="w-full p-1 h-[200px] lg:h-[500px] mb-10">
          <img
            src={ImageImport.artikel1}
            className="h-full w-full"
            alt="Artikel Image"
          ></img>
        </div>

        {/*artikel*/}
        <div className="w-full">
          <p className="text-justify font-normal text-base">
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

          <h1 className="my-5 font-bold text-3xl py-1">Manfaat</h1>

          <div className="text-justify font-normal text-base">
            Arang sekam memiliki berbagai manfaat yang signifikan di berbagai
            sektor, antara lain:
            <ol className="list-decimal list-inside my-5 pl-5">
              <li className="mb-2">
                <span className="font-bold">Pertanian :</span>Arang sekam
                digunakan sebagai bahan yang dapat memperbaiki kualitas tanah.
                Dengan pori-porinya yang khas, arang sekam mampu menyerap air
                dan menyimpan nutrisi, sehingga membantu menjaga kelembaban
                tanah dan memperbaiki sirkulasi udara di dalamnya. Arang ini
                juga menstimulasi pertumbuhan mikroorganisme bermanfaat yang
                penting untuk kesuburan tanah. Dengan demikian, penggunaan arang
                sekam dapat mengurangi ketergantungan pada pupuk kimia.
              </li>
              <li className="mb-2">
                <span className="font-bold">Industri :</span>Di industri
                konstruksi, arang sekam digunakan sebagai bahan tambahan dalam
                pembuatan produk seperti bata ringan dan beton. Arang sekam
                meningkatkan ketahanan termal dan mekanis pada produk bangunan.
                Selain itu, arang sekam digunakan sebagai penyerap racun dan
                logam berat dalam proses penjernihan air.
              </li>
              <li className="mb-2">
                <span className="font-bold">Energi :</span>Arang sekam memiliki
                potensi sebagai bahan bakar alternatif yang ramah lingkungan.
                Penggunaannya sebagai bahan bakar menghasilkan emisi polutan
                yang lebih rendah dibandingkan kayu bakar atau batu bara, dan
                membantu mengurangi tingkat deforestasi.
              </li>
            </ol>
          </div>

          <div className="w-full lg:w-1/2 m-auto lg:h-[300px] my-10">
            <img
              src={ImageImport.artikel1}
              className="w-full h-full"
              alt="Image Tutorial"
            />
          </div>

          <h1 className="my-5 font-bold text-3xl py-1">
            Cara mengelolah limbah padi
          </h1>

          <div className="text-justify font-normal text-base">
            Mengolah sekam padi menjadi arang sekam dapat dilakukan melalui
            beberapa langkah sederhana berikut:
            <ol className="list-decimal list-inside my-5 pl-5">
              <li className="mb-2">
                Persiapan Bahan: Kumpulkan sekam padi dalam jumlah yang cukup
                untuk diolah. Pastikan sekam dalam kondisi kering agar proses
                pembakaran berjalan dengan optimal.
              </li>
              <li className="mb-2">
                Pembakaran Terkendali: Sekam padi dibakar dalam tungku atau drum
                khusus yang memiliki ventilasi udara. Proses pembakaran ini
                harus dikendalikan agar tidak terjadi pembakaran sempurna.
                Tujuannya adalah agar sekam tidak habis terbakar, tetapi tetap
                meninggalkan residu yang menjadi arang.
              </li>
              <li className="mb-2">
                Pendinginan: Setelah proses pembakaran selesai, arang sekam yang
                masih panas harus didinginkan dengan cara menutup drum atau
                tungku pembakaran agar tidak terjadi pembakaran lebih lanjut.
                Proses ini juga dapat dilakukan dengan menyiram arang dengan
                sedikit air untuk mempercepat pendinginan.
              </li>
              <li className="mb-2">
                Penyaringan dan Penyimpanan: Setelah dingin, arang sekam diayak
                untuk memisahkan sisa-sisa sekam yang belum terbakar. Arang
                sekam yang telah bersih kemudian disimpan di tempat yang kering
                sebelum digunakan atau dijual.
              </li>
            </ol>
          </div>

          <p className="text-justify font-normal text-base mb-10">
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
