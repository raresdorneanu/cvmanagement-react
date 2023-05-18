import axios from "axios";

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/candidate/${id}`);
  } catch (error) {
    console.error("Error deleting candidate:", error);
  }
};

export default handleDelete;
