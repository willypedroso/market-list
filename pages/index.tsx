import { useEffect, useRef, useState } from "react";

import Product from "../components/core/Product";

import Header from "../components/Header";
import Form from "../components/Form";
import Table from "../components/Table";

import { Body, Main } from "../components/Styleds";

export default function Home() {

  const [productName, setProductName] = useState('');
  const [productQtd, setProductQtd] = useState('');
  const [productPrice, setProductPrice] = useState('');
    
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const [showTable, setShowTable] = useState(false);

  const prodInput = useRef<HTMLInputElement>(null)
    
  function handleClickButton() {
    if(productName == '' || productQtd == '' || productPrice == '') {
      alert('All the fields has to be filled.')
    } else {
      const newProduct = new Product(productName, +productQtd, +productPrice);
      const allProducts = [...products, newProduct];
      setProducts(allProducts);
      setProductName('');
      setProductQtd('');
      setProductPrice('');
      if(!showTable) {
        setShowTable(true);
      }
      calculateValue(allProducts);
    }
  }

  function calculateValue(prods) {
    const value = prods.map((prod => prod.qtd * prod.price))
      .reduce((a,b) => a+b).toFixed(2);
    
    setTotalValue(value);
  }

  function removeProd(i) {
    products.splice(i,1);
    setProducts(products);
    if(products.length == 0) {
      setShowTable(false);
    } else {
    calculateValue(products);
    }
  }

  function keyHandler (e) {
    if(e.key == 'Enter') {
        handleClickButton();
        prodInput?.current.focus();
    }
  }

  useEffect(() => {
    if(prodInput.current) {
      prodInput.current.focus();
    }
  }, [])

  return (
     <Body>
      <title>Market List</title>
       <Main>
          <Header />
          <Form
            productName={productName} productQtd={productQtd} productPrice={productPrice}
            setProductName={setProductName} setProductQtd={setProductQtd} setProductPrice={setProductPrice}
            handleClickButton={handleClickButton} prodInput={prodInput} keyHandler={keyHandler}
          />
          { showTable ? <Table products={products} totalValue={totalValue} removeProd={removeProd} /> : false }
        </Main>
     </Body>  
  )
}
