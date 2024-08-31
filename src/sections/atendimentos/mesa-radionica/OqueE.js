import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../../assets/image/l1/png/l1-content1-img.png";

const OqueE = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-12 pb-13 pt-lg-21 pb-lg-22 bg-default-6">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="5" className="pr-lg-9">
              <div className="content-text">
                <h2 className="gr-text-4 mb-8">
                  O que é a Mesa Radiônica?
                </h2>
                <p className="gr-text-8 pr-4 mb-11">
                  A Mesa Radiônica é uma terapia de cura energética, que possibilita a mudança do campo vibracional do paciente/ objeto (seja uma pessoa, um animal, um objeto ou uma residência). Mas não podemos aprofundar esse assunto, sem antes entendermos de onde tudo isso começou, na radiestesia.
                </p>
                {/* <div className="content-btn">
                  <Button className="with-icon gr-hover-y">
                    Get started for free
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </Button>
                </div> */}
              </div>
            </Col>
            <Col sm="10" lg="6" className="offset-lg-1 mt-10 mt-lg-0">
              <div
                className="content-img img-group-1"
                data-aos="zoom-in"
                data-aos-duration="750"
              >
                <img className="img-fluid" src={imgC} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OqueE;
