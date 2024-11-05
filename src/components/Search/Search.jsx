export default function Search(props) {
  const { placeholder } = props;
  return (
    <form className="">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
        </div>

        <input
          type="search"
          id="default-search"
          className="block w-full ps-10 text-sm bg-gray-50 border-2 text-black rounded-lg p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
}
