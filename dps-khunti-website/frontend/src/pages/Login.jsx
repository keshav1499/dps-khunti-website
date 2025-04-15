export function Login() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input type="text" placeholder="Email" className="border p-2 m-2 w-full" />
      <input type="password" placeholder="Password" className="border p-2 m-2 w-full" />
      <button className="bg-green-500 text-white p-2 w-full mt-2">Login</button>
    </div>
  );
}
