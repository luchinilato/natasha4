import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section content-section-3 bg-default-6 py-13 pt-lg-19">
        <Container>
          
          <Row className="justify-content-center">
            <Col xl="5" lg="6" md="8">
              <div className="section-title text-center mb-13 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">O que é?</h2>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-center">
            
            <Col sm="10" lg="12" xl="12">
              <div className="content-text">
                {/* <h2 className="gr-text-4 mb-9 ">
                  O que é?
                </h2> */}
                <p className="gr-text-8 justified">
                  É uma técnica de cura energética que te ensina a identificar e liberar as crenças e os padrões que 
                  te impedem de ser feliz. Através dessa prática terapêutica de cura energética o terapeuta acessa a 
                  frequência “Theta” e com a permissão do paciente retira os bloqueios e as crenças limitadoras de seu 
                  sistema, substituindo-os por crenças potencializadoras para uma nova realidade. 
                </p>
                
                <p className="gr-text-8 justified">
                Evidências científicas demonstram que as nossas crenças e emoções negativas geram doenças físicas, 
                mentais e emocionais, com isso nos limitam de realizar algo que nos faz realmente feliz. O ThetaHealing® 
                pode te ajudar a liberar esses ressentimentos, tristezas antigas, culpas e medos profundos para resgatar 
                a sua capacidade inata de expressão da sua essência para viver a sua vida em seu potencial máximo. 
                A técnica é difundida em mais de 40 países e utilizada por mais de 500 mil pessoas. Só no Brasil são
                 mais de cinco mil pessoas que já transformaram as suas vidas através do ThetaHealing®. 
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
