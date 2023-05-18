import axios from "axios";

const addCv = async (
  firstName,
  lastName,
  role,
  candDescription,
  experience,
  phone,
  email,
  address,
  education,
  skills,
  portfolio,
  languages,
  gender,
  template,
  image
) => {
  const requestBody = {
    firstName,
    lastName,
    role,
    candDescription,
    experience,
    phone,
    email,
    address,
    education,
    skills,
    portfolio,
    languages,
    gender,
    template,
    image,
  };
  try {
    const response = await axios.post(
      "http://localhost:8080/candidate/add",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      alert("New Candidate added");
    }
  } catch (error) {}
};

export default addCv;
