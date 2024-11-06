export default function Sidebar() {
  return (
    <div>
        {/* Sidebar */}
        <aside className="w-64 bg-dashboard text-white h-screen p-5 lg:pt-20 ">
          <h2 className="text-2xl font-bold mb-6">Dashboard
          Management</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700">
                <span></span>
                <span>Home</span>
              </a>
            </li>
          </ul>
        </aside>
    </div>
    
  );
}
