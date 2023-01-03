import Link from "next/link";
import ToggleButton from "../toggle_button";

const NavUnauth = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">Hipp Tutoring</div>
      <ToggleButton />
      <div className="nav-links">
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#subjects">Subjects</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <Link href="/login" id="a">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/register" id="a">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavUnauth;
