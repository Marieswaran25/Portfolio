import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card, Button } from "react-bootstrap";

function Experiance() {
    function navToprenetics(){
        window.open('https://www.prenetics.com/','_blank')
    }
  return (
    <Container>
      <div style={{ height: "auto","marginTop":"50px"}} className="content" id="experiance">
        <div className="row" >
          <div className="col-12 col-md-6 content">
            <div>
              <h4>
                "Experiance is Knowledge.All the rest are Information"
              </h4>
              <h5>-Albert Einstein</h5>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div style={{ position: "relative","marginTop":"30px"}}>
              <Card bg="dark">
                <div className="content2" style={{"width":"90%"}}>
                <h2 style={{"color":"rgb(28, 199, 28)"}}>Prenetics Innovation Labs</h2>
                <p className="text-muted">Chennai</p>
                </div>
                <h6 className="text-muted">Aug2022-Apr2023</h6>

                <h6 className="text-warning">Trainee Engineer</h6>
                <ul>
                  <li>
                    I have been worked as a Backend Support mainly concentrating
                    to resolve the issues on Customer's end and Product flow
                    through Db queries and API endpoints.
                  </li>
                  <li>
                    Performed Root cause analysis and Troubleshooting using
                    Kibana and AWS.
                  </li>
                  <li>
                    Developed and implemented tests for Automating Product
                    flows.
                  </li>
                  <li>
                    Developed and associate with feature Environment on the
                    product and internal Application demands.
                  </li>
                  <li>Collaborated Effectively in Product Development along with
                  diverse culture of people.</li>
                </ul>
                <Button className="btn btn-dark" onClick={e=>{navToprenetics()}}>Info <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Experiance;
