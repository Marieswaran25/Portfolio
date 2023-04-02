import { Card, Container, ProgressBar } from "react-bootstrap";
import {social} from "../../Data/skillData.js";

function SkillSet() {
  return (
    <Container>
      <div style={{"height":"auto","marginTop":"50px"}} className="" id="skills">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div>
              {social.map((val: any, index: any) => {
                return (
                  <Card bg="dark">
                    <Card.Body>
                    
                      <Card.Title style={{"display":"flex","gap":"10px"}}><img src={social[index].img} alt="" style={{"width":"30px","height":"30px"}}/>
                        {social[index].name}</Card.Title>
                      <Card.Text></Card.Text>
                      <ProgressBar
                        now={Number(social[index].percent)}
                        variant="primary"
                        label={social[index].percent + `%`}
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
