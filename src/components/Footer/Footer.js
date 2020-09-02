import React from 'react';
import styles from '../App/App.module.css';

const Footer = ({ count }) => (<div className={styles.footer}>Осталось дел на сегодня {count}</div>);

export default Footer;