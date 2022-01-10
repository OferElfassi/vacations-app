import {useState} from 'react';

const useArray = initialArray => {
  const [array, updateArray] = useState(initialArray);

  const addItem = itemData => {
    updateArray(prevState => [...prevState, itemData]);
  };

  const editItem = itemData => {
    updateArray(
      array.map(item => (item.id === itemData.id ? {...itemData} : item)),
    );
  };

  const deleteItem = itemId => {
    updateArray(array.filter(item => item.id !== itemId));
  };

  return [array, addItem, editItem, deleteItem];
};
export default useArray;
