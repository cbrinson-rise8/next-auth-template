"use client";

import React, { FormEvent, useState } from "react";

export default function Register() {

  const [error, setError] = useState("");


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm-password");

    setError("");
    if(password !== confirmPassword) {
      setError("passwords don't match");
      return;
    }
  };

  return (
    <main className="w-screen h-screen p-24 flex justify-center items-center">
      <div className="relative flex flex-col bg-green-200 border-2 border-black p-12 items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h1 className="font-bold">Register</h1>
          <div className="flex flex-col my-8 w-56">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <div className="flex flex-col mb-8 w-56">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter a password"
              autoComplete="new-password"
              required
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <div className="flex flex-col mb-8 w-56">
            <label htmlFor="password">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Confirm password"
              autoComplete="new-password"
              required
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white border-2 border-black py-2 px-4"
          >
            Register
          </button>
        </form>

        <span className="text-red text-xs text-red-500 absolute bottom-2">{error}</span>
      </div>
    </main>
  );
}
