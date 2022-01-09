const iconButtonStyle = theme => ({
  root: {
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0px 4.2069px 4.2069px rgba(255, 102, 71, 0.25)',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.lighter,
    },
  },
  outline: {
    border: '2.10345px solid #FFFFFF',
  },
  lg: {
    width: 52,
    height: 52,
  },
  sm: {
    width: 35.76,
    height: 35.76,
  },
});

export default iconButtonStyle;
