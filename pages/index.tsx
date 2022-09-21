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

  const [firstBtnClick, setFirstBtnClick] = useState(false); // just check if button click once

  const prodInput = useRef<HTMLInputElement>(null)
    
  function handleClickButton() {
    if(productName == '' || productQtd == '' || productPrice == '') {
      alert('All the fields has to be filled.')
    } else {
      setFirstBtnClick(true);
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
      /* populateStorage(products, totalValue); */
    }
    prodInput?.current.focus();
  }

  function calculateValue(prods) {
    const value = prods.map((prod => prod.qtd * prod.price))
      .reduce((a,b) => a+b).toFixed(2);
    
    setTotalValue(value);
  }

  function removeProd(i) {
    setFirstBtnClick(true);
    products.splice(i,1);
    setProducts(products);
    if(products.length == 0) {
      setShowTable(false);
    } else {
      calculateValue(products);
    }
    prodInput?.current.focus();
    /* populateStorage(products, totalValue); */
  }

  function keyHandler (e) {
    if(e.key == 'Enter') {
        handleClickButton();
    }
  }

  /* function populateStorage(prods, tValue) {
    localStorage.clear()
    localStorage.setItem('products', JSON.stringify(prods));
    localStorage.setItem('totalValue', JSON.stringify(tValue));
  } */

  useEffect(() => {
    if (firstBtnClick){
    localStorage.clear()
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('totalValue', JSON.stringify(totalValue));
    setFirstBtnClick(false);
  }}, [firstBtnClick])

  useEffect(() => {
    if(prodInput.current) {
      prodInput.current.focus();
    }
    let storageProds = JSON.parse(localStorage.getItem('products'));
    let storageTotalValue = JSON.parse(localStorage.getItem('totalValue'));
    if(storageProds != null) {
      setProducts(storageProds);
      setTotalValue(storageTotalValue);
      setShowTable(true);
    }
    if (storageProds.length == 0) {
      setShowTable(false);
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
