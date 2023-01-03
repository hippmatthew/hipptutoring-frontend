import Link from "next/link";
import ToggleButton from "../toggle_button";

const NavAuth = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">Hipp Tutoring</div>
      <ToggleButton />
      <div className="nav-links">
        <ul>
          <li>
            <Link href="/dashboard" id="a">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/book" id="a">
              Book A Session
            </Link>
          </li>
          <li>
            <Link href="/account" id="a">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavAuth;
