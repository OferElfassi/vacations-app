import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';
import IconButton from '../../components/IconButton/IconButton';
import vacationFormStyle from './vacationFormStyle';

const useStyles = makeStyles(vacationFormStyle);

function VacationFormActions(props) {
  const {onCancelClick, onSubmitClick, editMode, formIsValid, onEditClick} =
    props;
  const styles = useStyles();
  const btnsContainer = cx({
    [styles.btnsContainer]: true,
    [styles.addBtnStyle]: !editMode,
    [styles.editBtnsStyle]: editMode,
  });
  return (
    <CardActions className={btnsContainer}>
      {editMode ? (
        <>
          <IconButton
            iconComponent={<ClearIcon />}
            lg
            onClick={onCancelClick}
          />
          <IconButton
            iconComponent={<CheckIcon />}
            lg
            onClick={onEditClick}
            disabled={!formIsValid}
            type="submit"
            form="vacform"
          />
        </>
      ) : (
        <IconButton
          iconComponent={<AddIcon />}
          lg
          onClick={onSubmitClick}
          disabled={!formIsValid}
          type="submit"
          form="vacform"
        />
      )}
    </CardActions>
  );
}

VacationFormActions.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default VacationFormActions;
