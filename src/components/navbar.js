const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hipp Tutoring</h1>
      <div>
        <a href="/">Home</a>
        <a href="/subjects">Subject List</a>
        <a href="/about">About Me</a>
        <a href="/signin">Sign In</a>
        <a className="signup_button" href="/register">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
