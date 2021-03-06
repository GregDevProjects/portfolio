import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';


const useStyles = makeStyles({
  card: {
    width: 250,
  },
  media: {
    height: 250,
    backgroundSize: 250,
  },
  content: {
    height: 100,
  },
});

const ProjectCard = (props) => {
  const classes = useStyles();
  const {
    name, languages, frameworks, image,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Language
            {languages.length > 1 ? 's:' : ':'}
            {' '}
            {languages.join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Framework
            {frameworks.length > 1 ? 's:' : ':'}
            {' '}
            {frameworks.join(', ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  frameworks: PropTypes.array.isRequired,
  image: PropTypes.node.isRequired,
};

export default ProjectCard;
