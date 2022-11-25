import React, {useEffect} from 'react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [hostImg, setHostImg] = useState('');
  useEffect(()=> {
    setHostImg(require('./info.json').hostImg);
  },[])

  return (
    <div>
      <img src={hostImg} alt='ADNSU' className='profile'/>
    </div>
  )
}

export default Header
