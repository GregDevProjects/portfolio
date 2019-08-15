import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';
import filters from '../enums';


const useStyles = makeStyles({
  container: {
    marginTop: '10px',
  },
});

function ProjectFilter(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState(1);
  const { onFilterChange } = props;
  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
    onFilterChange(selectedFilter);
  };

  return (
    <div className={classes.container}>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <FilterButton label="All" value={filters.all} selected={filter === filters.all} onFilterClick={handleFilterClick} />
        </Grid>
        <Grid item>
          <FilterButton label="Open Source" value={filters.openSource} selected={filter === filters.openSource} onFilterClick={handleFilterClick} />
        </Grid>
        <Grid item>
          <FilterButton label="Personal" value={filters.personal} selected={filter === filters.personal} onFilterClick={handleFilterClick} />
        </Grid>
        <Grid item>
          <FilterButton label="Professional" value={filters.professional} selected={filter === filters.professional} onFilterClick={handleFilterClick} />
        </Grid>
      </Grid>
    </div>
  );
}

ProjectFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ProjectFilter;
