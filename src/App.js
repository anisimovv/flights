import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Flights from './components/Flights';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box mt={2}>
          <SearchBar />
        </Box>
        <Box mt={2}>
          <Navigation />
        </Box>

        <Switch>
          <Route path="/:direction" children={<Flights />} />
        </Switch>

      </Container>
    </Router>
  );
}

export default App;
