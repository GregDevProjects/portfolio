import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Helmet from 'react-helmet';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles({
  root: {
    paddingTop: '40px',
  },
});


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Content />
      <Footer />
      <Helmet bodyAttributes={{ style: 'background-color : #f5f5f7' }} />
    </div>
  );
}

export default App;
