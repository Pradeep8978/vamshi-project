import React, { Fragment, useEffect, useRef, useState } from 'react';
import './HeaderSticky.scss';
import NavBar from '../../Layouts/NavBar/NavBar';
import logo from '../../images/Logo-wa.png'
import { Link } from "react-router-dom";

export default () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <div className='logo'>
        <img src ={logo}/>
        </div>  
        <NavBar/>
        
      </div>
    </Fragment>
  );
};