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
    '&  label': {
      transform: 'translate(0, 1.5px) scale(0.9)',
      fontWeight: 700,
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      width: '100%',
      '&:focus': {
        boxShadow: `${alpha(theme.palette.info.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.info.main,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },

  smallInput: {
    '& .MuiOutlinedInput-root': {
      marginTop: 20.34,
    },
    '& .MuiInputBase-input': {
      backgroundColor: theme.palette.text.hint,
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
