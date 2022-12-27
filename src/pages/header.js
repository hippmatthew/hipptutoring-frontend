const Header = () => {
  return (
    <div className="header">
      <h1>Hipp Tutoring</h1>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/subjects">Subjects</a>
        <a href="/about">About Me</a>
      </nav>
      <nav className="signin_area">
        <a href="/signin">Sign In</a>
        <a href="/register" className="signup_button">
          Sign Up
        </a>
      </nav>
    </div>
  );
};

export default Header;
