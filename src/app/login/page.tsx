"use client";

import React, { FormEvent } from "react";

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
  };

  return (
    <main className="w-screen h-screen p-24 flex justify-center items-center">
      <div className="flex flex-col bg-green-200 border-2 border-black p-12 items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h1 className="font-bold">Login</h1>
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
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white border-2 border-black py-2 px-4"
          >
            Login
          </button>
        </form>

        <span className="w-full h-[2px] bg-black my-16"></span>

        <button className="border-2 border-white bg-black text-white w-fit py-2 px-4">Login with Google</button>
      </div>
    </main>
  );
}
