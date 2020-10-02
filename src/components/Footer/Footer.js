import React from 'react';
import styles from './Footer.module.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const CssButton = withStyles({
  root: {
  	fontWeight: '100',
  	fontSize: '15px',
  	textTransform: 'none'
  },
})(Button);

const CssMenuItem = withStyles({
  root: {
  	fontWeight: '100',
  	fontSize: '15px'
  },
})(MenuItem);

const CssDeleteIcon = withStyles({
  root: {
  	color: '#3f51b5'
  },
})(DeleteIcon);

// 90caf9

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Фильтр
      </CssButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Все</MenuItem>
        <CssMenuItem onClick={handleClose}>Активные</CssMenuItem>
        <CssMenuItem onClick={handleClose}>Завершенные</CssMenuItem>
      </Menu>
    </div>
  );
}

const Footer = ({ count, id, onClickDelete }) => (<div 
	className={styles.wrap}
	onClick={() => onClickDelete(id)}
	>
	<div className={styles.item}>Осталось дел 
		<span className={styles.number}>{count}</span> 
	</div>
	<SimpleMenu />
	<IconButton aria-label="delete">
		<CssDeleteIcon fontSize="small" />
	</IconButton>
</div>);

export default Footer;