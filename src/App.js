import React from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import VacationForm from './containers/VacationForm/VacationForm';
import VacationList from './containers/VacationList/VacationList';
import AppLayout from './containers/AppLayout/AppLayout';
import vacationsArray from './data/data';

function App() {
  // vacationArray
  const handleEditClick = vacationId => {};
  const handleDeleteClick = vacationId => {};
  return (
    <AppLayout
      searchBar={<SearchBar />}
      vacationForm={<VacationForm />}
      vacationList={
        <VacationList
          vacations={vacationsArray}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
        />
      }
    />
  );
}

export default App;