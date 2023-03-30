import { Card, Container, ProgressBar } from "react-bootstrap";
const skilldata = require("../../Data/skillData.json");

function SkillSet() {
  return (
    <Container>
      <div style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6 content">
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
