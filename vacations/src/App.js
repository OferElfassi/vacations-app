import React, {useState} from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import VacationForm from './containers/VacationForm/VacationForm';
import VacationList from './containers/VacationList/VacationList';
import AppLayout from './containers/AppLayout/AppLayout';
import vacationsArray from './data/data';
import useArray from './hooks/useArray';
import generateId from './utils/generateId';

function App() {
  const [listFilter, setListFilter] = useState('');
  const [vacationEdit, setVacationEdit] = useState(null);
  const [vacations, addVacation, editVacation, deleteVacation] =
    useArray(vacationsArray);

  const handleEditClick = vacationId => {
    const fetchedVacation = vacations.find(vac => vac.id === vacationId);
    setVacationEdit(fetchedVacation);
  };

  const handleDeleteVacationClick = vacationId => {
    if (vacationEdit && vacationId === vacationEdit.id) {
      setVacationEdit(null);
    }
    deleteVacation(vacationId);
  };

  const handleAddVacationClick = vacationData => {
    const newVacation = {...vacationData, id: generateId(vacationData.name)};
    addVacation(newVacation);
  };

  const handleFormCancelClick = () => {
    setVacationEdit(null);
  };

  const handleEditSubmit = vacation => {
    editVacation(vacation);
    setVacationEdit(null);
  };

  return (
    <AppLayout
      searchBar={<SearchBar onSearchClick={setListFilter} />}
      vacationForm={
        <VacationForm
          onSubmitClick={handleAddVacationClick}
          onCancelClick={handleFormCancelClick}
          onEditClick={handleEditSubmit}
          initialValues={vacationEdit}
          editMode={vacationEdit !== null}
        />
      }
      vacationList={
        <VacationList
          filter={listFilter}
          vacations={vacations}
          onDeleteClick={handleDeleteVacationClick}
          onEditClick={handleEditClick}
          selectedId={vacationEdit && vacationEdit.id}
        />
      }
    />
  );
}

export default App;
