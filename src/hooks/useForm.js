import { useState } from 'react';

export const useForm = (initialform = {}) => {
  const [formState, setFormState] = useState(initialform);

  const onInoutChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialform);
  };

  return { ...formState, formState, onInoutChange, onResetForm };
};
