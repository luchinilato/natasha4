import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgAS from "../../assets/image/l6/png/l6-download-appstore.png";
import imgGP from "../../assets/image/l6/png/l6-download-gplay.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <Container>
          
          <div className="copyright-area py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p className="copyright-text gr-text-11 mb-6 mb-lg-0 gr-text-color text-center text-lg-left">
                  © {(new Date().getFullYear())} Copyright, Todos os Direitos Reservados, por Luciano Chinilato
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-instant-camera-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="/#">
                      <a className="gr-text-color gr-hover-text-red">
                        <i className="icon icon-logo-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
