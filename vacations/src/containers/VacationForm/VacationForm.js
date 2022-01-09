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
  const {onCancelClick, onSubmitClick, onAddClick, editMode} = props;
  const styles = useStyles();

  const containerStyle = cx({
    [styles.root]: true,
    [styles.formBackground]: !editMode,
  });

  const formContainerStyle = cx({
    [styles.formRoot]: true,
  });

  const btnsContainer = cx({
    [styles.btnsContainer]: true,
    [styles.addBtnStyle]: !editMode,
    [styles.editBtnsStyle]: editMode,
  });

  return (
    <>
      <Card className={containerStyle}>
        <Typography variant="h4" component="h4" gutterBottom>
          {editMode ? 'Edit a vacation' : 'Add a new vacation'}
        </Typography>
        <Box
          component="form"
          className={formContainerStyle}
          noValidate
          autoComplete="off">
          <CustomInput
            id="name"
            name="name"
            sm
            label="Name"
            placeholder="Name"
          />
          <CustomInput
            id="location"
            name="location"
            sm
            label="Location"
            placeholder="Location"
          />
          <CustomInput
            id="price"
            name="price"
            sm
            label="Price"
            placeholder="Price"
          />
          <CustomInput
            id="imageUrl"
            name="imageUrl"
            sm
            label="Image Url"
            placeholder="Image Url"
          />
        </Box>
      </Card>
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
              onClick={onSubmitClick}
            />
          </>
        ) : (
          <IconButton iconComponent={<AddIcon />} lg onClick={onAddClick} />
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
VacationForm.defaultProps = {
  editMode: false,
};

export default VacationForm;
