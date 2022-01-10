const vacationCardStyle = theme => ({
  root: {
    width: '290px',
    height: '261px',
    position: 'relative',
  },
  cardSelected: {
    border: `2px solid ${theme.palette.primary.light}`,
  },
  textOverflow: {
    '& h5': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '120px',
      '&:hover': {
        overflow: 'visible',
        whiteSpace: 'normal',
        height: 'auto',
      },
    },
  },
  cardImg: {
    width: '268.19px',
    height: '170.38px',
    marginTop: 12.62,
    marginLeft: 13.53,
  },
  media: {
    borderRadius: 6,
  },
  btnsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'absolute',
    right: 8,
    top: 152,
  },
  cardContent: {
    padding: '10.36px 13.26px 0px 15.53px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',

    '& div': {
      display: 'flex',
      alignItems: 'center',

      '& p': {
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
        fontSize: 14,
      },
      '& svg': {
        marginRight: 8.31,
        fontSize: 16.08,
      },
    },
    '& p': {
      color: theme.palette.info.main,
      fontWeight: 'bold',
    },
  },
});

export default vacationCardStyle;
