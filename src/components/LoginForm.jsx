import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

function LoginForm() {
  return (
    
    <div id="LoginForm" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        {/* Forgot Password Link */}
        <div className="text-right mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>


        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 mb-6">
          Login
        </button>

        {/* OR Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="border-t w-1/5 border-gray-300"></span>
          <span className="mx-3 text-gray-400">or</span>
          <span className="border-t w-1/5 border-gray-300"></span>
        </div>



        {/* Social Logins */}
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Login with Google
          </button>
          {/* <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaApple className="text-black" /> Login with Apple
          </button> */}
          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            <FaFacebook className="text-blue-600" /> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
