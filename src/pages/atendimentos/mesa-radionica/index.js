import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../../../components/PageWrapper";
// import Hero from "./components/Hero";
import Hero from "../../../sections/atendimentos/mesa-radionica/Hero";
import ParaQueServe from "../../../sections/atendimentos/mesa-radionica/ParaQueServe";
import OqueE from "../../../sections/atendimentos/mesa-radionica/OqueE";
import ComoFunciona from "../../../sections/atendimentos/mesa-radionica/ComoFunciona";
import About from "../../../sections/atendimentos/mesa-radionica/About";
import Preco from "../../../sections/atendimentos/mesa-radionica/Preco";
import Contact from "../../../sections/atendimentos/mesa-radionica/Contact";
// import About from "../../../sections/natasha/About";
// import ParaQuerServe from "../../../sections/atendimentos/mesa-radionica/ParaQuerServe";
// import Oque from "../../sections/natasha/cursos/interno/Oque";
// import Faq from "../../sections/natasha/cursos/interno/Faq";
// import VoceAprendera from "../../sections/natasha/cursos/interno/VoceAprendera";
// import VocePode from "../../sections/natasha/cursos/interno/VocePode";
// import Preco from "../../sections/natasha/cursos/interno/Preco";
// import Contact from "../../sections/natasha/Contact";

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
          nomeCurso:"Mesa Radiônica"
        }} />
        <OqueE />
        <ParaQueServe />
        <ComoFunciona />
        <About />
        <Preco />
        <Contact />
        {/* 
        
        <Faq />
        <VoceAprendera />
        <VocePode />
        <Preco />
        <Contact params={{
          from:"thetahealing-dna-basico"
        }} />
         */}

      </PageWrapper>
    </>
  );
};

export default Pagina;