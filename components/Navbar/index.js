import React from 'react';
import { EmailIcon, EmailShareButton } from 'react-share';
// import { ThemeContext } from 'styled-components';
import Logo from '../Logo';
import { DarkModeProvider } from '../DarkModeBtn';
import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link';

const Navbar = () => (

  <div>
    <ul className={styles.nav}>
    
      {/* <ul className={styles.bars} /> */}
      {/* <ul className={styles.navMenu}> */}

        <Link href="/create">
        <a>
          Create Your Own Resume
        </a>
        </Link>
        
        <Link href="/faq" >
          <a>FAQ</a>
        </Link>

        <a href="https://jolly-hugle-0db0de.netlify.app" target="_blank" rel="noreferrer">
          Certifications
        </a>
      <Link href="/" passHref>
        <a><Logo /></a>
      </Link>
    </ul>
  </div>
);

export default Navbar;
