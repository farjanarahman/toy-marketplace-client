import { useState } from 'react';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle registration logic
        // You can use the email and password state variables for registration
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input input-bordered"
                        placeholder="Enter your name"
                        required
                    />
                </div>
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
                <div className="form-control">
                    <label htmlFor="confirmPassword" className="label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input input-bordered"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="photoURL" className='label'>Photo URL</label>
                    <input className='input input-bordered' type="text" placeholder='Photo URL' />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
