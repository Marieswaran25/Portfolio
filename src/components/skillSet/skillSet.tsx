import { Card, Container, ProgressBar } from "react-bootstrap";
import {social} from "../../Data/skillData.js";

function SkillSet(props: { bg: string,text:string }) {
  return (
    <Container className={` bg-${props.bg} text-${props.text}`}>
      <div style={{"height":"auto","marginTop":"50px"}}  id="skills">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1" style={{"marginTop":"30px"}}>
            <div>
              {social.map((val: any, index: any) => {
                return (
                  <Card bg={props.bg} key={`${index}`}
                  >
                    <Card.Body>
                    
                      <Card.Title style={{"display":"flex","gap":"10px"}}><img src={social[index].img} alt="" style={{"width":"30px","height":"30px"}}/>
                        {social[index].name}</Card.Title>
                      <Card.Text></Card.Text>
                      <ProgressBar
                        animated={true}
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
