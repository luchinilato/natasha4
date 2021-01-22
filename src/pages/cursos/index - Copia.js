import React from "react";

import PageWrapper from "../../components/PageWrapper";

// import Hero from "../../sections/landing11/Hero";
import Hero from "../../sections/natasha/cursos/Hero";

import Fact from "../../sections/landing11/Fact";
import Services from "../../sections/landing11/Services";
import Content from "../../sections/landing11/Content";
import Alert from "../../sections/landing11/Alert";
import Testimonial from "../../sections/landing11/Testimonial";
import CTA from "../../sections/landing11/CTA";
import Newsletter from "../../sections/landing11/Newsletter";

const Cursos = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
            theme: "light",
            align: "right",
            button: null, // cta, account, null
        }}
        footerConfig={{
          theme: "light",
        }}
      >
        <Hero />
        <Fact />
        <Services />
        <Content />
        <Alert />
        <Testimonial />
        <CTA />
        <Newsletter />
      </PageWrapper>
    </>
  );
};

export default Cursos;
