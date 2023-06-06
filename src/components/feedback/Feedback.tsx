import { faFaceFrown, faHeart, faPaperPlane, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import {img} from '../../Data/image'
export default function FeedBack(props: { bg: string,text:string }) {

  const [mobilemsg,setmsg]=React.useState('')
  const [count, setCount] = React.useState("Loading...");
  const [Loading, setLoading] = React.useState(true);
  const [feedinfo, setFeed] = React.useState({
  Email: "",
  Feedback: "",
});
const [btn,setbtn]=React.useState({
  names:"Send",
  color:"primary",
  icon:faPaperPlane
})
const handle = (e: any) => {
  setFeed({...feedinfo,[e.target.id]:e.target.value})
  setbtn({
    names:"Send",
    color:"primary",
    icon:faPaperPlane
  })
};
const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  let userEmail:string=feedinfo.Email;
  let userFeedback:string=feedinfo.Feedback;
  if (!(userEmail===''||userFeedback==='')){
    window.open(`mailto:marieswaranbmw@gmail.com?subject=Feedback from ${userEmail}&body=${userFeedback}`);
   setFeed({Email:'',Feedback:''})
  }
  else{
        setbtn({
          names:"Please fill all the info",
          color:"danger",
          icon:faFaceFrown
        })
  }
}
  // async function websiteVisits() {
  //   try {
  //     const response = await axios.get(
  //       "https://api.countapi.xyz/hit/marieswaran.in/984b31b5-b2ff-4f89-a9db-9d0abaabcdcd"
  //     );
  //     const data = response.data.value;
  //     return data;
  //   } catch (error) {
  //       return error;
  //   }
  // }
  // React.useEffect(() => {
  //   if (Loading) {
  //     // const fetchData = async (): Promise<Number> => {
  //       setLoading(false);
  //     //   const result = await websiteVisits();
  //     //   setCount(result);
  //     //   return result;
  //     // };
  //     // fetchData();
  //   const pick = Math.floor(Math.random() * 100);
  //   console.log(pick);
  //   localStorage.setItem('count',`${pick}`)
  //   setCount(localStorage.getItem('count') as string)

  //   }
  // },[Loading]);
  function shownotification(){
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if(isMobileDevice){
        setmsg('Sorry, Currently this feature supports only on Desktop :(' )
        setTimeout(()=>{
          setmsg('Anyways,Have a nice day!')
        },1000)
    }
    if(!("Notification" in window)){
      throw new Error("This Browser doesn't support notification")
    }
    else{
      Notification.requestPermission().then((permission)=>{
        new Notification("Hey Buddy",{
          body:"Thanks your visit,Have a nice day",
          icon:img[1]
        })
      })
    }
  }
  function gotoxoxo(){
    window.open('https://marieswaran25.github.io/Tic-tac-toe','_blank')
  }
  return (
    <Container className={`bg-${props.bg} text-${props.text}`}>
      <div style={{ height: "auto", marginTop: "50px" }}id="feedback">
        <div className="row">
          <div className="col-12 col-md-5 content">
            <div style={{ position: "relative" }}>
              <h4 style={{fontFamily: 'Trade Winds,cursive', fontSize:"large"}}>"We all need people who will give us feedback.."</h4>
              <Card bg={props.bg} style={{height: "250px",width: "100%",marginTop: "30px"}} className="content" id={`myimage2-${props.bg}`}>
                <h1 style={{ fontSize: "80px" }} className={`text-${props.text}`}>{count}</h1>
                <h6 className="text-info">Thanks for all the visitors!</h6>
                <div className="content mt-2" style={{"gap":"15px"}}>
                <Button className="btn btn-secondary" style={{"borderRadius":"100px"}}onClick={e=>shownotification()}>Greetings <FontAwesomeIcon icon={faHeart} /></Button>
                <Button className="btn btn-secondary" style={{"borderRadius":"100px"}}onClick={e=>gotoxoxo()}>Play Game <FontAwesomeIcon icon={faPlay} /></Button>
                </div>

                <h6 className="text-muted mt-3" style={{fontSize:"15px"}}>{mobilemsg}</h6>
              </Card>
            </div>
          </div>
          <div className="col-12 col-md-7 content" style={{"marginTop":"30px"}}>
            <Card bg={props.bg} style={{ width: "90%",border:"none" }}>
              <Form className={`mb-4 pt-3 bg-${props.bg} text-${props.text}`}style={{ width: "auto" }}autoComplete="off" onSubmit={e=>{handlesubmit(e)}}>
                <Form.Group className="mb-4">
                  <Form.Label className={`text-${props.text}`} style={{fontFamily:"'Be Vietnam Pro', sans-serif"}}>Enter the Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter the Email" id="Email" style={{ height: "50px" }} value={feedinfo.Email} onChange={e=>{handle(e)}}/>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className={`text-${props.text}`} style={{fontFamily:"'Be Vietnam Pro', sans-serif"}}>Enter your Feedback</Form.Label>
                  <Form.Control as={"textarea"} placeholder="Note down your feedback :)" id="Feedback" style={{ height: "100px" }} value={feedinfo.Feedback} onChange={e=>{handle(e)}}/>
                </Form.Group>
                <Button variant={btn.color}type="submit" style={{ width: "100%" ,height:"40px",fontFamily: "'Lexend Peta', sans-serif",fontSize:"small"}}className="Submit mb-5">{btn.names} <FontAwesomeIcon icon={btn.icon} /></Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
