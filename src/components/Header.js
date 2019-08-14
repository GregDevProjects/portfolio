import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { FolderOpenOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  portfolioIcon: {
    color: '#2CCD70',
    fontSize: '75px',
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    color: '#333335',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  subTitle: {
    marginTop: '10px',
    color: '#99999b',
  },

});

function Header() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.centerText}>
        <Grid item xs={12}><FolderOpenOutlined className={classes.portfolioIcon} /></Grid>
        <Grid item xs={12}><Typography className={classes.title} variant="h3">Greg McLean</Typography></Grid>
        <Grid item xs={12}><Typography className={classes.subTitle} variant="h6">Delivering results through focus and collaboration</Typography></Grid>
      </Grid>
    </>
  );
}

export default Header;
