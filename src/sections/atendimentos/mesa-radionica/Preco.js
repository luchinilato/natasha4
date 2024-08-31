import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import CartContext from "../../../context/CartContext";


const Pricing = () => {
  const { product, setProducts } = useContext(CartContext);
  const defaultItems = [{
      id: 2,
      title: 'danone',
      img: null,
      qty: 2,
      price: 333,
    }];

  const createProduct = (product, avista_parcelado) => {
    product.avista_parcelado = avista_parcelado;
    setProducts(product);
  };
    
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section pt-14 pb-9 pt-lg-25 pb-lg-0 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-12 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">
                  Valor do investimento
                </h2>
                {/* <p className="gr-text-8 px-lg-7 px-xl-0">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p> */}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Parcelado
                </span>
                <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7 mt-8">
                  12x de 
                </p>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-0">
                  R$153,00 
                </h2>
                
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Parcelamento no cartão de crédito
                  </li>
                </ul>
                <Link href="/pagamento" >
                  <Button className="gr-hover-y w-100 mt-7 gr-text-9" onClick={() => createProduct(defaultItems, 1)}>
                    Quero pagar parcelado
                  </Button>
                </Link>
                {/* <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                  No credit card required
                </span> */}
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
            
            <Col lg="6" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  À Vista
                </span>
                <p className="gr-text-9 mb-0 gr-color-blackish-blue-opacity-7 mt-8">
                  Pagamento único de
                </p>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-0">
                  R$1487,00
                </h2>
                {/* <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  per year
                </p> */}
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Pagamento via Doc, Ted ou Pix
                  </li>
                  
                </ul>
                <Link href="/pagamento">
                  <Button className="gr-hover-y w-100 mt-7 gr-text-9" onClick={() => createProduct(defaultItems, 0)}>
                    Quero pagar à vista
                  </Button>
                </Link>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
