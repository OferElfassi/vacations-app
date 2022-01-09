import React, {Fragment} from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';
import IconButton from '../../components/IconButton/IconButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import vacationFormStyle from './vacationFormStyle';

const useStyles = makeStyles(vacationFormStyle);

function VacationForm(props) {
  const styles = useStyles();
  const containerStyle = cx({
    [styles.root]: true,
    [styles.formBackground]: !props.editMode,
  });
  const formContainerStyle = cx({
    [styles.formRoot]: true,
  });
  const btnsContainer = cx({
    [styles.btnsContainer]: true,
    [styles.addBtnStyle]: !props.editMode,
    [styles.editBtnsStyle]: props.editMode,
  });
  return (
    <>
      <Card className={containerStyle}>
        <Typography variant="h4" component="h4" gutterBottom>
          {props.editMode ? 'Edit a vacation' : 'Add a new vacation'}
        </Typography>
        <Box
          component="form"
          className={formContainerStyle}
          noValidate
          autoComplete="off">
          <CustomInput sm label="Name" placeholder="Name" />
          <CustomInput sm label="Location" placeholder="Location" />
          <CustomInput sm label="Price" placeholder="Price" />
          <CustomInput sm label="Image Url" placeholder="Image Url" />
        </Box>
      </Card>
      <CardActions className={btnsContainer}>
        {props.editMode ? (
          <>
            <IconButton
              iconComponent={<ClearIcon />}
              lg
              onClick={props.onCancelClick}
            />
            <IconButton
              iconComponent={<CheckIcon />}
              lg
              onClick={props.onSubmitClick}
            />
          </>
        ) : (
          <IconButton
            iconComponent={<AddIcon />}
            lg
            onClick={props.onAddClick}
          />
        )}
      </CardActions>
    </>
  );
}

VacationForm.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
};

export default VacationForm;
