import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Rentheria',
    email: 'rentheria.dev@gmail.com',
  });

  const { username, email } = formState;

  const onInoutChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log('onInit');
  // }, []);

  // useEffect(() => {
  //   console.log('FormChangeValue');
  // }, [formState]);

  // useEffect(() => {
  //   console.log('emailOnChangeValue');
  // }, [email]);

  return (
    <>
      <h1 className="text-3xl mb-5">Simple Form</h1>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={username}
          onChange={onInoutChange}
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium">Your email</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          name="email"
          value={email}
          onChange={onInoutChange}
          required
        />
      </div>

      {username === 'Rentheria2' && <Message />}
    </>
  );
};
