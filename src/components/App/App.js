import React from 'react';
import Calendar from '../Calendar/Calendar.js';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import { withStyles } from '@material-ui/core/styles';

class App extends React.Component {
	state = {
		items: [
			{
				value: 'Купить хлеб',
				isDone: true
			},
			{
				value: 'Купить молоко',
				isDone: false
			},
			{
				value: 'Купить масло',
				isDone: false
			}
		]
	};

	//onClickDone = isDone => console.log(isDone); короткая запись

	constructor(props) {
		super(props);

		this.onClickDone = this.onClickDone.bind(this);
	}

	onClickDone(isDone) {
		console.log(isDone);
	}

	render() {
		return (
			<div className={styles.wrap}>
			<h2 className={styles.title}>Важные дела</h2>
			<Calendar />
			<InputItem />
			<ItemList items={this.state.items} onClickDone={this.onClickDone} />
			<Footer count={5}/>
			</div>
		);
	}
};

export default App;