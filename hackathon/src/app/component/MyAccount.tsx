
'use client'
import React, { useState } from 'react';

export default function AuthPage() {
  // State to handle authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission (Login)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Set the username to the email entered (or modify as needed)
    if (email && password) {
      setIsAuthenticated(true);
      setUsername(email.split('@')[0]); // Display part of the email as the username
    }
  };

  // Handle form submission (Register)
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for registration (not implemented in this example)
    console.log('User registered:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl p-8 rounded-lg">
        {/* Check if user is authenticated, show welcome message */}
        {isAuthenticated ? (
          <div className="col-span-2 text-center">
            <h2 className="text-2xl font-bold mb-6">Welcome, {username}!</h2>
            <p className="text-sm text-gray-600">You have successfully logged in.</p>
            <p className="mt-4 text-sm text-gray-600">
              Enjoy browsing through our platform. Let us know if you need any help!
            </p>
          </div>
        ) : (
          <>
            {/* Login Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Log In</h2>
              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username or email address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-600">
                <a href="#" className="text-blue-600 hover:underline">
                  Lost Your Password?
                </a>
              </p>
            </div>

            {/* Register Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Register</h2>
              <form className="space-y-6" onSubmit={handleRegister}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <p className="text-sm text-gray-600">
                  A link to set a new password will be sent to your email address.
                  <br />
                  <br />
                  Your personal data will be used to support your experience throughout this website, to manage
                  access to your account, and for other purposes described in our{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </p>

                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


//   'use client'

// import React, { useState } from 'react';

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true); // To toggle between login and register form
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // To track if user is logged in or registered
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     username: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isLogin) {
//       // Handle login logic
//       console.log('Logging in with:', formData);
//       setIsAuthenticated(true); // Set user as authenticated
//     } else {
//       // Handle register logic
//       console.log('Registering with:', formData);
//       setIsAuthenticated(true); // Set user as authenticated
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false); // Log out user
//     setFormData({ email: '', password: '', username: '' }); // Reset form
//   };

//   // Display profile if authenticated
//   if (isAuthenticated) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-6">Welcome, {formData.username || formData.email}!</h2>
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-xl font-semibold">Profile Information:</h3>
//               <p><strong>Email:</strong> {formData.email}</p>
//               <p><strong>Username:</strong> {formData.username || 'N/A'}</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//             >
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Show login/register form if not authenticated
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl p-8 rounded-lg">
//         {/* Toggle between Login and Register Form */}
//         <div>
//           <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Log In' : 'Register'}</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email / Username Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 {isLogin ? 'Username or email address' : 'Email address'}
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Username Field (Only for Register) */}
//             {!isLogin && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               >
//                 {isLogin ? 'Log In' : 'Register'}
//               </button>
//             </div>
//           </form>

//           {/* Toggle Between Login and Register */}
//           <p className="mt-4 text-sm text-gray-600">
//             {isLogin ? (
//               <>
//                 <span>Don't have an account? </span>
//                 <button
//                   onClick={() => setIsLogin(false)}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Register
//                 </button>
//               </>
//             ) : (
//               <>
//                 <span>Already have an account? </span>
//                 <button
//                   onClick={() => setIsLogin(true)}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Log In
//                 </button>
//               </>
//             )}
//           </p>
//         </div>

//         {/* Data Display (For Debugging, can be removed) */}
//         <div className="mt-6 md:mt-0">
//           <h3 className="text-xl font-bold mb-4">Form Data:</h3>
//           <pre className="bg-gray-100 p-4 rounded-md">{JSON.stringify(formData, null, 2)}</pre>
//         </div>
//       </div>
//     </div>
//   );
// }
