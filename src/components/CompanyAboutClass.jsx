import React from "react";

class CompanyAboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "Developer",
      adminData: {
        name: "",
        bio: "",
        avatar_url: "",
      },
      //   count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prsna1230");
    const json = await data.json();
    this.setState({
      adminData: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    console.log("component rendered");
    const { avatar_url, name, bio } = this.state.adminData;
    return (
      <div className="user-card">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button> */}
        <img src={avatar_url} alt="avatar_url" width="100px" />
        <h2>Name: {name}</h2>
        <h3>Role: Developer</h3>
        <h3>bio: {bio}</h3>
        <h3>mail: ajithkumre21@gmail.com</h3>
      </div>
    );
  }
}

export default CompanyAboutClass;
