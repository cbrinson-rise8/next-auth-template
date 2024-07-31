export default function Login() {
  return (
    <main className="w-screen h-screen p-24">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <form className="bg-green-200 border-2 border-black w-1/3 h-2/3 flex flex-col items-center p-12">
          <h1 className="font-bold">Login</h1>
          <div className="flex flex-col my-8">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <div className="flex flex-col mb-16">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="border-2 border-black p-1 outline-none"
            />
          </div>
          <span className="w-full h-[2px] bg-black"></span>
        </form>
      </div>
    </main>
  );
}
