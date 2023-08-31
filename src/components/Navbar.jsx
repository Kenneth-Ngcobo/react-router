import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <span style={{ margin: "0 10px" }}>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
}
