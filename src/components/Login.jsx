import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      handleLogin(user);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid email or password!');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex flex-col md:flex-row h-screen w-screen items-center justify-center p-4'>
      <h1 className="text-lg m-5 font-semibold md:text-3xl sm:text-xl text-center md:text-left md:w-1/2">
        <span className="block">Welcome To</span>
        YouTube Notes Taking App📓
      </h1>
      <div className='border-2 rounded-xl border-emerald-600 p-6 md:p-20 w-full max-w-md'>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-4 md:px-6 rounded-full placeholder:text-gray-400 w-full'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-4 md:px-6 rounded-full mt-3 placeholder:text-gray-400 w-full'
            type="password"
            placeholder='Enter password'
          />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;