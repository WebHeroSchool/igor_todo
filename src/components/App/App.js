import React from 'react';
import Calendar from '../Calendar/Calendar.js';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
// import { withStyles } from '@material-ui/core/styles';

class App extends React.Component {
	state = {
		items: [
			{
				value: 'Купить яйца',
				isDone: false,
				id: 1
			},
			{
				value: 'Купить молоко',
				isDone: false,
				id: 2
			},
			{
				value: 'Купить масло',
				isDone: false,
				id: 3
			}
		],
		count: 6
	};

	//onClickDone = isDone => console.log(isDone); короткая запись

	constructor(props) {
		super(props);

		this.onClickDone = this.onClickDone.bind(this);
	}

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList });
	};

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item => {
			const newItem = { ...item };

			if (item.isDone === false) {
				return newItem; 
			}

		});
		this.setState({ items: newItemList});
	};

	render() {
		return (
			<div className={styles.wrap}>
			<h2 className={styles.title}>todo list</h2>
			<Calendar />
			<InputItem />
			<ItemList items={this.state.items} onClickDone={this.onClickDone} />
			<Footer count={this.state.count} onClickDelete={this.onClickDelete} />
			</div>
		);
	}
};

export default App;