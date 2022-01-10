/* eslint-disable global-require */
import generateId from '../utils/generateId';

const vacationsArray = [
  {
    id: generateId('11'),
    name: 'Phi Phi Islands',
    location: 'Thailand',
    price: '1,480',
    imageUrl: require('../assets/images/vacation1.png'),
  },
  {
    id: generateId('22'),
    name: 'Kudahuvadhoo Island',
    location: 'Maldives',
    price: '1,030',
    imageUrl: require('../assets/images/vacation2.png'),
  },
  {
    id: generateId('33'),
    name: 'Greecevillage',
    location: 'Maldives',
    price: '1,480',
    imageUrl: require('../assets/images/vacation3.png'),
  },
  {
    id: generateId('44'),
    name: 'Kudahuvadhoo Island',
    location: 'Maldives',
    price: '1,480',
    imageUrl: require('../assets/images/vacation4.png'),
  },
  {
    id: generateId('55'),
    name: 'Phi Phi Islands',
    location: 'Thailand',
    price: '1,480',
    imageUrl: require('../assets/images/vacation1.png'),
  },
  {
    id: generateId('66'),
    name: 'Kudahuvadhoo Island',
    location: 'Maldives',
    price: '1,480',
    imageUrl: require('../assets/images/vacation2.png'),
  },
  {
    id: generateId('77'),
    name: 'Phi Phi Islands',
    location: 'Thailand',
    price: '1,480',
    imageUrl: require('../assets/images/vacation3.png'),
  },
  {
    id: generateId('88'),
    name: 'Kudahuvadhoo Island',
    location: 'Maldives',
    price: '1,480',
    imageUrl: require('../assets/images/vacation4.png'),
  },
];

export default vacationsArray;
