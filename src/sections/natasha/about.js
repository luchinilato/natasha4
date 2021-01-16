import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC3 from "../../assets/image/conference/png/content-3-img.png";
import imgCD from "../../assets/image/conference/png/fill-dot-red.png";
import imgCR from "../../assets/image/conference/png/content-3-round.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section content-section-3 bg-default-6 py-13 pt-lg-19 pb-lg-19">
        <Container>
          <Row className="align-items-center justify-content-center">
            
            <Col sm="10" lg="12" xl="12">
              <div className="content-text">
                <h2 className="gr-text-4 mb-9 justify-content-center">
                  Quem sou eu? 
                  {/* <br className="d-none d-lg-block" />
                  leaving your room. */}
                </h2>
                <p className="gr-text-8 justified">
                    Instrutora e Terapeuta, Biomédica, Mestre, Doutoranda em Ciências e Biotecnologia na área de Virologia. 
                    Sempre fui apaixonada por entender como o mecanismo do sistema humano funcionava por uma visão científica. 
                </p>
                
                <p className="gr-text-8 justified">
                    Mas há alguns anos eu comecei a meditar e a buscar o autoconhecimento, assim conheci o ThetaHealing®️ e 
                    percebi que existia algo além do que eu estudava, as crenças. 
                    Logo, eu entendi que era possível modificar meus sistemas de crenças e padrões para viver 
                    a vida que eu desejava. Nesse período pude me especializar e aprofundar meu conhecimento com os
                     cursos: DNA Básico, DNA Avançado, Aprofundando no Digging, Manifestação e Abundância, 
                     Anatomia Intuitiva, Você e o Criador, Você e o seu Ciclo Íntimo e Jogo da Vida. Também sou 
                     instrutora do DNA Básico e DNA Avançado, Aprofundando Digging e Manifestação e Abundância. 
                </p>

                <p className="gr-text-8 justified">
                    Além disso, sou Cristaloterapeuta, terapeuta Multidimensional, trabalho com Mesa Radiônica, 
                    Método Melchizedek, Aromaterapia Clássica, Aromaterapia Psicossomática, Aromaterapia Sutil 
                    energética e também sou facilitadora de Barras de Access™️.
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
