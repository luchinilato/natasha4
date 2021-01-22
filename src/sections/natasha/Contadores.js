import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Contadores = () => (
  <>
    {/* <!-- Fact section --> */}
    <div className="fact-section bg-default-4 pt-lg-15 pb-7">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
            <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} end={200} />
                  </span>
                  +
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Alunos formados.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={4} end={400} />
                  </span>
                  +
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Pacientes atendidos.
              </p>
            </div>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
            <div className="single-fact text-center px-xl-6">
              <h3 className="title mb-7 gr-text-3">
                <LazyLoad>
                  <span className="counter">
                    <CountUp duration={3} decimal="." decimals={1} end={9.1} />
                  </span>
                  /10
                </LazyLoad>
              </h3>
              <p className="gr-text-8 mb-0">
                Média de retorno de pacientes atendidos
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Contadores;
