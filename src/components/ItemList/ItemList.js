import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, id }) => (<ul className={styles.list}>
{
	items.map(item => <li key={item.value} className={styles.items}>
		<Item 
			value = {item.value} 
			isDone={item.isDone} 
			id={item.id} 
			onClickDone={onClickDone} 
		/>
	</li>)}
</ul>);

export default ItemList;