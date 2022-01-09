import {alpha} from '@mui/material/styles';

const inputStyle = theme => ({
  root: {
    position: 'relative',
  },
  icon: {
    '& svg': {
      position: 'absolute',
      fontSize: 35,
      top: 12,
      left: 10,
      zIndex: 2,
      color: '#AFAFAF',
    },
  },
  input: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      position: 'relative',

      width: '100%',

      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.info.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.info.main,
      },
    },
  },
  smallInput: {
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: theme.palette.text.hint,
    '& .MuiInputBase-input': {
      borderRadius: 4,
      fontSize: 16,
      padding: '8px 11px 5px',
    },
  },
  largeInput: {
    borderRadius: 26,
    fontSize: 15,
    backgroundColor: '#ffffff',
    boxShadow: '0px 24px 24px rgba(0, 0, 0, 0.02)',
    '& .MuiInputBase-input': {
      borderRadius: 26,
      fontSize: 15,
      padding: '16px 11px 17px 47px',
    },
  },
});

export default inputStyle;
