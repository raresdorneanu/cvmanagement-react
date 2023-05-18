import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSignIn = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        { usernameOrEmail, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      localStorage.setItem("lsname", usernameOrEmail.split("@")[0]);
      navigate("/dashboard");
      window.location.reload(); // refresh the page after navigating
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      console.log(error);
    }
  };

  return {
    password,
    setPassword,
    errorMessage,
    handleSubmitSignIn,
    usernameOrEmail,
    setUsernameOrEmail,
  };
};

export default useSignIn;
