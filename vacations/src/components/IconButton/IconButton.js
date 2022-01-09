import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import iconButtonStyle from './iconButtonStyle';

const useStyles = makeStyles(iconButtonStyle);

function IconButton(props) {
  const {iconComponent, outline, onClick, lg, sm, style} = props;
  const styles = useStyles();
  const containerStyle = cx({
    [styles.root]: true,
    [styles.outline]: outline,
    [styles.lg]: lg,
    [styles.sm]: sm,
  });
  const handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      onClick();
    }
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={containerStyle}
      onClick={onClick}
      style={style}>
      {iconComponent}
    </div>
  );
}

IconButton.propTypes = {
  iconComponent: PropTypes.element.isRequired,
  outline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object]),
};
IconButton.defaultProps = {
  outline: false,
  lg: true,
  sm: false,
  style: {},
};
export default IconButton;
