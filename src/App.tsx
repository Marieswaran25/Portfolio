import React from "react";
import Feedback from "./components/feedback/Feedback";
import About from "./components/Body/about";
import Connect from "./components/contact/connect";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import SkillSet from "./components/skillSet/skills";
import { Navbar, Container, Nav } from "react-bootstrap";
import { theme } from "./Data/theme";

function App() {
  
  const [bulb, setbulb] = React.useState(theme[1]);
  const [themes, settheme] = React.useState(false);
  const [bgcolor, setColor] = React.useState("dark");
  const [textcolor, settextcolor] = React.useState("light");

  function changeTheme() {
    if (!themes) {
      setbulb(theme[0]);
      settheme(true);
      setColor("light");
      settextcolor("dark");
    } else {
      setbulb(theme[1]);
      settheme(false);
      setColor("dark");
      settextcolor("light");
    }
  }
  return (
    <div className={`App bg-${bgcolor} text-${textcolor}`}>
      <Navbar expand="lg" bg={bgcolor} variant={bgcolor} className={`text-${textcolor}`}>
        <Container>
          <Navbar.Brand className="justify-content-center"><img src={bulb} alt={bgcolor} style={{ width: "30px", height: "40px" }} onClick={(e) => changeTheme()}/></Navbar.Brand>
          <Navbar.Brand href="" style={{ fontFamily: "Trade Winds,cursive" }}>Marieswaran</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <About bg={bgcolor} text={textcolor} />
      <Education bg={bgcolor} text={textcolor} />
      <SkillSet bg={bgcolor} text={textcolor} />
      <Experience bg={bgcolor} text={textcolor} />
      <Feedback bg={bgcolor} text={textcolor} />
      <Connect bg={bgcolor} text={textcolor} />
    </div>
  );
}

export default App;
