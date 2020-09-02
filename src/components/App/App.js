import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


const App = () => {
	
	const items = [
		{
			value: 'Купить хлеб'
		},
		{
			value: 'Купить молоко'
		},
		{
			value: 'Купить масло'
		}
	];

	return (
	<div className={styles.wrap}>
	<h2 className={styles.title}>Важные дела:</h2>
		<InputItem />
		<ItemList items={items}/>
		<Footer count={5}/>
	</div>);
}

export default App;