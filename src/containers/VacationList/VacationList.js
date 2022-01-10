import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import VacationCard from '../../components/VacationCard/VacationCard';

function VacationList(props) {
  const {vacations, onEditClick, onDeleteClick} = props;

  return (
    <>
      {vacations.map(vacation => (
        <Grid item key={vacation.id}>
          <VacationCard
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            vacationData={vacation}
          />
        </Grid>
      ))}
    </>
  );
}

VacationList.propTypes = {
  vacations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default VacationList;