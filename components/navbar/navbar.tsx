import NavUnauth from "./nav_unauth";
import NavAuth from "./nav_auth";
import "../../styles/navbar.css";

const Navbar = (props: { auth: boolean }) => {
  return props.auth ? <NavAuth /> : <NavUnauth />;
};

export default Navbar;
