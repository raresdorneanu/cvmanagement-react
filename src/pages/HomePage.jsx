import "../styles/HomePage.scss";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Tab1 from "../components/Tabs/Tab1";
import Tab2 from "../components/Tabs/Tab2";
import Tab3 from "../components/Tabs/Tab3";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const handleStartCreatingClick = () => {
    navigate("/build");
  };
  const tabs = [
    { label: "Get Started", component: <Tab1 /> },
    {
      label: "Tips & Templates",
      component: <Tab2 />,
    },
    { label: "Resume Tips & Tricks", component: <Tab3 /> },
  ];
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-cover"></div>
        {props.children}
        <h6>CV Builder</h6>
        <h1 className="hero-title">CV Management App</h1>
        <div className="hero-text__box">
          <p className="hero-text">
            Employers may filter, engage, and employ applicants more quickly by
            using Cv Management app to help them save time. We also have a CV
            creator with a variety of incredible features and is both strong and
            simple to use. Boost your chances of getting an interview and{" "}
            <strong>beat out the competition.</strong>
          </p>
          <Button onClick={handleStartCreatingClick}>START CREATING</Button>
        </div>
      </div>
      <div className="tabs-container">
        <Tabs
          className="tabs-flex"
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        <Box>{tabs[activeTab].component}</Box>
      </div>
    </div>
  );
};

export default HomePage;
