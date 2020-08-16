import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Navigation = () => {
  return (
    <ButtonGroup variant="contained" fullWidth color="primary">
      <Button component={Link} to={'/arrivals'}>Arrivals</Button>
      <Button component={Link} to={'/departures'}>Departures</Button>
    </ButtonGroup>
  );
};

export default Navigation;
