import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
        <div className="inner-banner pt-29 pb-md-11 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                <h2 className="title gr-text-4">Restou alguma dúvida?</h2>
                  <p className="gr-text-8 mb-13">
                    Estamos à sua disposição para esclarecer qualquer dúvida.


                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-25 bg-default-2 ">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="mb-9">
                <Row>
                  <Col md="5" lg="6" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                        <i className="icon icon-phone-2"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5">Celular/Whatsapp</h3>
                        <p className="gr-text-7 mb-0">
                          (21) 97977-4333
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="6" className="mb-13">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                        <i className="icon icon-email-83"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5">Email</h3>
                        <p className="gr-text-7 mb-0">
                          contato@natasharocha.com.br
                        </p>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
              </Col>
              <Col xs="12">
                <div className="login-form bg-white border-gray-3 px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-1 rounded-10">
                  <form
                    name="contact2"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact2" />
                    <Row>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Nome
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="João Silva"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="email"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Email
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="joao@gmail.com"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="phone"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Celular
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="(21) 99999-9999"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="subject"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Assunto
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Eu preciso de ajuda"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="message"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Mensagem
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control gr-text-11 border-gray-3 gr-textarea-height"
                            required
                          ></textarea>
                        </div>
                      </Col>
                      <Col xs="3">
                        <div className="form-group button-block mt-3 ">
                          <Button
                            className="form-btn btn btn-primary w-100"
                            type="submit"
                          >
                            Enviar
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
};

export default Contact;
