import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';


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
	<div className='wrap'>
	<h2 className='wrap-title'>Важные дела:</h2>
		<InputItem />
		<ItemList items={items}/>
		<Footer count={5}/>
	</div>);
}

export default App;