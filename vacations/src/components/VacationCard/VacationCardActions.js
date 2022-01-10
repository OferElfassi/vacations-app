import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import vacationCardStyle from './vacationCardStyle';
import IconButton from '../IconButton/IconButton';

const useStyles = makeStyles(vacationCardStyle);

function VacationCardActions(props) {
  const {onEditClick, onDeleteClick, vacationData} = props;
  const styles = useStyles();

  return (
    <CardActions className={styles.btnsContainer}>
      <IconButton
        iconComponent={<DeleteRoundedIcon />}
        sm
        outline
        onClick={() => onDeleteClick(vacationData.id)}
      />
      <IconButton
        iconComponent={<ModeEditRoundedIcon />}
        sm
        outline
        onClick={() => onEditClick(vacationData.id)}
      />
    </CardActions>
  );
}

VacationCardActions.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  vacationData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default VacationCardActions;
