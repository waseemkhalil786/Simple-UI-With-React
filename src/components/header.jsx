import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar">
       <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="img"
          />
          <h3>Logo</h3>
          </div> 
        <Link to="/">
          <li> Home Tab </li>
        </Link>
        <Link to="/About">
          <li> About Us </li>
        </Link>
        <Link to="/Service">
          <li> Our Service </li>
        </Link>
        <Link to="/Contact">
          <li> Contact Us </li>
        </Link>
      </nav>
    </div>
  );
}
export default Header;
