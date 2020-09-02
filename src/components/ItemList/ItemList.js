import React from 'react';
import Item from '../Item/Item';
import styles from '../App/App.module.css';

const ItemList = ({ items }) => (<ul className={styles.list}>
	{items.map(item => <li key={item.value} className={styles.items}><Item value = {item.value}/></li>)}
</ul>);

export default ItemList;