import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Helmet from 'react-helmet';
import { Grid } from '@material-ui/core';
import ProjectFilterButtons from './ProjectFilter';
import Header from './Header';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
import SpaceMath from '../images/space_math.png';

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
      <Grid container spacing={2} justify="center">
        <Grid item>
          <ProjectCard name="Space Math" languages={['JS']} frameworks={['Phaser']} image={SpaceMath} />
        </Grid>
        <Grid item>
          <ProjectCard name="Space Drift" languages={['JS']} frameworks={['Phaser']} />
        </Grid>
        <Grid item>
          <ProjectCard name="Story Master" languages={['JS']} frameworks={['React', 'socket.io', 'mocha']} />
        </Grid>
        <Grid item>
          <ProjectCard name="Feature" languages={['JS']} frameworks={['Sequelize']} />
        </Grid>
        <Grid item>
          <ProjectCard name="Space Math" languages={['JS']} frameworks={['Phaser']} />
        </Grid>
        <Grid item>
          <ProjectCard name="Quotes Calculator" languages={['JS']} frameworks={['Angular 2', 'Ionic 2']} />
        </Grid>
        <Grid item>
          <ProjectCard name="Portfolio" languages={['JS']} frameworks={['React']} />
        </Grid>
      </Grid>
      <Footer />
      <Helmet bodyAttributes={{ style: 'background-color : #f5f5f7' }} />
    </div>
  );
}

export default App;
