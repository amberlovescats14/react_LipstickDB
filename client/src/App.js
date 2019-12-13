import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Nav from './componenets/Nav'
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue'
const blue = lightBlue[200]

const useStyles = makeStyles({
  root: {
    background: blue,
    height: '100vh'
  }
})
function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
      <Nav>
      <Router/>
      </Nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
