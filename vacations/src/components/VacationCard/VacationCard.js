import React, {useState} from 'react';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import vacationCardStyle from './vacationCardStyle';
import defaultImage from '../../assets/images/vacation_default.png';
import VacationCardActions from './VacationCardActions';
import VacationCardDetails from './VacationCardDetails';

const useStyles = makeStyles(vacationCardStyle);

function VacationCard(props) {
  const {onEditClick, onDeleteClick, vacationData, selected} = props;
  const [imageUrl, setImageUrl] = useState(vacationData.imageUrl);
  const styles = useStyles();

  const cardRoot = cx({
    [styles.root]: true,
    [styles.cardSelected]: selected,
  });

  const cardImage = cx({
    [styles.media]: true,
    [styles.cardImg]: true,
  });

  const handleImageError = () => {
    setImageUrl(defaultImage);
  };

  return (
    <Card className={cardRoot}>
      <CardMedia
        className={cardImage}
        component="img"
        image={imageUrl}
        onError={handleImageError}
      />
      <VacationCardActions
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        vacationData={vacationData}
      />
      <VacationCardDetails vacationData={vacationData} />
    </Card>
  );
}

VacationCard.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  vacationData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
VacationCard.defaultProps = {
  selected: false,
};
export default VacationCard;
