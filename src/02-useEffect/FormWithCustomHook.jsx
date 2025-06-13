import { useForm } from '../hooks/useForm';

export const FormWithCustomForm = () => {
  const { onInoutChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1 className="text-3xl mb-5">Form with custom hook</h1>
      <div class="w-full">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={username}
              onChange={onInoutChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              name="email"
              value={email}
              onChange={onInoutChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 test-sm font-medium">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={onInoutChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              onClick={onResetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
