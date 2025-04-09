import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <div className="text-xl font-bold">NOVAverse</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create</Link>
      </div>
    </nav>
  );
}