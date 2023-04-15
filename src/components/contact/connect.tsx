import { Card, Container } from "react-bootstrap";
import { data } from "../../Data/social";
import "./connect.css";
export default function Connect(props: { bg: string,text:string }) {
  return (
    <Container className={`bg-${props.bg} text-${props.text}`}>
      <div style={{ height: "auto","marginTop":"30px"}} className="" id="contact">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1 content">
            <div style={{ position: "relative","marginTop":"30px" }}>
              <Card bg={props.bg} style={{"width":"auto",border:"none"}}>
                <div className="content" style={{"flexDirection":"row",gap:"30px",marginBottom:"50px"}}>
                  {data.map((val: any, index: any) => {
                    return (
                        <a style={{ textDecoration: "none" }} href={data[index].Link} key={`${index}`}>
                          <img src={data[index].image} alt={data[index].name} style={{ width: "35px", height: "35px" }} key={`${index}`}/>
                        </a>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
          <div className="col-12 col-md-6  order-1 order-md-2 content">
            <div style={{ position: "relative" }}>
              <h4 style={{fontFamily: 'Trade Winds,cursive', fontSize:"large"}}>"We Connect together , Grow together"</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
