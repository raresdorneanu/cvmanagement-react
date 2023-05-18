import { useContext } from "react";
import SignInContext from "../context/SignInContext";

const SignInForm = () => {
  const {
    password,
    setPassword,
    errorMessage,
    handleSubmitSignIn,
    usernameOrEmail,
    setUsernameOrEmail,
  } = useContext(SignInContext);
  return (
    <div className="auth-page">
      <div className="container">
        <form onSubmit={handleSubmitSignIn} className="form-account">
          <h2>SIGN IN</h2>
          <label htmlFor="email-sign-in">Email</label>
          <input
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
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
            SIGN IN
          </button>
        </form>
        <p className="error-message">{errorMessage}</p>
      </div>
    </div>
  );
};
export default SignInForm;
