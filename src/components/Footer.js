import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Github } from '../images/github.svg';

const useStyles = makeStyles({
  container: {
    paddingTop: '40px',
  },
  logo: {
    width: '45px',
    height: 'auto',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2} className={classes.container}>
      <Grid item>
        <a href="https://www.linkedin.com/in/gregory-mclean-19165343/" rel="noopener noreferrer" target="_blank">
          <Linkedin className={classes.logo} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://github.com/GregDevProjects" rel="noopener noreferrer" target="_blank">
          <Github className={classes.logo} />
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
