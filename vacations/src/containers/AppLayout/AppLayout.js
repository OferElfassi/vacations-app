import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {appLayoutStyle, appGridProps} from './appLayoutStyle';

function AppLayout(props) {
  const {searchBar, vacationList, vacationForm} = props;
  const {appStyle, mainContainerStyle, vacationListStyle} = appLayoutStyle;
  const {
    mainGrid,
    searchBarGridProps,
    vacationListGridProps,
    listSectionGridProps,
    formSectionProps,
  } = appGridProps;
  return (
    <Box sx={appStyle}>
      <Container maxWidth="xl" sx={mainContainerStyle}>
        <Grid {...mainGrid}>
          <Grid {...listSectionGridProps}>
            <Grid {...searchBarGridProps}>{searchBar}</Grid>
            <Grid {...vacationListGridProps} style={vacationListStyle}>
              {vacationList}
            </Grid>
          </Grid>
          <Grid {...formSectionProps}>{vacationForm}</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

AppLayout.propTypes = {
  searchBar: PropTypes.element.isRequired,
  vacationList: PropTypes.element.isRequired,
  vacationForm: PropTypes.element.isRequired,
};

export default AppLayout;
