import { useContext } from "react";
import RegisterContext from "../context/RegisterContext";

const RegisterForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    successMessage,
    errorMessage,
    handleSubmitRegister,
    setUsername,
    setName,
    username,
    name,
  } = useContext(RegisterContext);
  return (
    <div className="auth-page">
      <div className="container">
        <form onSubmit={handleSubmitRegister} className="form-account">
          <h2>REGISTER</h2>
          <label htmlFor="name-sign-in">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name-sign-in"
            placeholder="Enter your name"
          />
          <label htmlFor="username-sign-in">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username-sign-in"
            placeholder="Enter your username"
          />

          <label htmlFor="email-sign-in">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-sign-in"
            placeholder="Enter your email"
          />
          <label htmlFor="pass-sign-in">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pass-sign-in"
            placeholder="Enter your password"
          />
          <button type="submit" className="styled-button">
            REGISTER
          </button>
        </form>
        <p className="error-message">{errorMessage}</p>
        <p className="success-message">{successMessage}</p>
      </div>
    </div>
  );
};
export default RegisterForm;
