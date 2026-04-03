export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 w-full"
          />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}