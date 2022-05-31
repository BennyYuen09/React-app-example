import Welcome from "../components/Welcome"
import Counter from "../components/Counter";
import React from 'react';
import UniversityList from "../components/UniversityList";

const LandingPage = () => {
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
      <Welcome name="Benny" />
      {/* <Counter /> */}
      <UniversityList />
    </div>
  );
};

export default LandingPage;

