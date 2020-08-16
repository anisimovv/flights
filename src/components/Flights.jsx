import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import { flights } from '../flights';
import { Box } from '@material-ui/core';

const Flights = () => {
  const { direction } = useParams();
  const location = useLocation();

  const [filterString, setFilterString] = React.useState("");

  React.useEffect(() => {
    setFilterString(location.search)
  }, [location]);

  const renderFlights = (flights, filterString) => {
    if (!filterString) {
      return flights;
    }

    const searchParams = filterString.slice(1);
    return flights.filter(flight => flight.name.toLowerCase().includes(searchParams.toLowerCase()))
  };

  return (
    <Box mt={4}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Flight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderFlights(flights[direction], filterString).map(({id, name, flight}) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{flight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Flights;
