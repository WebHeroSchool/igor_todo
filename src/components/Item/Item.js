import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
		})
	}>
	<Checkbox
			onClick={() => onClickDone(isDone)}
			color="primary"
			inputProps={{ 'aria-label': 'secondary checkbox' }}
		/>
		{value}</span>);

export default Item;