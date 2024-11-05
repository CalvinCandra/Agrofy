export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Previous</span>
            <i className="fa-solid fa-chevron-left"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="bg-main-green py-1 px-3 text-white rounded">
              1
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
