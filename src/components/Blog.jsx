export default function Blog() {
  return (
    <section id="Blog" className="bg-gray-100 py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6">
          Blog & Insights
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-6 sm:mb-8">
          Explore our blog for financial tips, case studies, and success stories. Stay informed and inspired.
        </p>

        {/* Featured Blog Posts - Simple Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Featured Image {item}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Financial Freedom Tips</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Learn how to achieve financial independence with these practical strategies and insights.
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>April 7, 2023</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-2 sm:mt-4 bg-blue-600 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Visit Our Blog
        </button>
      </div>
    </section>
  )
}

