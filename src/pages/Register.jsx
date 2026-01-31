import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="from-container">
        <h1 className="from-titl">Register</h1>
        <from>
          <div className="from-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter you full name"
            />
          </div>
          <div className="from-group">
            <label htmlFor="email">email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter you email"
            />
          </div>
          <div className="from-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter you phone number"
            />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="create a password"
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>

          <p className="link-text"/>
        </from>
      </div>
    </>
  );
};

export default Register;
