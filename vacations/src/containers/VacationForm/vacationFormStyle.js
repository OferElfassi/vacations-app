const vacationFormStyle = () => ({
  root: {
    maxWidth: 618,
    minWidth: 200,
    width: 618,
    height: 552,
    marginTop: '84px',
    borderRadius: '25px',
    position: 'relative',
    padding: '13px 40px 0px',
    textAlign: 'center',
  },
  formBackground: {
    // eslint-disable-next-line global-require
    backgroundImage: `url(${require('../../assets/images/form_bg.png')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
  },
  formRoot: {
    marginTop: '27px',
    '& .MuiFormControl-root': {
      marginBottom: 12,
      width: '100%',
    },
  },
  btnsContainer: {
    width: '132px',
    display: 'flex',
    position: 'relative',
    bottom: 34,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 2,
  },
  editBtnsStyle: {
    justifyContent: 'space-between',
  },
  addBtnStyle: {
    justifyContent: 'center',
  },
});

export default vacationFormStyle;
