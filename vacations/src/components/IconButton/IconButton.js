import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import iconButtonStyle from './iconButtonStyle';

const useStyles = makeStyles(iconButtonStyle);

function IconButton(props) {
  const {iconComponent, outline, onClick, lg, sm, style, disabled, type, form} =
    props;
  const styles = useStyles();

  const containerStyle = cx({
    [styles.root]: true,
    [styles.outline]: outline,
    [styles.lg]: lg,
    [styles.sm]: sm,
    [styles.disabled]: disabled,
  });

  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      onClick();
    }
  };

  return (
    <ButtonBase
      className={containerStyle}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      tabIndex={0}
      type={type}
      form={form}
      style={style}>
      {iconComponent}
    </ButtonBase>
  );
}

IconButton.propTypes = {
  iconComponent: PropTypes.element.isRequired,
  outline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  form: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
};
IconButton.defaultProps = {
  outline: false,
  lg: false,
  sm: false,
  disabled: false,
  style: {},
  type: 'button',
  form: '',
};
export default IconButton;
