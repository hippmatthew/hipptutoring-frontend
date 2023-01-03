const Registration = () => {
  return (
    <div className="content">
      <h1>Register</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" />
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" />
        <label htmlFor="email-conf">Confirm E-Mail</label>
        <input type="txt" id="email-conf" />
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
        <label htmlFor="pass-conf">Confirm Password</label>
        <input type="password" id="pass-conf" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
