import {useState, useEffect} from 'react';
import isURL from '../utils/isUrl';

const formValidators = {
  required: val => (val === '' ? 'This field is required' : ''),
  number: val =>
    !(!Number.isNaN(val) && !Number.isNaN(parseFloat(val)))
      ? 'Please enter number'
      : '',
  url: val => (!isURL(val) ? 'Please enter valid url' : ''),
};

const useForm = initialValues => {
  const [formValues, setFormValues] = useState(null);
  const [formIsValid, setFormIsValid] = useState(true);

  const setValues = (vals, reset = false) => {
    const values = {};
    Object.keys(vals).forEach(key => {
      values[key] = {
        value: reset ? '' : vals[key],
        error: '',
        hasError: vals[key] === '',
      };
    });
    setFormValues(values);
  };

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const setValue = (name, value, fieldName) => {
    setFormValues(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [fieldName]: value,
        hasError: fieldName === 'error' && value !== '',
      },
    }));
  };

  const checkFormValidity = () => {
    let isFormValid = true;
    Object.keys(formValues).forEach(key => {
      if (key !== 'id') {
        isFormValid &&= !formValues[key].hasError;
      }
    });
    setFormIsValid(isFormValid);
    return isFormValid;
  };

  const validate = (name, value, validators) => {
    let message = '';
    if (validators.includes('required')) {
      message = formValidators.required(value);
    }

    if (validators.includes('number') && message === '') {
      message = formValidators.number(value);
    }

    if (validators.includes('url') && message === '') {
      message = formValidators.url(value);
    }

    setValue(name, message, 'error');
    checkFormValidity();
  };

  const handleInput = ({target: {name, value}}, validators) => {
    setValue(name, value, 'value');
    validate(name, value, validators);
  };

  const submitForm = submitCallback => {
    if (checkFormValidity()) {
      const values = {};
      Object.keys(formValues).forEach(key => {
        values[key] = formValues[key].value;
      });

      submitCallback(values);
      setValues(initialValues, true);
    }
  };

  return [handleInput, formValues, formIsValid, submitForm];
};

export default useForm;
