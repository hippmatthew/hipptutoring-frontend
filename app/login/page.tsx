const Login = () => {
  return (
    <div className="content">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
