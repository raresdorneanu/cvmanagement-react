import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCandidateById from "../api/getCandidateById";
import Button from "../components/Button";
import { Avatar, Box, Modal } from "@mui/material";
import templates from "../utils/templates";
import "../styles/CvDetails.scss";

const CvDetail = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [candDescription, setCandDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [languages, setLanguages] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState("");

  useEffect(() => {
    async function fetchCandidate() {
      const response = await getCandidateById(id);
      setCandidate(response);
    }
    fetchCandidate();
  }, [id]);

  const [experience, setExperience] = useState(candidate.experience);
  const [skills, setSkills] = useState(candidate.skills);
  const [portfolio, setPortfolio] = useState(candidate.portfolio);
  const [education, setEducation] = useState(candidate.education);
  const [image, setImage] = useState(candidate.image);
  useEffect(() => {
    console.log(candidate);
  });
  useEffect(() => {
    if (candidate) {
      setExperience(candidate.experience || []);
      setSkills(candidate.skills || []);
      setPortfolio(candidate.portfolio || []);
      setEducation(candidate.education || []);
    }
  }, [candidate]);

  const addExperience = () => {
    setExperience([...experience, ""]);
  };
  const handleDeleteExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
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
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
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
    const newPortf = [...portfolio];
    newPortf.splice(index, 1);
    setPortfolio(newPortf);
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
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleNewSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleCandDescriptionChange = (e) => {
    setCandDescription(e.target.value);
  };

  // const handleExperienceChange = (e) => {
  //   setExperience(e.target.value);
  // };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEducationChange = (e) => {
    if (e && e.target && e.target.value) {
      setEducation([...education, e.target.value]);
    }
  };

  // const handleSkillsChange = (e) => {
  //   setSkills(e.target.value);
  // };
  const handlePortfolioChange = (e) => {
    if (e && e.target && e.target.value) {
      setPortfolio([...portfolio, e.target.value]);
    }
  };
  const handleLangChange = (e) => {
    setLanguages(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleTemplateChange = (newBackground) => {
    setTemplate(newBackground);
  };

  // const handleImageChange = (event) => {
  //   onFileChangeHandler(event);
  // };
  //   const handleDeleteExperience = (index) => {
  //     setExperiences((prevExperiences) =>
  //       prevExperiences.filter((_, i) => i !== index)
  //     );
  //   };
  const onFileChangeHandler = async (e) => {
    e.preventDefault(); // prevent default browser action
    e.stopPropagation();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(e.target.files[0].name);

    console.log(image);
    await fetch("http://localhost:8080/candidate/upload", {
      method: "post",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        setImage(e.target.files[0].name);
        // console.log(res.data);
        // alert("File uploaded successfully.");
      }
    });
  };

  const handleUpdate = () => (e) => {
    // const experienceString = experiences.join("|");
    // const skillsString = skills.join("|");
    e.preventDefault();
    e.stopPropagation();
    fetch(`http://localhost:8080/candidate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    })
      .then((result) => {
        console.log(result);
        setOpen(false);
        const updatedCandidate = candidate;
        if (updatedCandidate) {
          updatedCandidate.firstName = firstName;
          updatedCandidate.lastName = lastName;
          updatedCandidate.role = role;
          updatedCandidate.candDescription = candDescription;
          updatedCandidate.experience = experience;
          updatedCandidate.phone = phone;
          updatedCandidate.email = email;
          updatedCandidate.address = address;
          updatedCandidate.education = education;
          updatedCandidate.skills = skills;
          updatedCandidate.portfolio = portfolio;
          updatedCandidate.languages = languages;
          updatedCandidate.gender = gender;
          updatedCandidate.template = template;
          updatedCandidate.image = image;
          setCandidate({ ...candidate });
          setExperience([...experience]);
          setSkills([...skills]);
          setPortfolio([...portfolio]);
          setEducation([...education]);
          return updatedCandidate;
        } else {
          throw new Error(`Candidate with ID ${id} not found.`);
        }
      })
      .catch((error) => console.error(error));
  };

  function makeLink(portfolioLink) {
    const isUrl = portfolioLink.startsWith("http");

    if (isUrl) {
      return (
        <a href={portfolioLink} rel="noreferrer" target="_blank">
          {portfolioLink}
        </a>
      );
    } else {
      return portfolioLink;
    }
  }
  const selectedTemplate = templates.find(
    (template) => template.background === candidate.template
  );
  useEffect(() => {
    console.log(selectedTemplate);
  });
  const templateUpdate = candidate.template;
  return (
    <>
      <div className="candidate-container-details">
        <div className="candidate-flex">
          <div
            className="candidate candidate-flex-left"
            style={{
              backgroundColor: selectedTemplate?.background,
              color:
                selectedTemplate &&
                (selectedTemplate.background === "#323b4c" ||
                  selectedTemplate.background === "#3C4240" ||
                  selectedTemplate.background === "#6D493B" ||
                  selectedTemplate.background === "#8D4B55" ||
                  selectedTemplate.background === "#6B9999")
                  ? "#fff"
                  : "#000",
            }}
          >
            <div className="image-detail">
              <Avatar
                sx={{ width: 200, height: 200 }}
                src={`/images/${candidate.image}`}
              />
            </div>
            <div className="contact-field">
              <h4>Contact</h4>
              <p>
                Phone:{" "}
                {candidate.phone ? (
                  <a
                    href={`tel:${candidate.phone}`}
                    style={{
                      backgroundColor: selectedTemplate?.background,
                      color:
                        selectedTemplate &&
                        (selectedTemplate.background === "#323b4c" ||
                          selectedTemplate.background === "#3C4240" ||
                          selectedTemplate.background === "#6D493B" ||
                          selectedTemplate.background === "#8D4B55" ||
                          selectedTemplate.background === "#6B9999")
                          ? "#fff"
                          : "#000",
                    }}
                    className="tel-number"
                  >
                    {candidate.phone}
                  </a>
                ) : (
                  "-"
                )}
              </p>
              <p>
                Email:<span>{candidate.email || "-"}</span>
              </p>
              <p>
                Address:<span>{candidate.address || "-"}</span>
              </p>
              <p>
                Gender:<span>{candidate.gender || "-"}</span>
              </p>
            </div>
            <div className="education-field">
              <h4>Education</h4>
              <div className="education-container">
                {education?.map((edu, index) => (
                  <ul key={index}>
                    <li>{edu || "-"}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="skills-field">
              <h4>Skills</h4>
              <div className="skills-container">
                {skills?.map((skill, index) => (
                  <ul key={index}>
                    <li>{skill || "-"}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="lang-field">
              <h4>Languages</h4>
              <p>{candidate.languages || "-"}</p>
            </div>
            <Button
              onClick={() => {
                setOpen(true);
                setFirstName(candidate.firstName);
                setLastName(candidate.lastName);
                setRole(candidate.role);
                setCandDescription(candidate.candDescription);
                setExperience(candidate.experience);
                setPhone(candidate.phone);
                setEmail(candidate.email);
                setAddress(candidate.address);
                setEducation(candidate.education);
                setSkills(candidate.skills);
                setPortfolio(candidate.portfolio);
                setLanguages(candidate.languages);
                setGender(candidate.gender);
                setTemplate(candidate.template);
                console.log(candidate.portfolio);
              }}
            >
              Update
            </Button>
          </div>
          <div className="candidate-flex-right">
            <div className="name-field">
              <h2>
                {candidate.lastName || "-"}{" "}
                <span>{candidate.firstName || "-"}</span>
              </h2>
            </div>
            <div className="role-field">
              <p>{candidate.role || "-"}</p>
            </div>
            <div className="description-field">
              <p>{candidate.candDescription || "-"}</p>
            </div>
            <div className="experience-field">
              <h4>Experience</h4>
              <div className="experiences-container">
                {experience?.map((experience, index) => (
                  <ul key={index}>
                    <li>{experience || "-"}</li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="portfolio-field">
              <h4>Portfolio</h4>
              <div className="portfolio-text">
                <h5>My Work</h5>

                {portfolio && portfolio.length > 0 ? (
                  <ul>
                    {portfolio.map((portf, index) => (
                      <li key={index}>{portf ? makeLink(portf) : "-"}</li>
                    ))}
                  </ul>
                ) : (
                  "-"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        sx={{
          overflow: "auto",
          padding: "50px 0px",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            bgcolor: candidate.template,
            boxShadow: 24,
            p: 2,
            width: "80%",
            margin: "0 auto",
            position: "relative",
          }}
          style={{
            backgroundColor: template,
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
          <h2>Update Candidate</h2>
          <form onSubmit={handleUpdate(id)}>
            <div className="form-flex">
              <div className="form-flex-left">
                <div className="up-fn">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    type="text"
                    id="firstname"
                    value={firstName ? firstName : ""}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="up-ln">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    id="lastname"
                    value={lastName ? lastName : ""}
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className="up-role">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    value={role ? role : ""}
                    onChange={handleRoleChange}
                  />
                </div>
                <div className="up-desc">
                  <label htmlFor="desc">Description:</label>
                  <input
                    type="text"
                    id="desc"
                    value={candDescription ? candDescription : ""}
                    onChange={handleCandDescriptionChange}
                  />
                </div>
                <div className="up-phone">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone ? phone : ""}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="up-email">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email ? email : ""}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="up-address">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    value={address ? address : ""}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="up-lang">
                  <label htmlFor="languages">Lang:</label>
                  <input
                    type="text"
                    id="languages"
                    value={languages ? languages : ""}
                    onChange={handleLangChange}
                  />
                </div>
                <div className="up-gender">
                  <label htmlFor="gender">Gender:</label>
                  <input
                    type="text"
                    id="gender"
                    value={gender ? gender : ""}
                    onChange={handleGenderChange}
                  />
                </div>
                <div className="up-photo">
                  <label>Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    onChange={onFileChangeHandler}
                  />
                </div>
              </div>
              <div className="form-flex-right">
                <div className="up-exp">
                  <label htmlFor="experience">Experience:</label>
                  {experience?.length === 0 ? (
                    <div>
                      <button type="button" onClick={addExperience}>
                        Add Experience
                      </button>
                    </div>
                  ) : (
                    experience?.map((exp, index) => (
                      <div key={index}>
                        <label>Experience {index + 1}: </label>
                        <textarea
                          type="text"
                          id="experience"
                          value={exp ? exp : ""}
                          onChange={(e) =>
                            handleNewExperience(index, e.target.value)
                          }
                        />
                        <button type="button" onClick={addExperience}>
                          Add Experience
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteExperience(index)}
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="up-ed">
                  <label htmlFor="edu">Education:</label>
                  {education?.length === 0 ? (
                    <div>
                      <button type="button" onClick={addEducation}>
                        Add Education
                      </button>
                    </div>
                  ) : (
                    education?.map((edu, index) => (
                      <div key={index}>
                        <label>Education {index + 1}: </label>
                        <input
                          type="text"
                          id="edu"
                          value={edu ? edu : ""}
                          onChange={(e) =>
                            handleNewEducation(index, e.target.value)
                          }
                        />
                        <button type="button" onClick={addEducation}>
                          Add Education
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteEducation(index)}
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="up-skills">
                  <label htmlFor="skills">Skills:</label>
                  {skills?.length === 0 ? (
                    <div>
                      <button type="button" onClick={addSkill}>
                        Add Skills
                      </button>
                    </div>
                  ) : (
                    skills?.map((skill, index) => (
                      <div key={index}>
                        <label>Skill {index + 1}: </label>
                        <input
                          type="text"
                          id="skills"
                          value={skill ? skill : ""}
                          onChange={(e) =>
                            handleNewSkill(index, e.target.value)
                          }
                        />
                        <button type="button" onClick={addSkill}>
                          Add Education
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteSkill(index)}
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="up-portf">
                  <label htmlFor="portf">Portfolio:</label>
                  {portfolio?.length === 0 ? (
                    <div>
                      <button type="button" onClick={addPortf}>
                        Add Portfolio
                      </button>
                    </div>
                  ) : (
                    portfolio?.map((portf, index) => (
                      <div key={index}>
                        <label>Portfolio {index + 1}: </label>
                        <input
                          type="text"
                          id="portf"
                          value={portf ? portf : ""}
                          onChange={(e) =>
                            handleNewPortf(index, e.target.value)
                          }
                        />
                        <button type="button" onClick={addPortf}>
                          Add Portfolio
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeletePortf(index)}
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="up-template">
                  <label htmlFor="template">Template:</label>
                  <div className="colors-cont">
                    {templates.map((temp, index) => (
                      <div
                        key={index}
                        className="colors"
                        style={{
                          backgroundColor: temp.background,
                          border:
                            template === temp.background
                              ? "4px solid rgba(0,0,0,0.7)"
                              : "none",
                        }}
                        onClick={() => handleTemplateChange(temp.background)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <button type="submit">Update</button>
            </div>
          </form>
          <button
            style={{
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
            className="close-modal-btn"
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default CvDetail;
