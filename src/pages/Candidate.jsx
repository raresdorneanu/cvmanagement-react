import * as React from "react";
import { useState, useEffect } from "react";
import "../styles/Candidate.scss";
import { useNavigate } from "react-router-dom";
import "animate.css";
import handleDelete from "../api/DeleteApi";
import { Avatar } from "@mui/material";
import templates from "../utils/templates";

export default function Candidate(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [found, setFound] = useState(false);
  const handleHover = (id) => {
    setIsHovered(id);
  };
  const handleUnhover = () => {
    setIsHovered(null);
  };

  useEffect(() => {
    console.log("......");
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/candidate/getAll")
      .then((res) => res.json())
      .then((result) => {
        props.setCandidates(result);
      });
  }, []);

  const handleCvDetailClick = (id) => {
    navigate(`/cv/${id}`);
  };

  const handleDeleteClick = (id) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this candidate?"
    );
    if (confirmDelete) {
      handleDelete(id).then(() => {
        const newCandidates = props.candidates.filter(
          (candidate) => candidate.id !== id
        );
        props.setCandidates(newCandidates);
      });
    }
  };

  const [selectedTemplates, setSelectedTemplates] = useState({});

  useEffect(() => {
    const newSelectedTemplates = {};
    props.candidates.forEach(async (cand) => {
      const template = templates.find(
        (template) => template.background === cand.template
      );
      newSelectedTemplates[cand.id] = template;
    });
    setSelectedTemplates(newSelectedTemplates);
  }, [props.candidates, templates]);

  useEffect(() => {
    props.candidates.map((cand) => {
      console.log(cand.image);
      import(`../images/uploads/${cand.image}`).then((image) => {
        // you can store the imported image in a variable
        const importedImage = image.default;
        // do something with the imported image
        console.log(importedImage);
        setImageSrc(importedImage);
        console.log(imageSrc);
      });
    });
  }, []);

  return (
    <div>
      <div className="candidate-container">
        {props.filteredCandidates.length > 0 ? (
          props.filteredCandidates.map((cand) => (
            <div key={cand.id} className="candidate-wrapper">
              <div
                className={`candidate candidate-first-page ${
                  cand.id === isHovered
                    ? "animate__animated animate__headShake"
                    : ""
                }`}
                style={{
                  backgroundColor: cand.template,
                  color:
                    selectedTemplates[cand.id] &&
                    (selectedTemplates[cand.id].background === "#323b4c" ||
                      selectedTemplates[cand.id].background === "#3C4240" ||
                      selectedTemplates[cand.id].background === "#6D493B" ||
                      selectedTemplates[cand.id].background === "#8D4B55" ||
                      selectedTemplates[cand.id].background === "#6B9999")
                      ? "#fff"
                      : "#000",
                }}
                onClick={() => handleCvDetailClick(cand.id)}
                onMouseEnter={() => handleHover(cand.id)}
                onMouseLeave={handleUnhover}
              >
                <div className="candidate-text">
                  <p>
                    First Name:<span>{cand.firstName}</span>
                  </p>
                  <p>
                    Last Name:<span>{cand.lastName}</span>
                  </p>
                  <p>
                    Role:<span>{cand.role}</span>
                  </p>
                </div>
                <div className="candidate-image">
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    alt=""
                    src={`/images/${cand.image}`}
                  />
                </div>
                <button
                  style={{
                    color:
                      selectedTemplates[cand.id] &&
                      (selectedTemplates[cand.id].background === "#323b4c" ||
                        selectedTemplates[cand.id].background === "#3C4240" ||
                        selectedTemplates[cand.id].background === "#6D493B" ||
                        selectedTemplates[cand.id].background === "#8D4B55" ||
                        selectedTemplates[cand.id].background === "#6B9999")
                        ? "#fff"
                        : "#000",
                    fontWeight: "bold",
                  }}
                  onClick={handleDeleteClick(cand.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No candidates found</p>
        )}
      </div>
    </div>
  );
}
