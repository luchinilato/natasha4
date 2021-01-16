import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/natasha/Hero";
// import About from "../sections/natasha/About";
// import Services from "../sections/natasha/Services";
// import Contadores from "../sections/natasha/Contadores";
// import Testimonials from "../sections/natasha/Testimonials";

const IndexPage = () => {
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
        <Hero />
        {/* <About />
        <Services />
        <Contadores />
        <Testimonials /> */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
