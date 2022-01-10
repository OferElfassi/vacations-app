import React, {useState} from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton/IconButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import searchBarStyle from './searchBarStyle';

const useStyles = makeStyles(searchBarStyle);

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const {onSearchClick} = props;
  const styles = useStyles();

  const handleChange = ({target: {value}}) => {
    setSearchValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearchClick(searchValue);
  };

  return (
    <>
      <Grid
        item
        className={styles.root}
        component="form"
        noValidate
        autoComplete="off"
        id="searchform"
        onSubmit={handleSubmit}>
        <CustomInput
          id="search"
          name="search"
          lg
          value={searchValue}
          onChange={handleChange}
          placeholder="Search by name or location"
          iconComponent={<SearchIcon />}
        />
      </Grid>
      <Grid item xs="auto">
        <IconButton
          iconComponent={<SearchIcon />}
          onClick={handleSubmit}
          lg
          type="submit"
          form="searchform"
        />
      </Grid>
    </>
  );
}

SearchBar.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};

export default SearchBar;
