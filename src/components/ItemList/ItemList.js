import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItems }) => (<ul>
	<li><Item item = {todoItems[0]}/></li>
	<li><Item item = {todoItems[1]}/></li>
	<li><Item item = {todoItems[2]}/></li>
</ul>
);

export default ItemList;