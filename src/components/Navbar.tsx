import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-8 py-4 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          AccessMap
        </Link>

        <div className="flex gap-6 text-slate-700 font-medium">
          <Link to="/" className="hover:text-emerald-600 transition">
            Home
          </Link>

          <Link to="/map" className="hover:text-emerald-600 transition">
            Map
          </Link>

          <Link to="/about" className="hover:text-emerald-600 transition">
            About
          </Link>

          <Link to="/contribute" className="hover:text-emerald-600 transition">
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
