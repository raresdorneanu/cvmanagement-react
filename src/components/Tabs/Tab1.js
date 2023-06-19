import "./Tab1.scss";
import picture1tab1 from "../../images/resume1.png";
import picture2tab1 from "../../images/resume2.png";
const Tab1 = () => {
  return (
    <div className="tab-container">
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture1tab1} alt="resume-pic" />
          <div className="tab-text">
            <h3>Perform CRUD Operations</h3>
            <p>
              Manage your CVs and Create, Read, Update and Delete any CV from
              the Database.
            </p>
          </div>
        </div>
      </div>
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture2tab1} alt="resume-pic" />
          <div className="tab-text">
            <h3>Easy to read</h3>
            <p>
              Our Dashboard Page helps you see all the CVs from the Database in
              a very comfortable and tidy way.
            </p>
          </div>
        </div>
      </div>
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture1tab1} alt="resume-pic" />
          <div className="tab-text">
            <h3>A Template Variety to Stand Out</h3>
            <p>
              Our website offers a simple and easy-to-use CV builder, allowing
              you to create a standout CV in minutes. Choose from a variety of
              professionally designed templates to best showcase your skills and
              experience. Sign up now to start building your perfect CV!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tab1;
