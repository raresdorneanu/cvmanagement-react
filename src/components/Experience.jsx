import React from "react";

const Experience = ({
  index,
  data,
  handleExperienceChange,
  handleDeleteExperience,
}) => {
  const { jobTitle, period, jobDescription } = data;
  return (
    <div key={index}>
      <label>
        Job Title:
        <input
          type="text"
          value={jobTitle ? jobTitle : ""}
          onChange={(event) =>
            handleExperienceChange(index, "jobTitle", event.target.value)
          }
        />
      </label>
      <label>
        Period:
        <input
          type="text"
          value={period ? period : ""}
          onChange={(event) =>
            handleExperienceChange(index, "period", event.target.value)
          }
        />
      </label>
      <label>
        Job Description:
        <input
          type="text"
          value={jobDescription ? jobDescription : ""}
          onChange={(event) =>
            handleExperienceChange(index, "jobDescription", event.target.value)
          }
        />
      </label>
      <button type="button" onClick={() => handleDeleteExperience(index)}>
        Delete Experience
      </button>
    </div>
  );
};

export default Experience;
