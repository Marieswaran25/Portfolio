import { Card, Container, ProgressBar } from "react-bootstrap";
const skilldata = require("../../Data/skillData.json");

function SkillSet() {
  return (
    <Container>
      <div style={{"height":"auto","marginTop":"50px"}} className="" id="skills">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div>
              {skilldata.map((val: any, index: any) => {
                console.log(skilldata[index].percent);
                return (
                  <Card bg="dark">
                    <Card.Body>
                      <Card.Title>{skilldata[index].name}</Card.Title>
                      <Card.Text></Card.Text>
                      <ProgressBar
                        now={skilldata[index].percent}
                        variant="primary"
                        label={skilldata[index].percent + `%`}
                      />
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 content">
            <div className="content">
              <h4>"Repeatition is the mother of skill"</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SkillSet;
