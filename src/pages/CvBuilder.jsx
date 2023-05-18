import * as React from "react";
import { useState } from "react";
import addCv from "../api/AddCvApi";
import templates from "../utils/templates";
import { Box, Modal } from "@mui/material";
import "../styles/CvBuilder.scss";
import Button from "../components/Button";

const CvBuilder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [candDescription, setCandDescription] = useState("");
  const [experience, setExperience] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [languages, setLanguages] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [image, setImage] = useState(null);
  const template = templates?.find(
    (template) => template.id === selectedTemplate
  )?.background;
  const activeTemplate = (temp) => {
    setSelectedTemplate(temp);
    setOpen(true);
  };
  const handleAddCv = async (e) => {
    e.preventDefault();
    const response = await addCv(
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
    );
    return response;
  };

  const onFileChangeHandler = (e) => {
    e.preventDefault();
    // setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    setImage(e.target.files[0].name);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    fetch("http://localhost:8080/candidate/upload", {
      method: "post",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        console.log(image);
        // console.log(res.data);
        alert("File uploaded successfully.");
      }
    });
  };

  const addExperience = () => {
    setExperience([...experience, ""]);
  };
  const handleDeleteExperience = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this experience?"
    );
    if (confirmDelete) {
      const newExperience = [...experience];
      newExperience.splice(index, 1);
      setExperience(newExperience);
    }
  };

  const handleNewExperience = (index, value) => {
    const newExperience = [...experience];
    newExperience[index] = value;
    setExperience(newExperience);
  };

  const addEducation = () => {
    setEducation([...education, ""]);
  };
  const handleDeleteEducation = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this education?"
    );
    if (confirmDelete) {
      const newEducation = [...education];
      newEducation.splice(index, 1);
      setEducation(newEducation);
    }
  };

  const handleNewEducation = (index, value) => {
    const newEducation = [...education];
    newEducation[index] = value;
    setEducation(newEducation);
  };

  const addPortf = () => {
    setPortfolio([...portfolio, ""]);
  };
  const handleDeletePortf = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this work?"
    );
    if (confirmDelete) {
      const newPortf = [...portfolio];
      newPortf.splice(index, 1);
      setPortfolio(newPortf);
    }
  };

  const handleNewPortf = (index, value) => {
    const newPortf = [...portfolio];
    newPortf[index] = value;
    setPortfolio(newPortf);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };
  const handleDeleteSkill = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this skill?"
    );
    if (confirmDelete) {
      const newSkills = [...skills];
      newSkills.splice(index, 1);
      setSkills(newSkills);
    }
  };

  const handleNewSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <div className="builder-page-container">
      <h2>Choose a template</h2>
      <div className="templates-containter">
        {templates.map((template, index) => (
          <div key={index} className="template-wrapper">
            <div
              onClick={() => activeTemplate(template.id)}
              className="template"
              style={{ backgroundColor: template.background }}
            ></div>
          </div>
        ))}
      </div>
      <div className="builder-container">
        <div
          className="builder"
          style={{
            backgroundColor: templates?.find(
              (template) => template.id === selectedTemplate
            )?.background,
            color:
              template &&
              (template === "#323b4c" ||
                template === "#3C4240" ||
                template === "#6D493B" ||
                template === "#8D4B55" ||
                template === "#6B9999")
                ? "#fff"
                : "#000",
          }}
        >
          <h2>Add Your Details</h2>
          <form onSubmit={handleAddCv}>
            <div className="form-flex">
              <div className="builder-form-left">
                <div className="bld builder-fn">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="bld builder-ln">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="bld builder-role">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div className="bld builder-desc">
                  <label htmlFor="desc">Description:</label>
                  <input
                    type="text"
                    id="desc"
                    value={candDescription}
                    onChange={(e) => setCandDescription(e.target.value)}
                  />
                </div>
                <div className="bld builder-phone">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="bld builder-email">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bld builder-address">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="bld builder-lang">
                  <label htmlFor="languages">Lang:</label>
                  <input
                    type="text"
                    id="languages"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </div>
                <div className="bld builder-gender">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="bld builder-photo">
                  <label>Photo:</label>
                  <input
                    type="file"
                    class="file-input"
                    name="file"
                    onChange={onFileChangeHandler}
                  />
                </div>
              </div>
              <div className="builder-form-right">
                <div className="bld builder-exp">
                  <label htmlFor="experience">Experience:</label>
                  {experience.map((value, index) => (
                    <div className="exp-item" key={index}>
                      <label>Experience {index + 1}: </label>
                      <textarea
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleNewExperience(index, e.target.value)
                        }
                      />
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeleteExperience(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <Button
                    className=" add-btn builder-add-exp"
                    onClick={addExperience}
                  >
                    Add Experience
                  </Button>
                </div>
                <div className="bld builder-ed">
                  <label htmlFor="education">Education:</label>
                  {education.map((value, index) => (
                    <div className="ed-item" key={index}>
                      <label>Education {index + 1}: </label>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleNewEducation(index, e.target.value)
                        }
                      />
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeleteEducation(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <Button
                    className="add-btn builder-add-ed"
                    onClick={addEducation}
                  >
                    Add Education
                  </Button>
                </div>
                <div className="bld builder-skills">
                  <label htmlFor="skills">Skills:</label>
                  {skills.map((value, index) => (
                    <div className="skill-item" key={index}>
                      <label>Skill {index + 1}: </label>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleNewSkill(index, e.target.value)}
                      />
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <Button
                    className="add-btn builder-add-skill"
                    onClick={addSkill}
                  >
                    Add Skill
                  </Button>
                </div>
                <div className="bld builder-portf">
                  <label htmlFor="portfolio">Portfolio:</label>
                  {portfolio.map((value, index) => (
                    <div className="portf-item" key={index}>
                      <label> My Work {index + 1}: </label>
                      <textarea
                        type="text"
                        value={value}
                        onChange={(e) => handleNewPortf(index, e.target.value)}
                      />
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeletePortf(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <Button
                    className="add-btn builder-add-portf"
                    onClick={addPortf}
                  >
                    Add Portfolio
                  </Button>
                </div>
              </div>
            </div>
            <div className="builder-submit-button">
              <button className="add-btn" type="submit">
                Add CV
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            bgcolor: templates?.find(
              (template) => template.id === selectedTemplate
            )?.background,
          }}
          style={{
            backgroundColor: template?.background,
            color:
              template &&
              (template === "#323b4c" ||
                template === "#3C4240" ||
                template === "#6D493B" ||
                template === "#8D4B55" ||
                template === "#6B9999")
                ? "#fff"
                : "#000",
            fontWeight: "bold",
          }}
          className="modal"
        >

        </Box>
      </Modal> */}
    </div>
  );
};
export default CvBuilder;
