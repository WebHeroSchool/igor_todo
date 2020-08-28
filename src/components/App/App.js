import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todo = ['Купить хлеб', 'Купить молоко', 'Купить масло'];
const App = () => (
	<div>
	<h2>Важные дела:</h2>
		<InputItem />
		<ItemList todoItems={todo}/>
		<Footer count={5}/>
	</div>
);

export default App;