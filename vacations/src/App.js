import React from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import VacationForm from './containers/VacationForm/VacationForm';
import VacationList from './containers/VacationList/VacationList';
import AppLayout from './containers/AppLayout/AppLayout';

function App() {
  return (
      <AppLayout
          searchBar={<SearchBar />}
          vacationForm={<VacationForm />}
          vacationList={
            <VacationList
                vacations={[
                  {
                    name: 'Kudahuvadhoo Island',
                    location: 'Maldives',
                    price: '1,480',
                    imageUrl: require('./assets/images/vacation2.png'),
                  },
                  {
                    name: 'Kudahuvadhoo Island',
                    location: 'Maldives',
                    price: '1,480',
                    imageUrl:
                        'https://pbs.twimg.com/profile_images/712703916358537217/mcOketun_400x400.jpg',
                  },
                ]}
            />
          }
      />
  );
}

export default App;
