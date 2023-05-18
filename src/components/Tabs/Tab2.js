import picture1tab2 from "../../images/resume1.png";
import picture2tab2 from "../../images/resume2.png";
import "./Tab1.scss";
const Tab2 = () => {
  return (
    <div className="tab-container">
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture1tab2} alt="resume-pic" />
          <div className="tab-text">
            <h3>Customizable Templates</h3>
            <p>
              Our CV builder allows you to customize templates to fit your
              unique style and personal brand. Add your own colors, fonts, and
              sections to create a truly personalized CV that stands out from
              the rest.
            </p>
          </div>
        </div>
      </div>
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture2tab2} alt="resume-pic" />
          <div className="tab-text">
            <h3>Expert Tips and Advice</h3>
            <p>
              Our website also provides expert tips and advice on creating a
              strong CV. From writing effective headlines to showcasing your
              accomplishments, we'll guide you through every step of the process
              to help you create a CV that gets noticed.
            </p>
          </div>
        </div>
      </div>
      <div className="tab-wrapper">
        <div className="tab-card">
          <img src={picture1tab2} alt="resume-pic" />
          <div className="tab-text">
            <h3>Accessible Anywhere</h3>
            <p>
              Our CV builder is accessible from any device, anywhere, so you can
              create and update your CV on the go. Plus, with cloud-based
              storage, your CVs are always safe and secure, so you never have to
              worry about losing your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tab2;
