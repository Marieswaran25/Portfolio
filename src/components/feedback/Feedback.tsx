import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
// import { data } from "../../Data/social";
export default function FeedBack() {
  const [count, setCount] = React.useState("Loading...");
  const [Loading, setLoading] = React.useState(true);
 const [feedinfo, setFeed]: any = React.useState({
  Email: "",
  Feedback: "",
});
const handle = (e: any) => {
  setFeed({...feedinfo,[e.target.id]:e.target.value})
};
const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  const userEmail=feedinfo.Email;
  const userFeedback=feedinfo.feedback;
  window.open(`mailto:marieswaranbmw@gmail.com?subject=Feedback from ${userEmail}&body=${userFeedback}`);
}
  async function websiteVisits() {
    try {
      const response = await axios.get(
        "https://api.countapi.xyz/hit/marieswaran.in/984b31b5-b2ff-4f89-a9db-9d0abaabcdcd"
      );
      const data = response.data.value;
      return data;
    } catch (error) {
      return error;
    }
  }
  React.useEffect(() => {
    if (Loading) {
      const fetchData = async (): Promise<Number> => {
        setLoading(false);
        const result = await websiteVisits();
        setCount(result);
        return result;
      };
      fetchData();
    }
  });
  return (
    <Container>
      <div
        style={{ height: "auto", marginTop: "50px" }}
        className=""
        id="feedback"
      >
        <div className="row">
          <div className="col-12 col-md-5 content">
            <div style={{ position: "relative" }}>
              <h4>"We all need people who will give us feedback.."</h4>
              <Card
                bg="dark"
                style={{
                  height: "250px",
                  width: "100%",
                  boxShadow: "10px 10px 30px rgb(26, 26, 26)",
                }}
                className="content"
              >
                <h1 style={{ fontSize: "80px" }}>{count}</h1>
                <h6 className="text-info">Thanks for all the visitors!</h6>
              </Card>
            </div>
          </div>

          <div className="col-12 col-md-7 content" style={{"marginTop":"30px"}}>
            <Card bg="dark" style={{ width: "90%" }}>
              <Form
                className="mb-4 pt-3"
                style={{ width: "auto" }}
                autoComplete="off"
                onSubmit={e=>{handlesubmit(e)}}
              >
                <Form.Group className="mb-4">
                  <Form.Label className="text-light">
                    Enter Your Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    id="Email"
                    style={{ height: "50px" }}
                    value={feedinfo.Email}
                    onChange={e=>{handle(e)}}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-light">Feedback</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    placeholder="Enter your feedback"
                    id="Feedback"
                    style={{ height: "100px" }}
                    value={feedinfo.Feedback}
                    onChange={e=>{handle(e)}}
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
