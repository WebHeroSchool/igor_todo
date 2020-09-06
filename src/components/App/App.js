import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const DateTextField = withStyles({
  root: {
		marginBottom: '20px'
  },
})(TextField);

const App = () => {
	
	const items = [
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
	];


	return (
		<div className={styles.wrap}>
		<h2 className={styles.title}>Важные дела</h2>
		<DateTextField
			id="date"
			label="Выберите день"
			type="date"
			defaultValue="2020-01-01"
			className={styles.date}
			InputLabelProps={{
				shrink: true,
			}}
		/>
		<InputItem />
		<ItemList items={items}/>
		<Footer count={5}/>
		</div>);
	}

export default App;