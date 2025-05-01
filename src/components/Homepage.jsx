
import { Link } from "react-router-dom";
import image from "../assets/image.png"


export default function Homepage() {
  return (
    <section id="Homepage"
      className="text-center py-10 sm:py-16 md:py-20 px-4 sm:px-5 md:px-8 bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-4">
          Welcome to Finbama
        </h1>

        <p className="text-lg sm:text-xl text-red-700 mb-3 sm:mb-6 font-normal">
          Empowering You to Take Control of Your Financial Future
        </p>

        <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto mb-6 sm:mb-8">
          Finbama is your smart, intuitive personal finance advisor that helps you plan, manage, save, invest, and
          retire — the smart way.
        </p>

        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3 sm:gap-4">
          <Link to="/create-account">
            <button className="w-full sm:w-auto bg-green-600 border border-none text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-green-700 transition-colors">
              Create Your Free Account
            </button>
          </Link>


          <Link to="/BookfreeFor">
            <button className="w-full sm:w-auto bg-red-600 border border-none text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-red-700 transition-colors">
              Book a Free Consultation
            </button>
          </Link>

          <Link to="/explore-services">
            <button className="w-full sm:w-auto bg-blue-600 border border-none text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-700 transition-colors">
              Explore Our Services
            </button>
          </Link>

        </div>
      </div>
    </section>
  )
}

