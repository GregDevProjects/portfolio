import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Helmet from 'react-helmet';
import ProjectFilterButtons from './ProjectFilter';
import Header from './Header';

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
      <ProjectFilterButtons />
      <Helmet bodyAttributes={{ style: 'background-color : #f5f5f7' }} />
    </div>
  );
}

export default App;
