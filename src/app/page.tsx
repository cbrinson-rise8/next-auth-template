import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between items-center p-24">
      <h1 className="font-bold text-lg">Public Facing Page</h1>
      <button className="p-4 rounded-full bg-green-900 text-white">Click To Login</button>
    </main>
  );
}
