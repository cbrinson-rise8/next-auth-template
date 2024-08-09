"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex flex-col min-h-screen justify-between items-center p-24">
      <h1 className="font-bold text-lg">Public Facing Page</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => router.push("/login")}
          className="p-4 rounded-full bg-green-200 border-2 border-black"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/register")}
          className="p-4 rounded-full bg-green-200 border-2 border-black"
        >
          Register
        </button>
      </div>
    </main>
  );
}
