import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  unSelected: {
    color: '#333335',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#2CCD70',
      color: 'white',
    },
  },
  selected: {
    backgroundColor: '#2CCD70',
    color: 'white',
    '&:hover': {
      backgroundColor: '#2CCD70',
    },
  },
});

function FilterButton(props) {
  const {
    selected, label, onFilterClick, value,
  } = props;
  const classes = useStyles();
  return (
    <Button
      classes={{ root: selected ? classes.selected : classes.unSelected }}
      onClick={() => { onFilterClick(value); }}
    >
      {label}
    </Button>
  );
}

FilterButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default FilterButton;
