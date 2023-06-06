import * as React from "react";
import { Container } from "react-bootstrap";
import "./about.css";
import { img } from "../../Data/image";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About(props: { bg: string,text:string }) {
  const [image, setimg] = React.useState(img[1]);
  function changephoto() {
    // const pick = Math.floor(Math.random() * img.length);
    setimg(img[1]);
  }
  function gotocontact(){
    window.location.href='#contact'
  }
  return (
    <Container className={`bg-${props.bg} text-${props.text}`}>
      <div style={{ height: "auto", marginTop: "30px" }} id="home">
        <div className="content">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 content">
              <div className="content" style={{ marginTop: "30px" }}>
                <img
                  id={`myimage-${props.bg}`}
                  src={image}
                  alt={`Myimage`}
                  className="img-fluid"
                  onClick={(e) => changephoto()}
                  onMouseEnter={(e) => changephoto()}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 content">
              <div>
                <div>
                  <h1 className="description">Turning Vision into design and code.</h1>
                </div>
                <div style={{ marginTop: "4%" }}>
                  <h1 className="display-4 text-warning" >Hey, I'm Marieswaran</h1>
                  <h4 className={`text-${props.text} context mt-3`} style={{fontFamily: 'Trade Winds,cursive'}}>Full stack Web Developer</h4>
                  <p className='mt-3 text-muted' style={{fontFamily: 'Lexend Peta, sans-serif',fontSize:"18px"}}>Discover something new !!</p>
                  <button className={`text-light btn btn-secondary hire  mt-2`} style={{fontFamily: "'Lexend Peta', sans-serif",fontSize:"small"}} onClick={e=>gotocontact()}>
                    Contact me <FontAwesomeIcon icon={faPhone} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
