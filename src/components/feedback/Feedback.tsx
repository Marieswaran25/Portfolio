import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
export default function Connect() {
  return (
    <Container>
      <div style={{ height: "70vh", marginTop: "100px" }}>
        <div className="row">
        <div className="col-12 col-md-5 content">
            <div style={{ position: "relative" }}>
              <h4>"We all need people who will give us feedback.."</h4>
            </div>
          </div>

          <div className="col-12 col-md-7 content" >
              <Card bg="dark" style={{"width":"50%"}}>
              <Form
                  className="mb-4 pt-3"
                  style={{ width: "auto"}}
                  autoComplete="off"
                >
                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">
                      Enter Your Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      id="Email"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Feedback</Form.Label>
                    <Form.Control as={"textarea"}
                      placeholder="Enter your feedback"
                      id="feedback"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
      

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                    className="Submit mb-5"
                  >
                    Send <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </Form>
              </Card>
            </div>
          </div>
        
        </div>
    </Container>
  );
}
