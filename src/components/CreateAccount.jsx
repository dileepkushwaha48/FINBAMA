import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

function CreateAccount() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

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
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right mb-6">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                    </a>
                </div>


                {/* Register Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 mb-6">
                    Create Account
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
                        <FaGoogle className="text-red-500" /> Sign up with Google
                    </button>
                    {/* <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                        <FaApple className="text-black" /> Sign up with Apple
                    </button> */}
                    <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                        <FaFacebook className="text-blue-600" /> Sign up with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
