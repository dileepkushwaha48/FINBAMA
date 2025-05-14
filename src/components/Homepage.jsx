import { Link } from "react-router-dom";
import image from "../assets/image.png";

export default function Homepage() {
  return (
    <section
      id="Homepage"
      className="relative text-center py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to Finbama
        </h1>

        <p className="text-lg sm:text-xl text-red-300 mb-4">
          Empowering You to Take Control of Your Financial Future
        </p>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Finbama is your smart, intuitive personal finance advisor that helps you plan,
          manage, save, invest, and retire — the smart way.
        </p>

        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4">
          <Link to="/create-account">
            <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 sm:py-3 text-base rounded hover:bg-green-700 transition-colors">
              Create Your Free Account
            </button>
          </Link>

          <Link to="/BookfreeFor">
            <button className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 sm:py-3 text-base rounded hover:bg-red-700 transition-colors">
              Book a Free Consultation
            </button>
          </Link>

          <Link to="/explore-services">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 sm:py-3 text-base rounded hover:bg-blue-700 transition-colors">
              Explore Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
