import useSignIn from "../hooks/SignInHook";
import SignInContext from "../context/SignInContext";
import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.scss";
const SignIn = () => {
  const navigate = useNavigate();
  const {
    password,
    setPassword,
    errorMessage,
    handleSubmitSignIn,
    usernameOrEmail,
    setUsernameOrEmail,
  } = useSignIn();

  return (
    <SignInContext.Provider
      value={{
        password,
        setPassword,
        errorMessage,
        handleSubmitSignIn,
        usernameOrEmail,
        setUsernameOrEmail,
      }}
    >
      <div className="auth">
        <SignInForm />
      </div>
    </SignInContext.Provider>
  );
};

export default SignIn;
