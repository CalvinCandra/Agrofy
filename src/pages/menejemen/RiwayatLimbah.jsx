import ImageImport from "../../data/ImageImport";
import ButtonHref from "../../components/Button/ButtonHref";

export default function RiwayatLimbah() {
  return (
    <div>
      <div className="bg-dashboard w-full h-auto rounded-md py-5 px-5 space-y-5">
      <div className="bg-white  w-full h-[100%] rounded-md   ">
          <div class=" lg:p-5 ">
          <div className="flex justify-between pb-10">
            <h1 className="font-bold text-3xl py-2">Riwayat</h1>
          </div>
          <div className="flex lg:flex-row sm:flex-col  ">
            <div className="flex lg:flex-row sm:flex-col lg: space-x-3 pb-10 lg:w-[70%]">
              <div className="lg:w-[20%]">
              <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Tanggal Masuk"
            />
              </div>
              <div className="lg:w-[20%]">
              <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Tanggal Masuk"
            />
              </div>
              <p className="py-1">Pilih tanggal periode awal dan akhir lalu klik cetak laporan</p>
            
            
            </div>
          </div>
            <div class="bg-main-green overflow-x-auto rounded-lg" >
              <table class="min-w-full bg-white border border-gray-300 ">
                <thead>
                  <tr>
                    <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">Tenggat</th>
                    <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">Limbah</th>
                    <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">Target</th>
                    <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">Status</th>
                    <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-3 border-b text-gray-600">26.11.2024</td>
                    <td class="px-4 py-3 border-b text-gray-600">Jerami</td>
                    <td class="px-4 py-3 border-b text-gray-600">Tirai</td>
                    <td class="px-4 py-3 border-b">
                    <span class="px-2 py-1 text-sm font-medium text-green-800 flex justify-center bg-green-200 rounded-xl">Sukses</span>
                    </td>
                    <td class="px-4 py-3 border-b flex justify-center space-x-2">
                      <button class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">Lihat</button>
                      
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 border-b text-gray-600">27.11.2024</td>
                    <td class="px-4 py-3 border-b text-gray-600">Umbi Talas</td>
                    <td class="px-4 py-3 border-b text-gray-600">Pakan Sapi</td>
                    <td class="px-4 py-3 border-b">
                      <span class="px-2 py-1 text-sm font-medium flex justify-center text-red-800 bg-red-200 rounded-xl">Gagal</span>
                    </td>
                    <td class="px-4 py-3 border-b flex justify-center space-x-2">
                      <button class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">Lihat</button>
                  
                    </td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-gray-600">29.11.2024</td>
                    <td class="px-4 py-3 text-gray-600">daun Cabai</td>
                    <td class="px-4 py-3 text-gray-600">Kompos</td>
                    <td class="px-4 py-3">
                      <span class="px-2 py-1 text-sm font-medium text-green-800 flex justify-center bg-green-200 rounded-xl">Sukses</span>
                    </td>
                    <td class="px-4 py-3 flex justify-center space-x-2">
                      <button class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">Lihat</button>
                    
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
            <div className="py-10 overflow-hidden ">
              <ButtonHref
                href="#"
                text="Cetak Laporan"
                variant="primary"
                onClick=""
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
