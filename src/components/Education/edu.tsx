import { faCloudArrowDown, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";
const resume=require('./Marieswaran-Resume.pdf')

const education = require("./edu.json");
function downloadcv(){
  window.open(resume, '_blank');

}
function Education() {
  const [cardState, setCardState] = React.useState(false);
  const [cardindex, setCardindex] = React.useState(10);

  function displayInfo(num: any) {
    setCardState(true);
    setCardindex(num);
  }
  function displayOld(num: any) {
    setCardState(false);
    setCardindex(num)
  }

  return (
    <Container>
      <div style={{ height: "40vh" }}>
        <div className="row content">
          <div className="col-12 col-md-7 content">
            <div>
              <h4>
                "Develop a passion of learning,if you do,you will never cease to
                grow!"
              </h4>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div style={{ position: "relative" }}>
              {education.map((val: any, index: number) => {
                if (!cardState) {
                  return (
                    <Card
                      bg="dark"
                      className="content"
                      style={{ height: "100px" }}
                      onMouseEnter={(e) => {
                        displayInfo(index);
                      }}
                    >
                      <h4>{education[index].level} <FontAwesomeIcon icon={faGraduationCap} /></h4>
                    </Card>
                  );
                } else {
                  if (Number(cardindex) === index) {
                    return (
                      <Card
                        bg="dark"
                        className="content"
                        style={{ height: "100px" }}
                        onMouseLeave={(e) => {
                          displayOld(index);
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <h5>{education[cardindex].name}</h5>
                          <h5>{education[cardindex].dept}</h5>

                          <ProgressBar
                            now={education[cardindex].percent}
                            variant="success"
                            label={education[cardindex].percent + `%`}
                          />
                        </div>
                      </Card>
                    );
                  } else {
                    return (
                      <Card
                        bg="dark"
                        className="content"
                        style={{ height: "100px" }}
                        onMouseEnter={(e) => {
                          displayInfo(index);
                        }}
                      >
                        <h4>{education[index].level}  <FontAwesomeIcon icon={faGraduationCap} /></h4>
                      </Card>
                    );
                  }
                }
              })}
            </div>
            <Button
              className="btn-warning"
              style={{ borderRadius: "100px", marginTop: "20px" }}
              onClick={e=>downloadcv()}
            >
              Download CV <FontAwesomeIcon icon={faCloudArrowDown} />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Education;
