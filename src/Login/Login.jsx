import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic
    // You can use the email and password state variables for authentication
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className=" text-center text-2xl font-bold mb-4">Please Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
        <br />
        <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-700'>Register</Link></p>
        <button>Login With Google</button>
      </form>
    </div>
  );
};

export default LoginForm;
