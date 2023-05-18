import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        { name, username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      navigate("/signin");
    } catch (error) {
      setErrorMessage("Email or username already in use. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    handleSubmitRegister,
    username,
    name,
    setUsername,
    setName,
    navigate,
  };
};

export default useRegister;
