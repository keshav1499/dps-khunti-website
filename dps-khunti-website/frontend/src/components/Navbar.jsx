import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">DPS Khunti</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/about">About</Link>
        <Link className="mx-2" to="/announcements">Announcements</Link>
        <Link className="mx-2" to="/contact">Contact</Link>
        <Link className="mx-2" to="/login">Login</Link>
      </div>
    </nav>
  );
}
