import React, { useState } from "react";

import imgP1 from "../assets/image/inner/cart-product-image.png";
import imgP2 from "../assets/image/inner/cart-product-image-2.png";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const defaultItems = [
    {
      id: 1,
      title: null,
      img: null,
      qty: 3,
      price: null,
    }
  ];
  
  const [products, setProducts] = useState(defaultItems);

  const incProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId) {
        return { ...pr, qty: pr.qty + 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const decProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId && pr.qty > 0) {
        return { ...pr, qty: pr.qty - 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const insertProduct = (product) => {
    const newProduct = {
      id: product.id,
      title: product.title,
      img: product.img,
      qty: product.qty,
      price: product.price,
    };
    console.log(product);
    console.log(newProduct);
    // setProducts([...newProduct]);
    setProducts([...newProduct]);
    // setProducts([newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts([...products.filter(({ id }) => id !== productId)]);
  };

  const teste = () => {
    let newProds = [
      {
        id: 3,
        title: 'jaajajaja',
        img: null,
        qty: 1,
        price: 9999,
      }
    ];
    console.log(newProds);
    setProducts([...newProds]);
    
  }

  return (
    <CartContext.Provider
      value={{
        products,

        insertProduct,
        removeProduct,
        incProdQty,
        decProdQty,
        setProducts,
        teste
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
