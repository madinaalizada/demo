import React from 'react'
import { useEffect, useState } from 'react';
import './Product.css';

const Product = (productName, productCost, handleAmount) => {
    const [amount, setAmount] = useState('');
    const [oldAmount, setOldAmount] = useState(0);

    const handleInput = (event) => {
        setAmount(event.target.value);
        setOldAmount(Number(amount));
        console.log(event.target.value);
        let _amount = Number(event.target.value);
        let _oldAmount = Number(amount);
        let diff = _amount - _oldAmount;
        console.log(_amount,'-',_oldAmount,'=', diff)
        productName.handleAmount(-1*Number(productName.productCost)*diff);
        
        
        // setOldAmount(amount);
        // console.log('handleInput', amount);
    }
    const sellProduct = () => {
        if(Number(amount) - 1 < 0) {
            setAmount(oldAmount);
        }
        else {
            setAmount(String(Number(amount) - 1));
            productName.handleAmount(Number(productName.productCost));
        }
    }
    const buyProduct = () => {
        setAmount(String(Number(amount) + 1));
        try {
            productName.handleAmount(-Number(productName.productCost));
        } catch (error) {
            // setAmount(oldAmount);
        }
    }
  return (<>
    {/* <p>{oldAmount}</p> */}
    <div className='productItem'>
      <img src='https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg' alt='' className='productItemImg'/>
      <h2>{productName.productName}</h2>
      <p>{productName.productCost}</p>
      <div>
        <button onClick={sellProduct}>Sell</button>
        <input type='text' id={productName.productName} name={productName.productName} value={amount}  onChange={handleInput}/>
        <button onClick={buyProduct}>Buy</button>
      </div>
    </div>
  </>
  )
}

export default Product
