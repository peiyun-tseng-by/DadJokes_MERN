import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
  },
}));



function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon /> 
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link to ="/home">Home</Link>
              </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/favorites">Favorites</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/dislike">Dislike</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/confused">Confused</Link>
            </MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
            Dad Jokes For You!
          </Typography>
          {/*<Button color="inherit">Button Here</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;