// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";

// // Custom icon component
// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => <Icon className={className || ""} />;

// const LoginForm = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       router.push("/admin"); // Direct to admin page if already logged in
//     }
//   }, [router]);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
//     const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

//     if (email === adminEmail && password === adminPassword) {
//       setMessage("Login successful");
//       localStorage.setItem("isLoggedIn", "true"); // Set login status in local storage
//       setIsLoggedIn(true);
//       router.push("/admin/deshboard");
//     } else {
//       if (email !== adminEmail) {
//         setMessage("Invalid email address");
//       } else if (password !== adminPassword) {
//         setMessage("Invalid password");
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
//       <form
//         onSubmit={handleLogin}
//         className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 overflow-hidden"
//       >
//         {/* Decorative elements */}
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-300/30 rounded-full blur-xl" />
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-300/30 rounded-full blur-xl" />

//         <div className="text-center mb-10">
//           <div className="mx-auto mb-6 flex justify-center">
//             <div className="p-4 bg-purple-100 rounded-full shadow-lg">
//               <ThemedIcon icon={FaUserAlt} className="text-4xl text-indigo-500" />
//             </div>
//           </div>
//           <h2 className="text-4xl font-semibold text-white mb-3">Admin Login</h2>
//           <p className="text-white/80">Access your dashboard securely</p>
//         </div>

//         {message && (
//           <div
//             className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
//               message.includes("Invalid")
//                 ? "bg-red-100/30 text-red-200"
//                 : "bg-green-100/30 text-green-200"
//             }`}
//           >
//             <div className={`flex-1 text-center font-medium ${message.includes("Invalid") ? "animate-shake" : ""}`}>
//               {message}
//             </div>
//           </div>
//         )}

//         <div className="space-y-6">
//           {/* Email Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon icon={FaEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg" />
//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-4 py-4 bg-white/5 border border-indigo-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon icon={FaLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg" />
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Admin Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-12 py-4 bg-white/5 border border-indigo-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-500 transition-colors"
//               >
//                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-500 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-200 active:scale-95"
//           >
//             Login
//           </button>
//         </div>

//         {/* Footer Note */}
//         <p className="mt-8 text-center text-sm text-indigo-300">
//           Restricted access - authorized personnel only
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;




'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";

// Custom icon component
const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => <Icon className={className || ""} />;

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin"); // Direct to admin page if already logged in
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
    const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      setMessage("Login successful");
      localStorage.setItem("isLoggedIn", "true"); // Set login status in local storage
      router.push("/admin/deshboard");
    } else {
      if (email !== adminEmail) {
        setMessage("Invalid email address");
      } else if (password !== adminPassword) {
        setMessage("Invalid password");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
      <form
        onSubmit={handleLogin}
        className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-300/30 rounded-full blur-xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-300/30 rounded-full blur-xl" />

        <div className="text-center mb-10">
          <div className="mx-auto mb-6 flex justify-center">
            <div className="p-4 bg-purple-100 rounded-full shadow-lg">
              <ThemedIcon icon={FaUserAlt} className="text-4xl text-indigo-500" />
            </div>
          </div>
          <h2 className="text-4xl font-semibold text-white mb-3">Admin Login</h2>
          <p className="text-white/80">Access your dashboard securely</p>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
              message.includes("Invalid")
                ? "bg-red-100/30 text-red-200"
                : "bg-green-100/30 text-green-200"
            }`}
          >
            <div className={`flex-1 text-center font-medium ${message.includes("Invalid") ? "animate-shake" : ""}`}>
              {message}
            </div>
          </div>
        )}

        <div className="space-y-6">
          {/* Email Input */}
          <div className="group">
            <div className="relative">
              <ThemedIcon icon={FaEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg" />
              <input
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-indigo-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group">
            <div className="relative">
              <ThemedIcon icon={FaLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg" />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-4 bg-white/5 border border-indigo-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-500 transition-colors"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-500 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-indigo-200 active:scale-95"
          >
            Login
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-indigo-300">
          Restricted access - authorized personnel only
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
