import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({ items }) => (<ul className={styles.list}>
{
	items.map(item => <li key={item.value} className={styles.items}>
		<Checkbox
		color="primary"
		inputProps={{ 'aria-label': 'secondary checkbox' }}
		/>
		<Item value = {item.value} isDone={item.isDone}/>
		</li>)
	}
</ul>);

export default ItemList;