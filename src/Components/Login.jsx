import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn,setIsSignIn] = useState(true)

	const toggleSignIn = ()=> {
		setIsSignIn(!isSignIn)
	}



  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/TH-en-20241209-TRIFECTA-perspective_4fdfa0e2-ea2c-438b-a236-f634768ee643_large.jpg" />
      </div>
      <form className="absolute p-12 bg-black w-3/12  my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
	{!isSignIn &&
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />}
        <input
          type="text"
          placeholder="Enter email"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="text"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "Are you new to Netflix? Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
