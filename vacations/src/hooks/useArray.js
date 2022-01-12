import {useState, useCallback} from 'react';

const useArray = initialArray => {
  const [array, updateArray] = useState(initialArray);

  const addItem = useCallback(itemData => {
    updateArray(prevState => [...prevState, itemData]);
  }, []);

  const editItem = useCallback(itemData => {
    updateArray(prevState =>
      prevState.map(item => (item.id === itemData.id ? {...itemData} : item)),
    );
  }, []);

  const deleteItem = useCallback(itemId => {
    updateArray(prevState => prevState.filter(item => item.id !== itemId));
  }, []);

  return [array, addItem, editItem, deleteItem];
};
export default useArray;
