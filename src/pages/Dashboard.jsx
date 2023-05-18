import { useNavigate } from "react-router-dom";
import Candidate from "./Candidate";
import { useEffect, useState } from "react";
import "../styles/Dashboard.scss";
import Button from "../components/Button";

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const localUsername = localStorage.getItem("lsname");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const navigateToBuilder = () => {
    navigate("/build");
  };
  const [image, setImage] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates?.filter((cand) => {
    return (
      cand?.firstName?.toUpperCase().includes(searchTerm.toUpperCase()) ||
      cand?.lastName?.toUpperCase().includes(searchTerm.toUpperCase()) ||
      cand?.role?.toUpperCase().includes(searchTerm.toUpperCase())
    );
  });
  useEffect(() => {
    console.log(candidates);
  }, [candidates]);

  // onFileChangeHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     selectedFile: e.target.files[0],
  //   });
  //   const formData = new FormData();
  //   formData.append("file", this.state.selectedFile);
  //   fetch("http://localhost:8080/upload", {
  //     method: "post",
  //     body: formData,
  //   }).then((res) => {
  //     if (res.ok) {
  //       console.log(res.data);
  //       alert("File uploaded successfully.");
  //     }
  //   });
  // };

  return (
    <div className="dash-container">
      <div className="dash-flex">
        <div className="dash-flex-left">
          <div className="dash-info">
            <h1>Welcome, {localUsername.toUpperCase()}</h1>
            <div className="search-for-player">
              <h3>Search for candidate</h3>
              <input
                type="text"
                placeholder="Search candidate"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
          <div className="dash-buttons">
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={navigateToBuilder}>Build</Button>
          </div>
        </div>
        <div className="dash-flex-right">
          <h2>Cvs</h2>
          <Candidate
            candidates={candidates}
            setCandidates={setCandidates}
            filteredCandidates={filteredCandidates}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
