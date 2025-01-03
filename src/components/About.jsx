import CompanyAbout from "./CompanyAbout";
import CompanyAboutClass from "./CompanyAboutClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h3 class>About Us</h3>
//       {/* <CompanyAbout name={"prasanna (functional)"} /> */}
//       <CompanyAboutClass name={"prasanna (class)"} location={"bangalore"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About component constructor");
  }

  componentDidMount() {
    console.log("About component mounted");
  }

  render() {
    console.log("About component rendered");
    return (
      <div>
        <h3 class>About Us</h3>
        {/* <CompanyAbout name={"prasanna (functional)"} /> */}
        <CompanyAboutClass name={"prasanna (class)"} location={"bangalore"} />
      </div>
    );
  }
}

export default About;
