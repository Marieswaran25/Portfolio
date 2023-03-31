import React from "react";
import { Card, Container } from "react-bootstrap";
import { data } from "../../Data/social";
import "./connect.css";
export default function Connect() {
  return (
    <Container>
      <div style={{ height: "70vh", marginTop: "100px" }}>
        <div className="row">
          <div className="col-12 col-md-6 content2">
            <div style={{ position: "relative" }}>
              <Card bg="dark">
                <div className="content4">
                  {data.map((val: any, index: any) => {
                    return (
                      <div className="content3">
                        <a
                          style={{ textDecoration: "none" }}
                          className="text-light"
                          href={data[index].Link}
                        >
                          <img
                            src={data[index].image}
                            alt={data[index].name}
                            style={{ width: "35px", height: "35px" }}
                          />
                          <h5>{data[index].name}</h5>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div style={{ position: "relative" }}>
              <h4>"We Connect together,Grow together"</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
