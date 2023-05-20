import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const RegisterForm = () => {

    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
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
                <div className="form-control">
                    <label htmlFor="confirmPassword" className="label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
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


// import { useState, useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const { createUser } = useContext(AuthContext);

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       // Call the createUser function with the necessary parameters
//       await createUser(name, email, password);
//       // TODO: Handle successful user registration
//     } catch (error) {
//       // TODO: Handle user registration error
//       console.log(error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-center text-2xl font-bold mb-4">Please Register</h2>
//       <form onSubmit={handleRegister} className="space-y-4">
//         <div className="form-control">
//           <label htmlFor="name" className="label">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="input input-bordered"
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="email" className="label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input input-bordered"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="password" className="label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input input-bordered"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="confirmPassword" className="label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="input input-bordered"
//             placeholder="Confirm your password"
//             required
//           />
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button type="submit" className="btn btn-primary w-full">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

