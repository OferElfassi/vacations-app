import React from 'react';
import TextField from '@mui/material/TextField';
import cx from 'clsx';
import FormControl from '@mui/material/FormControl';
import makeStyles from '@mui/styles/makeStyles';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import inputStyle from './inputStyle';

const useStyles = makeStyles(inputStyle);

function CustomInput(props) {
  const {
    iconComponent,
    label,
    placeholder,
    sm,
    lg,
    style,
    id,
    name,
    onChange,
    value,
    error,
    validators,
  } = props;

  const styles = useStyles();

  const root = cx({
    [styles.root]: true,
    [styles.icon]: iconComponent,
  });

  const inputComponent = cx({
    [styles.input]: true,
    [styles.smallInput]: sm,
    [styles.largeInput]: lg,
  });

  const handleChange = event => {
    onChange(event, validators);
  };

  return (
    <FormControl variant="standard" style={style} className={root}>
      {iconComponent && <SearchIcon />}
      <TextField
        InputLabelProps={{shrink: true}}
        className={inputComponent}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleChange}
        error={error !== ''}
        helperText={error}
        label={label}
        value={value}
        name={name}
        id={id}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  iconComponent: PropTypes.element,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.oneOf(['required', 'number', 'url'])),
};
CustomInput.defaultProps = {
  iconComponent: null,
  label: '',
  lg: false,
  sm: false,
  style: {},
  error: '',
  validators: [],
};
export default CustomInput;
