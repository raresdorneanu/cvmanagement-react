import useRegister from "../hooks/RegisterHook";
import RegisterContext from "../context/RegisterContext";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    handleSubmitRegister,
    setUsername,
    setName,
    username,
    name,
  } = useRegister();

  return (
    <RegisterContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        handleSubmitRegister,
        setUsername,
        setName,
        username,
        name,
      }}
    >
      <div className="auth">
        <RegisterForm />
      </div>
    </RegisterContext.Provider>
  );
};

export default Register;
