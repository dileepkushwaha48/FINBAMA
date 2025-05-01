import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ExploreServices() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    { title: "💰 Budget Planning", description: "Build a realistic budget and track your expenses to stay financially healthy." },
    { title: "📈 Investment Guidance", description: "Get expert advice on stocks, mutual funds, and other investment vehicles." },
    { title: "🏖️ Retirement Plans", description: "Plan for a stress-free retirement with tailored strategies." },
    { title: "📉 Debt Management", description: "Reduce and eliminate your debt with smart repayment plans." },
    { title: "📊 Tax Optimization", description: "Maximize your savings with personalized tax planning." },
    { title: "📚 Financial Education", description: "Learn the fundamentals of personal finance with easy-to-follow resources." },
    { title: "🏡 Home Buying Assistance", description: "Get support on saving, mortgage selection, and loan approvals." },
    { title: "🎓 Student Loan Planning", description: "Understand your options for paying off or consolidating student debt." },
    { title: "🛡️ Insurance Planning", description: "Choose the right insurance plans for health, life, and property." },
  ]

  // Handle the selection of a service
  const handleSelectService = (title) => {
    setSelectedService(title === selectedService ? null : title) // Toggle selection
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center px-4 sm:px-6 py-16">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
          Our Financial Services
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Explore Our Services</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          At Finbama, we provide a wide range of personal finance services — from budgeting and investment guidance to
          retirement and debt management. See how we can support your financial journey.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {services.map(({ title, description }) => {
          const isSelected = selectedService === title // Check if service is selected
          return (
            <div
              key={title}
              onClick={() => handleSelectService(title)} // Toggle the selected service
              className={`bg-white rounded-xl cursor-pointer transition-all duration-300 p-6 sm:p-8 border ${
                isSelected
                  ? "bg-emerald-100 border-emerald-500 ring-2 ring-emerald-200" // Highlight selected service
                  : "border-slate-100 hover:shadow-md hover:border-slate-200"
              }`}
            >
              <h2 className={`text-xl font-semibold ${isSelected ? "text-emerald-600" : "text-slate-800"}`}>
                {title}
              </h2>
              <p className="text-slate-600">{description}</p>
              {isSelected && (
                <div className="mt-4 opacity-100">
                  <div className="inline-flex items-center text-sm font-medium text-emerald-600">
                    LearnMore <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <a href={selectedService ? "/BookfreeFor" : "#"}>
          <button
            disabled={!selectedService}
            className={`bg-blue-600 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center ${
              selectedService ? "" : "cursor-not-allowed opacity-50"
            }`}
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </a>
        <p className="mt-4 text-slate-500 text-sm">
          {selectedService
            ? "No obligations. Let's discuss your financial goals."
            : "Please select a service to continue."}
        </p>
      </div>
    </div>
  )
}


