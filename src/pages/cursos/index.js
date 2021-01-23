import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../../components/PageWrapper";
import Locations from "../../sections/natasha/cursos/externo/Locations";
import Content1 from "../../sections/landing3/Content1";
import Feature from "../../sections/landing3/Feature";
import Content2 from "../../sections/landing3/Content2";
import CTA from "../../sections/landing3/CTA";

const CoWorking = () => {
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
        {/* <Hero /> */}
        {/* <Element name="elFact">
          <Fact />
        </Element> */}
        <Locations />
        {/* <Content1 />
        <Feature />
        <Content2 />
        <CTA /> */}
      </PageWrapper>
    </>
  );
};

export default CoWorking;