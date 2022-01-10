import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import VacationCard from '../../components/VacationCard/VacationCard';
import vacationListStyle from './vacationListStyle';

const useStyles = makeStyles(vacationListStyle);
function VacationList(props) {
  const styles = useStyles();
  const [filteredVacations, setFilteredVacations] = useState([]);
  const {vacations, onEditClick, onDeleteClick, filter} = props;

  const applyFilter = () => {
    const filtered = vacations.filter(
      vac =>
        vac.name.toLowerCase().includes(filter.toLowerCase()) ||
        vac.location.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredVacations(filtered);
  };
  const renderVacationList = () =>
    filteredVacations.map(vacation => (
      <Grid item key={vacation.id}>
        <VacationCard
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
          vacationData={vacation}
        />
      </Grid>
    ));
  useEffect(() => {
    applyFilter();
  }, [filter, vacations]);

  return filteredVacations.length > 0 ? (
    renderVacationList()
  ) : (
    <Typography
      className={styles.root}
      variant="h4"
      component="h4"
      gutterBottom>
      There is no vacations to show ...
    </Typography>
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
  filter: PropTypes.string.isRequired,
};

export default VacationList;
