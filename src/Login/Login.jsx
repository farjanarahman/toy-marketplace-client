import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const LoginForm = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Login');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-center text-2xl font-bold mb-4">Please Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div className="form-control">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
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
