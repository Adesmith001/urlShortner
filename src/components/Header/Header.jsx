import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/logo.svg';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
      if (window.innerWidth > 767) {
        setIsMenuOpen(true);
      }
    }, []);


  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.ImageContainer}>
        <img src={Logo} alt="" />
      </div>

      <div className={styles.MenuMainContainer} 
      style={{ visibility: isMenuOpen ? 'visible' : 'hidden',
      left: isMenuOpen ? "50%" : "150%",
      transform: "translate(-50%, 0)"}}>
        <div className={styles.OptionsText}>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>

        <div className={styles.LoginText}>
          <button className={styles.Login}>Login</button>
          <button className={styles.SignUp}>Sign Up</button>
        </div>
      </div>

      <FaBars className={styles.MenuIcon} onClick={ToggleMenu} />
    </div>
  );
};

export default Header;
