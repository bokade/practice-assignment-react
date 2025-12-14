import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>I11 Assignment</h3>
      <Link to="/companies">Companies</Link>
      <Link to="/drivers">Drivers</Link>
    </div>
  );
}
