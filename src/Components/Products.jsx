import React, {useState, useEffect} from 'react';
import Product from './Product';
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([{}]);
  const [amount, setAmount] = useState(0);
  const [oldAmount, setOldAmount] = useState(0);
  const [className, setClassName] = useState('');
  useEffect(()=> {
    setProducts(require('./info.json').products);
    setAmount(require('./info.json').amount);
    setOldAmount(require('./info.json').amount);
  },[])

  const handleAmount = (v) => {
    console.log(amount);
    if(v<0) {
      if(amount - v>=0) {
        setAmount(amount+v);
      }
    }
    else {
      if(amount+v<=100000) {
        setAmount(amount+v);
      }
    }
    if(amount + v < 0) {
      setClassName('red');
    }
    else {
      setClassName('');
    }
  }

  return (<>
    <p className={className}>{amount}</p>
    <div className='productsList'>
      {products.map((p, i)=> <Product key={i} productName = {Object.keys(p)[0]} productCost ={Object.values(p)[0]}  handleAmount={handleAmount}/>)}
    </div>
  </>
  )
}

export default Products
