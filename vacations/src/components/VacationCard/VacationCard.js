import React from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PropTypes from 'prop-types';
import vacationCardStyle from './vacationCardStyle';
import IconButton from '../IconButton/IconButton';

const useStyles = makeStyles(vacationCardStyle);

function VacationCard(props) {
  const {onEditClick, onDeleteClick, vacationData} = props;
  const styles = useStyles();
  const cardImage = cx({
    [styles.media]: true,
    [styles.cardImg]: true,
  });
  const cardContent = cx({
    [styles.cardContent]: true,
    [styles.textOverflow]: true,
  });

  return (
      <Card className={styles.root}>
        <CardMedia className={cardImage} image={vacationData.imageUrl} />
        <CardActions className={styles.btnsContainer}>
          <IconButton
              iconComponent={<DeleteRoundedIcon />}
              sm
              outline
              onClick={onDeleteClick}
          />
          <IconButton
              iconComponent={<ModeEditRoundedIcon />}
              sm
              outline
              onClick={onEditClick}
          />
        </CardActions>
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
      </Card>
  );
}

VacationCard.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  vacationData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default VacationCard;
