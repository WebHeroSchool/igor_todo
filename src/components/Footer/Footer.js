import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.item}>Осталось дел на сегодня {count}</div>);

export default Footer;