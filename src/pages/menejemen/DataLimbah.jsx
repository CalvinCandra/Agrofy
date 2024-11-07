import ButtonHref from "../../components/Button/ButtonHref";

export default function DataLimbah() {
  return (
    <div>
      <div className="bg-dashboard w-full h-full rounded-md p-5">
        <div className="bg-white w-full rounded-md p-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Limbah</h1>
            <div className="">
              <ButtonHref href="#" text="Tambah" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
