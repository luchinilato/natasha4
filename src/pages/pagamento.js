import React, { useContext } from "react";
import Link from "next/link";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import CartContext from "../context/CartContext";
import InputMask from "react-input-mask";

import {createCliente} from '../api/clientes';

async function fetchEntries() {
  // const entries = await client.getEntries({
  //   content_type: 'cursos'
  // })
  // console.log(entries.items);
  createCliente();
}

// const entries = await client.getEntries({
//   content_type: 'cursos'
// })
// console.log(client);

// Create entry
// clientManagement.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment-id>'))
// .then((environment) => environment.createEntryWithId('<content_type_id>', '<entry_id>', {
//   fields: {
//     title: {
//       'en-US': 'Entry title'
//     }
//   }
// }))
// .then((entry) => console.log(entry))
// .catch(console.error)

// // Update entry
// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment-id>'))
// .then((environment) => environment.getEntry('<entry_id>'))
// .then((entry) => {
//   entry.fields.title['en-US'] = 'New entry title'
//   return entry.update()
// })
// .then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
// .catch(console.error)




const proceedCheckout = (e) =>{
  
  fetchEntries();

}

const CartItem = ({ qty, price, img, title, handleRemove }) => {
  return (
    <>
      <li className="mb-5">
        <div className="d-flex position-relative p-6 border-gray-3 rounded-10 pr-12">
          {/* <div className="square-50 mr-6">
            <img
              src={img}
              alt=""
              css={`
                width: 50px;
                height: 50px;
              `}
            />
          </div> */}
          <div>
            <h3
              className="gr-text-9 mb-0 text-blackish-blue"
              css={`
                width: 275px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              `}
            >
              {title}
            </h3>
            <div className="bottom-texts d-flex justify-content-between">
              <span className="inline-block gr-text-12 font-weight-bold text-uppercase text-blackish-blue">
                {qty} item
              </span>
              <span className="inline-block gr-text-12 font-weight-bold text-bold text-blackish-blue">
                ${qty * price}
              </span>
            </div>
          </div>
          {/* <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleRemove();
            }}
            className="cross-btn gr-abs-cr mr-7 text-blackish-blue gr-text-8"
          >
            <i className="icon icon-simple-remove"></i>
          </a> */}
        </div>
      </li>
    </>
  );
};

const Checkout = () => {
  // const {insertProduct} = useContext(CartContext);
  const gCart = useContext(CartContext);
  // gCart.insertProduct({
  //   id: 2,
  //   title: 'asdasd',
  //   img: null,
  //   qty: 1,
  //   price: 300,
  // });
  console.log(gCart.products);
  
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
        <div className="inner-banner pt-29 pb-md-13 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9">Pagamento</h2>
                  {/* <p className="gr-text-8 mb-13">
                    {gCart.products.length} Items on your cart
                  </p> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pb-17 pb-md-29 ">
          <Container>
            <Row className="justify-content-md-between pt-9">
              <Col lg="7" xl="7">
                <div className="login-form bg-white border-gray-3 px-md-12 px-7 pt-12 pb-13 shadow-1 rounded-10 mb-9">
                  <h3 className="gr-text-7 font-weight-bold mb-8 text-blackish-blue">
                    Informações pessoais
                  </h3>
                  <form action="./">
                    <Row>
                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="name"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Nome Completo
                          </label>
                          <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="name"
                            placeholder="Maria Silva"
                          />
                        </div>
                      </Col>

                      <Col xs="12">
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
                            placeholder="maria@gmail.com"
                          />
                        </div>
                      </Col>

                      <Col xs="12">
                        <div className="form-group mb-7">
                          <label
                            htmlFor="phone"
                            className="gr-text-11 font-weight-bold text-blackish-blue"
                          >
                            Celular
                          </label>
                          <InputMask className="form-control gr-text-11 border"
                            type="text"
                            id="phone"
                            placeholder="(99) 99999-9999"
                            mask="(99) 99999-9999" />
                          
                          {/* <input
                            className="form-control gr-text-11 border"
                            type="text"
                            id="phone"
                            placeholder="(99)99999-9999"
                          /> */}

                        </div>
                      </Col>

                      

                      <Col xs="12">
                        <div className="button-block mt-3 ">
                          
                          <Button className="form-btn w-100" onClick={() => proceedCheckout()}>
                            Proceed to checkout
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              <Col sm="7" md="7" lg="5">
                <div className="bg-white px-7 pt-8 pb-9 rounded-10 ml-lg-8  ml-xl-19 mt-9 mt-md-0">
                  <h3 className="gr-text-12 font-weight-bold text-blackish-blue text-uppercase pb-7">
                    Detalhes
                  </h3>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between mb-5">
                      <span className="d-block gr-text-9 text-blackish-blue">
                        Total de Itens
                      </span>
                      <div className="d-flex gr-text-9">
                        <span className="d-inline-flex  pl-7 pt-5 position-relative mr-2 ">
                          <span className="border-0 p-0 w-100 h-100 gr-abs-tl gr-text-9 gr-text-opacity focus-reset pointer-none text-blackish-blue-opacity">
                            {gCart.products.length <= 9
                              ? `0${gCart.products.length}`
                              : gCart.products.length}
                          </span>
                        </span>
                        item
                      </div>
                    </li>

                    {gCart.products.map((product, index) => (
                      <CartItem
                        key={index}
                        qty={product.qty}
                        price={product.price}
                        title={product.title}
                        img={product.img}
                        handleRemove={() => gCart.removeProduct(product.id)}
                      />
                    ))}

                    <li className="d-flex justify-content-between mb-9">
                      <span className="d-block gr-text-9 text-blackish-blue">
                        Pagamento
                      </span>
                      <span className="d-flex gr-text-9 font-weight-mid text-green-shamrock">
                        { //Check if message failed
                          (gCart.products.avista_parcelado === 0)
                            ? <div> À vista</div> 
                            : <div> Parcelado </div> 
                        }
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="d-block gr-text-7 font-weight-bold text-blackish-blue">
                        Preço total
                      </span>
                      <span className="d-block gr-text-7 font-weight-bold text-blackish-blue">
                        $
                        {gCart.products.reduce(
                          (total, curr) => total + curr.qty * curr.price,
                          0
                        )}
                      </span>
                    </li>
                  </ul>
                  {/* <div className="px-1 pt-2">
                    <Button className="gr-text-9 w-100">
                      Proceed to checkout
                    </Button>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Checkout;
