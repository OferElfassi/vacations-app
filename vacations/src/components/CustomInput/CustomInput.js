import React from 'react';
import InputBase from '@mui/material/InputBase';
import cx from 'clsx';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import makeStyles from '@mui/styles/makeStyles';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import inputStyle from './inputStyle';

const useStyles = makeStyles(inputStyle);

function CustomInput(props) {
  const {iconComponent, label, placeholder, sm, lg, style, id, name} = props;
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

  return (
    <FormControl variant="standard" style={style} className={root}>
      {iconComponent && <SearchIcon />}
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <InputBase
        className={inputComponent}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  iconComponent: PropTypes.element,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
};
CustomInput.defaultProps = {
  iconComponent: null,
  label: '',
  lg: false,
  sm: false,
  style: {},
};
export default CustomInput;
