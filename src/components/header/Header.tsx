import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">Home</h1>
      </Link>
    </header>
  );
}
