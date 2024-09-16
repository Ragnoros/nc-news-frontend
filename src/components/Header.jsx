import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <h1>NC NEWS</h1>
      <nav className="nav">
        <Link className="nav-button" to="/home">
          Home
        </Link>
        <br></br>
        <Link className="nav-button" to="/articles">
          Articles
        </Link>
      </nav>
    </>
  );
}
