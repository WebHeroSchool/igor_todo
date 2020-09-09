import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//стиль для календаря
const CssGrid = withStyles({
  root: {
  	marginBottom: '20px'
  },
})(Grid);

function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-09-08'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssGrid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </CssGrid>
    </MuiPickersUtilsProvider>
  )
};

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
			<MaterialUIPickers />
			<InputItem />
			<ItemList items={this.state.items} onClickDone={this.onClickDone} />
			<Footer count={5}/>
			</div>
		);
	}
};

export default App;