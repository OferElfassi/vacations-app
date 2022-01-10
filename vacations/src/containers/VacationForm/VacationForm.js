import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CustomInput from '../../components/CustomInput/CustomInput';
import vacationFormStyle from './vacationFormStyle';
import useForm from '../../hooks/useForm';
import VacationFormActions from './VacationFormActions';

const useStyles = makeStyles(vacationFormStyle);

function VacationForm(props) {
  const styles = useStyles();
  const {onCancelClick, onSubmitClick, editMode, initialValues, onEditClick} =
    props;
  const [handleInput, formValues, formIsValid, submitForm] = useForm(
    initialValues || VacationForm.defaultProps.initialValues,
  );
  const containerStyle = cx({
    [styles.root]: true,
    [styles.formBackground]: !editMode,
  });

  const formContainerStyle = cx({
    [styles.formRoot]: true,
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (editMode) {
      submitForm(onEditClick);
    } else {
      submitForm(onSubmitClick);
    }
  };

  const handleEdit = () => {
    submitForm(onEditClick);
  };

  return (
    <>
      <Card className={containerStyle}>
        <Typography variant="h4" component="h4" gutterBottom>
          {editMode ? 'Edit a vacation' : 'Add a new vacation'}
        </Typography>
        <Box
          component="form"
          id="vacform"
          onSubmit={handleSubmit}
          className={formContainerStyle}
          noValidate
          autoComplete="off">
          <CustomInput
            sm
            id="name"
            name="name"
            label="Name"
            placeholder="Name"
            onChange={handleInput}
            value={formValues ? formValues.name.value : ''}
            error={formValues ? formValues.name.error : ''}
            validators={['required']}
          />
          <CustomInput
            sm
            id="location"
            name="location"
            label="Location"
            placeholder="Location"
            onChange={handleInput}
            value={formValues ? formValues.location.value : ''}
            error={formValues ? formValues.location.error : ''}
            validators={['required']}
          />
          <CustomInput
            sm
            id="price"
            name="price"
            label="Price"
            placeholder="Price"
            onChange={handleInput}
            value={formValues ? formValues.price.value : ''}
            error={formValues ? formValues.price.error : ''}
            validators={['required', 'number']}
          />
          <CustomInput
            sm
            id="imageUrl"
            name="imageUrl"
            label="Image Url"
            placeholder="Image Url"
            onChange={handleInput}
            value={formValues ? formValues.imageUrl.value : ''}
            error={formValues ? formValues.imageUrl.error : ''}
            validators={['required', 'url']}
          />
        </Box>
      </Card>
      <VacationFormActions
        editMode={editMode}
        formIsValid={formIsValid}
        onCancelClick={onCancelClick}
        onSubmitClick={handleSubmit}
        onEditClick={handleEdit}
      />
    </>
  );
}

VacationForm.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};
VacationForm.defaultProps = {
  editMode: false,
  initialValues: {
    id: '',
    name: '',
    location: '',
    price: '',
    imageUrl: '',
  },
};

export default VacationForm;
