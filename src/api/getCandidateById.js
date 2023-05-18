import axios from "axios";

const getCandidateById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/candidate/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {}
};

export default getCandidateById;
