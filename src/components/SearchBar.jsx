import React from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();

  const handleSearch = () => {
    history.push({
      ...history,
      search: searchValue,
    });
    setSearchValue("");
  };

  return (
    <Grid container spacing={1} alignItems={'stretch'}>
      <Grid item xs>
        <TextField
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          id="standard-full-width"
          label="Search your flight"
          placeholder="Put your search params here"
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          style={{height: "100%"}}
          onClick={handleSearch}
        >
          Find flight
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
