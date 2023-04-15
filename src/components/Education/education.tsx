import {faCloudArrowDown,faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Card, Button, ProgressBar } from "react-bootstrap";
const resume = require("./Marieswaran-Resume.pdf");
const education = require("./education.json");


function Education(props: { bg: string; text: string }) {

  const [cardState, setCardState] = React.useState(false);
  const [cardindex, setCardindex] = React.useState(10);

  function displayInfo(num: any) {
    setCardState(true);
    setCardindex(num);
  }
  function displayOld(num: any) {
    setCardState(false);
    setCardindex(num);
  }
  function downloadcv() {
    window.open(resume, "_blank");
  }

  return (
    <Container className={`bg-${props.bg} text-${props.text}`}>
      <div style={{ height: "auto", marginTop: "50px" }} id="education">
        <div className="row">
          <div className="col-12 col-md-6 content">
            <div>
              <h4 style={{fontFamily: 'Trade Winds,cursive', fontSize:"large"}}>"Develop a passion of learning , if you do,you will never cease to grow!"</h4>
            </div>
          </div>
          <div className="col-12 col-md-6" style={{ marginTop: "30px" }}>
            <div style={{ position: "relative" }}className="contentf">
              {education.map((val: any, index: number) => {
                if (!cardState) {
                  return (
                    <Card bg={props.bg} className="content" style={{ height: "100px" }}onMouseEnter={(e) => {displayInfo(index);}}key={`${index}`}>
                      <h4 style={{ fontFamily: "'Lexend Peta', sans-serif" }}><FontAwesomeIcon icon={faGraduationCap} /> {education[index].level}</h4>
                    </Card>
                  );
                } else {
                    if (Number(cardindex) === index) {
                      return (
                      <Card bg={props.bg} className="content" style={{ height: "100px" }} onMouseLeave={(e) => {displayOld(index);}}key={`${index}`}>
                        <div style={{ width: "100%" }}>
                          <div className="content2" style={{ width: "90%" }}>
                            <h5 style={{fontSize: "16px",fontFamily: "Trade Winds,cursive",whiteSpace:"nowrap"}}>{education[cardindex].name}</h5>
                          </div>
                          <h6 className="text-muted">{education[cardindex].dept}</h6>
                          <ProgressBar now={education[cardindex].percent} style={{ height: "19px" }}variant="success" label={education[cardindex].percent + `%`}/>
                        </div>
                      </Card>
                    );
                  } else {
                      return (
                        <Card bg={props.bg} className="content" style={{ height: "100px" }}onMouseEnter={(e) => {displayInfo(index);}}key={`${index}`}>
                          <h4 style={{ fontFamily: "'Lexend Peta', sans-serif" }}><FontAwesomeIcon icon={faGraduationCap} /> {education[index].level}</h4>
                        </Card>
                    );
                  }
                }
              })}
            </div>
            <Button id="download"className="btn-warning" style={{borderRadius: "100px",marginTop: "40px",fontFamily: "'Lexend Peta', sans-serif",fontSize:"small"}} onClick={(e) => downloadcv()}>
              Download CV <FontAwesomeIcon icon={faCloudArrowDown} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Education;
