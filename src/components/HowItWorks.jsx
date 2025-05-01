const steps = [
  { title: "Onboard & Assess", desc: "Tell us about yourself: income, goals, challenges." },
  { title: "Personalized Planning", desc: "We craft a strategy tailored to your lifestyle." },
  { title: "Track & Improve", desc: "Monitor with dashboards and reports." },
  { title: "Grow & Secure", desc: "Save smarter, invest better." },
  { title: "Forever Financial Partner", desc: "We support your financial journey long-term." },
]

export default function HowItWorks() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6 sm:mb-8 md:mb-12">How It Works</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-blue-100 hidden sm:block" />

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 relative">
                  {/* Step number in circle */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 text-lg sm:text-xl font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Step content */}
                  <div className="sm:pt-1.5 w-full sm:w-auto">
                    <h4 className="font-semibold text-lg sm:text-xl text-blue-900">{step.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

