import React from 'react';
import styles from './InputItem.module.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
  root: {
  	'& .MuiOutlinedInput-root': {
  		'&:hover fieldset': {
  			borderColor: '#455088',
  		},
  	},
  },
})(TextField);


const InputItem = () => (
	<div className={styles.input}>
		<CssTextField 
		id="outlined-basic" 
		label="Новое задание" 
		variant="outlined" />
	</div>
);

export default InputItem;