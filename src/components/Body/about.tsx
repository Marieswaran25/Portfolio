import * as React from "react";
import { Container } from "react-bootstrap";
import "./about.css";
export default class About extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ height: "auto"}} className="content" id="home">
            <div className="content" >
              <div className="row" >
                <div className="col-12 col-md-6 content">
                  <div>
                    <h1 className="display-4">Hey, I'm Marieswaran</h1>
                    <h4 className="text-muted context">
                      {" "}
                      Full stack Web Developer
                    </h4>
                    <p className="description">
                      To enhance my professional skills, capabilities and
                      knowledge in an organization which recognizes the value of
                      hard work and trusts me with responsibilities and
                      challenges.
                    </p>
                    <button className="text-light btn btn-dark hire">
                      Contact me!
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6 content">
                  <div className="content" style={{"marginTop":"30px"}}>
                    <img
                      id="myimage"
                      src={require("../Body/logo.jpg")}
                      alt="Myimage"
                      style={{
                        width: "70%",
                        height: "70%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    );
  }
}
