import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import SpaceMath from '../images/space_math.png';
import SpaceDrift from '../images/space_drift.png';
import Sequelize from '../images/sequilize.png';
import StoryMaster from '../images/story_master.png';
import QuotesCalculator from '../images/quotes_calculator.png';
import SpaceDemons from '../images/space_demons.png';
import Portfolio from '../images/portfolio.png';
import filters from '../enums';

const useStyles = makeStyles({
  container: {
    paddingTop: '15px',
  },
});


function Content() {
  const classes = useStyles();
  const [filter, setFilter] = useState(1);
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <ProjectFilter onFilterChange={handleFilterChange} />
      <Grid container spacing={2} justify="center" className={classes.container}>
        {filter === filters.all || filter === filters.openSource ? (
          <Grid item>
            <ProjectCard name="Feature" languages={['JS']} frameworks={['Sequelize']} image={Sequelize} />
          </Grid>
        ) : ''}
        {filter === filters.all || filter === filters.personal ? (
          <>
            <Grid item>
              <ProjectCard name="Space Math" languages={['JS']} frameworks={['Phaser']} image={SpaceMath} />
            </Grid>
            <Grid item>
              <ProjectCard name="Space Drift" languages={['JS']} frameworks={['Phaser']} image={SpaceDrift} />
            </Grid>
            <Grid item>
              <ProjectCard name="Story Master" languages={['JS']} frameworks={['React', 'Socket.IO', 'Mocha', 'Node.js']} image={StoryMaster} />
            </Grid>
            <Grid item>
              <ProjectCard name="Space Demons" languages={['JS', 'HTML5', 'CSS']} frameworks={['n/a']} image={SpaceDemons} />
            </Grid>
            <Grid item>
              <ProjectCard name="Portfolio" languages={['JS']} frameworks={['React']} image={Portfolio} />
            </Grid>
          </>
        ) : ''}
        {filter === filters.all || filter === filters.professional ? (
          <Grid item>
            <ProjectCard name="Quotes Calculator" languages={['JS']} frameworks={['Angular 2', 'Ionic 2']} image={QuotesCalculator} />
          </Grid>
        ) : ''}
      </Grid>
    </div>
  );
}

export default Content;
