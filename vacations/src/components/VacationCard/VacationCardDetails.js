import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PropTypes from 'prop-types';
import vacationCardStyle from './vacationCardStyle';

const useStyles = makeStyles(vacationCardStyle);

function VacationCardDetails(props) {
  const {vacationData} = props;
  const styles = useStyles();

  const cardContent = cx({
    [styles.cardContent]: true,
    [styles.textOverflow]: true,
  });

  return (
    <CardContent className={cardContent}>
      <Typography variant="h5" component="h5" gutterBottom>
        {vacationData.name}
      </Typography>
      <div className={styles.cardFooter}>
        <div>
          <LocationOnRoundedIcon color="primary" />
          <p>{vacationData.location}</p>
        </div>
        <p>$ {vacationData.price}</p>
      </div>
    </CardContent>
  );
}

VacationCardDetails.propTypes = {
  vacationData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default VacationCardDetails;
