import React from "react";

function SignupCard() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2">
        <div className="p-2">
          First name
          <input
            className="border border-gray-500 p-2 rounded-lg w-full"
            id="first-name"
            placeholder="First name"
            required
          />
        </div>
        <div className="p-2">
          Last name
          <input
            className="border border-gray-500 p-2 rounded-lg w-full"
            id="last-name"
            placeholder="Last name"
            required
          />
        </div>
      </div>
      <div className="p-2">
        Username
        <input
          className="border border-gray-500 p-2 rounded-lg w-full"
          id="username"
          placeholder="Username"
          required
        />
      </div>
      <div className="p-2">
        Email
        <input
          className="border border-gray-500 p-2 rounded-lg w-full"
          id="email"
          placeholder="Email"
          required
          type="email"
        />
      </div>
      <div className="p-2">
        Password
        <input
          className="border border-gray-500 p-2 rounded-lg w-full"
          id="password"
          placeholder="Password"
          required
          type="password"
        />
      </div>
      <div className="p-2">
        Phone (optional)
        <input
          className="border border-gray-500 p-2 rounded-lg w-full"
          id="phone"
          placeholder="Phone"
        />
      </div>
      <button className="bg-blue-500 rounded-lg p-2.5 ml-2 w-1/2" type="submit">
        Sign Up
      </button>
    </div>
  );
}

export default SignupCard;
