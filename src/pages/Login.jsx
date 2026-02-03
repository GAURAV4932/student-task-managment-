import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  // validation
  const validate = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // input change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setLoginError("");
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem("authData"));

    if (!storedUser) {
      setLoginError("No account found. Please register first.");
      return;
    }

    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      localStorage.setItem("LoginData", JSON.stringify(storedUser));

      alert("Login Successful");
      navigate("/Dashboard");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {loginError && <p className="error">{loginError}</p>}

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>

      <p className="link-text">
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;