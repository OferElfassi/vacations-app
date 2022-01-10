import React, {Fragment} from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import IconButton from '../../components/IconButton/IconButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import searchBarStyle from './searchBarStyle';

const useStyles = makeStyles(searchBarStyle);

function SearchBar(props) {
  const styles = useStyles();

  return (
    <>
      <Grid item className={styles.root}>
        <CustomInput
          id="search"
          name="search"
          lg
          placeholder="Search by name or location"
          iconComponent={<SearchIcon />}
        />
      </Grid>
      <Grid item xs="auto">
        <IconButton iconComponent={<SearchIcon />} onClick={() => {}} lg />
      </Grid>
    </>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
