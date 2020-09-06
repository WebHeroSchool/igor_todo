import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
	<div className={styles.input}>
		<TextField 
		id="outlined-basic" 
		label="Новое задание" 
		variant="outlined" />
	</div>
);

export default InputItem;