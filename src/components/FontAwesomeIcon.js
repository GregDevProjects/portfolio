import React from 'react';

import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function FontAwesomeIcon(props) {
  const { className, name } = props;

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return <Icon className={clsx(className, name)} />;
}

FontAwesomeIcon.propTypes = {
  name: PropTypes.string.isRequired, // the <i> tag found after selecting an icon at: https://fontawesome.com/icons?d=gallery
  className: PropTypes.string,
};

FontAwesomeIcon.defaultProps = {
  className: '',
};

export default FontAwesomeIcon;
