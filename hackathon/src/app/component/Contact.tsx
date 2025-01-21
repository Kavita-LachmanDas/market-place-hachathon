// 'use client'

// import React, { useState } from "react";
// // import Footer from "./Footer";
// // import Header from "./Header";
// import Pagination from "./Pagination";

// export default function Contact() {
//   // State variables for form fields and dynamic content
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const [submittedData, setSubmittedData] = useState<null | any>(null);

//   // State variables for contact information that will be updated dynamically
//   const [address, setAddress] = useState("236 5th SE Avenue, New York NY10000, United States");
//   const [phone, setPhone] = useState("Mobile: +(84) 546-6789 | Hotline: +(84) 456-6789");
//   const [workingTime, setWorkingTime] = useState(
//     "Monday-Friday: 9:00 - 22:00 | Saturday-Sunday: 9:00 - 21:00"
//   );

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Form submission logic
//     const formData = {
//       name,
//       email,
//       subject,
//       message,
//       address,
//       phone,
//       workingTime,
//     };

//     // Update the submitted data state to show confirmation
//     setSubmittedData(formData);

//     // Show an alert with the success message
//     alert(`Thank you, ${formData.name}! Your message has been submitted successfully.`);

//     // Clear form fields after submission
//     setName("");
//     setEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   return (
//     <div>
//       {/* <Header /> */}
//       <div>
//         {/* Hero Section */}
//         <div className="overflow-x-hidden">
//   <div
//     className="bg-cover bg-center h-56 flex items-center justify-center"
//     style={{ backgroundImage: "url('/img4.png')" }}
//   >
//     <div className="text-center px-4">
//       <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
//       <p className="text-gray-500 mt-2">
//         <span className="text-gray-400">Home</span> &gt; Contact
//       </p>
//     </div>
//   </div>

//   <div className="min-h-screen flex justify-center items-center px-4 py-5">
//     <div className="w-full max-w-6xl bg-white rounded-lg shadow p-8">
//       <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch With Us</h2>
//       <p className="text-center text-gray-600 mb-8">
//         For More Information About Our Product & Services, Please Feel Free To Drop Us <br />
//         An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
//       </p>
//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Contact Information */}
//         <div className="space-y-6">
//           <div className="flex items-start gap-4">
//             <div className="text-xl">📍</div>
//             <div>
//               <h4 className="font-bold">Address</h4>
//               <p>{submittedData ? submittedData.address : address}</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <div className="text-xl">📞</div>
//             <div>
//               <h4 className="font-bold">Phone</h4>
//               <p>{submittedData ? submittedData.phone : phone}</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-4">
//             <div className="text-xl">⏰</div>
//             <div>
//               <h4 className="font-bold">Working Time</h4>
//               <p>{submittedData ? submittedData.workingTime : workingTime}</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block font-medium mb-1">Your name</label>
//             <input
//               type="text"
//               placeholder="Abc"
//               className="w-full border rounded p-2"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Email address</label>
//             <input
//               type="email"
//               placeholder="Abc@def.com"
//               className="w-full border rounded p-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Subject</label>
//             <input
//               type="text"
//               placeholder="This is optional"
//               className="w-full border rounded p-2"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Message</label>
//             <textarea
//               placeholder="Hi! I’d like to ask about"
//               className="w-full border rounded p-2 h-28"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Success Message */}
//         {submittedData && (
//           <div className="mt-6 text-center text-green-600">
//             <p>Thank you, {submittedData.name}! Your message has been submitted successfully.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
// </div>

//       <Pagination />
//       {/* <Footer /> */}
//     </div>
//   );
// }









'use client';

import React, { useState } from "react";
import Pagination from "./Pagination";

interface SubmittedData {
  name: string;
  email: string;
  subject: string;
  message: string;
  address: string;
  phone: string;
  workingTime: string;
}

export default function Contact() {
  // State variables for form fields and dynamic content
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  // State variables for contact information that will be updated dynamically
  const address = "236 5th SE Avenue, New York NY10000, United States";
  const phone = "Mobile: +(84) 546-6789 | Hotline: +(84) 456-6789";
  const workingTime =
    "Monday-Friday: 9:00 - 22:00 | Saturday-Sunday: 9:00 - 21:00";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form submission logic
    const formData = {
      name,
      email,
      subject,
      message,
      address,
      phone,
      workingTime,
    };

    // Update the submitted data state to show confirmation
    setSubmittedData(formData);

    // Show an alert with the success message
    alert(`Thank you, ${formData.name}! Your message has been submitted successfully.`);

    // Clear form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="overflow-x-hidden">
        <div
          className="bg-cover bg-center h-56 flex items-center justify-center"
          style={{ backgroundImage: "url('/img4.png')" }}
        >
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
            <p className="text-gray-500 mt-2">
              <span className="text-gray-400">Home</span> &gt; Contact
            </p>
          </div>
        </div>

        <div className="min-h-screen flex justify-center items-center px-4 py-5">
          <div className="w-full max-w-6xl bg-white rounded-lg shadow p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Get In Touch With Us
            </h2>
            <p className="text-center text-gray-600 mb-8">
              For More Information About Our Product & Services, Please Feel Free To Drop Us <br />
              An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-xl">📍</div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>{submittedData ? submittedData.address : address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-xl">📞</div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>{submittedData ? submittedData.phone : phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-xl">⏰</div>
                  <div>
                    <h4 className="font-bold">Working Time</h4>
                    <p>{submittedData ? submittedData.workingTime : workingTime}</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-medium mb-1">Your name</label>
                  <input
                    type="text"
                    placeholder="Abc"
                    className="w-full border rounded p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Email address</label>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="w-full border rounded p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    className="w-full border rounded p-2"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Message</label>
                  <textarea
                    placeholder="Hi! I’d like to ask about"
                    className="w-full border rounded p-2 h-28"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
                >
                  Submit
                </button>
              </form>

              {/* Success Message */}
              {submittedData && (
                <div className="mt-6 text-center text-green-600">
                  <p>Thank you, {submittedData.name}! Your message has been submitted successfully.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
}
