import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../../components/PageWrapper";
import Hero from "../../sections/natasha/cursos/interno/Hero";
import Oque from "../../sections/natasha/cursos/interno/Oque";
import ParaQuerServe from "../../sections/natasha/cursos/interno/ParaQueServe";
import Faq from "../../sections/natasha/cursos/interno/Faq";
import VoceAprendera from "../../sections/natasha/cursos/interno/VoceAprendera";
import VocePode from "../../sections/natasha/cursos/interno/VocePode";

const Pagina = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
            theme: "light",
            align: "right",
            button: null, // cta, account, null
          }}
          footerConfig={{
            style: "style3", //style1, style2
          }}
      >
        <Hero params={{
          nomeCurso:"ThetaHealing Dna Avançado"
        }} />
        <Oque />
        <ParaQuerServe />
        <Faq />
        <VoceAprendera />
        <VocePode />
        
      </PageWrapper>
    </>
  );
};

export default Pagina;