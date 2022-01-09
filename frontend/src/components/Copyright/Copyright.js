import React from 'react';

import { Typography, Link } from '@material-ui/core';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://www.youtube.com/watch?v=-BOAYXbPMrQ">
            Lorenzo Paras, Nathan Baylon
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
};

export default Copyright;