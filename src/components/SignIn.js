import React from 'react';
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import close from "../assets/close.png";

function SignIn({ closeSignIn }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 fixed inset-0 z-50">
      <div className="relative flex flex-col justify-center items-center bg-white p-8 rounded shadow-lg w-96">
        {/* Close button */}
        <button onClick={closeSignIn} className="absolute top-2 right-2">
          <img src={close} alt="Close" className="w-5 h-5" />
        </button>

        <h1 className="text-3xl font-semibold mb-8 text-center">Create an account to start writing.</h1>

        {/* Google Sign In button */}
        <button className="flex items-center justify-between w-full p-3 mb-4 border rounded-full">
          <img src={google} alt="Google" className="w-6 h-6 mr-3" />
          <h4 className="flex-grow text-center">Sign up with Google</h4>
        </button>

        {/* Facebook Sign In button */}
        <button className="flex items-center justify-between w-full p-3 mb-4 border rounded-full">
          <img src={facebook} alt="Facebook" className="w-6 h-6 mr-3" />
          <h4 className="flex-grow text-center">Sign up with Facebook</h4>
        </button>

        {/* Email Sign In button */}
        <button className="flex items-center justify-between w-full p-3 mb-10 border rounded-full">
          <img src={email} alt="Email" className="w-6 h-6 mr-3" />
          <h4 className="flex-grow text-center">Sign up with email</h4>
        </button>

        <p className="mt-4 mb-8 text-center">
          Already have an account? <a href="/signin" className="text-green-600">Sign in</a>
        </p>

        <p className="text-sm text-gray-500 text-center">
          Click "Sign up" to agree to Medium's <a href="/" className="underline">Terms of Service</a> and acknowledge that Medium’s <a href="/" className="underline">Privacy Policy</a> applies to you.
        </p>
      </div>
    </div>
  );
}

export default SignIn;

