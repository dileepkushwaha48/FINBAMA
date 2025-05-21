import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for charts - in a real app, this would be dynamic
const sampleChartData = [
  { month: "Jan", value: 1000 },
  { month: "Feb", value: 1200 },
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1400 },
  { month: "May", value: 1800 },
  { month: "Jun", value: 2000 },
];

const services = [
  {
    title: "Personal Finance Planning",
    quote: "Failing to plan is planning to fail",
    features: [
      "Budget creation and optimization",
      "Income & expense tracker and analyzer",
      "Goal-based financial mapping",
    ],
    innovation: "AI-based forecasting to simulate cash flows and flag issues early.",
  },
  {
    title: "Money Management",
    quote: "It's not about how much you earn, but how well you manage it.",
    features: ["Real-time dashboard", "Expense alerts", "Debt payoff strategies", "Subscription tracking"],
    innovation: "Bank & wallet integration for auto-insights.",
  },
  {
    title: "Saving Plans",
    quote: "A rupee saved is a rupee earned — and invested.",
    features: [
      "Customized saving plans (short-, mid-, and long-term)",
      "Smart round-up savings",
      "Goal-tracker for each saving plan",
      "High-interest saving opportunities",
      "Emergency Fund Plans",
    ],
    innovation: "Gamify saving: set challenges and earn rewards on milestones.",
  },
  {
    title: "Investment Advisory",
    quote: "Make your money work as hard as you do.",
    features: [
      "Personalized portfolio suggestions",
      "Beginner-friendly investment knowledge",
      "Mutual funds, stocks, bonds guidance",
      "SIP planning and tracking",
      "Portfolio diversification strategy",
    ],
    innovation: "AI-based robo-advisor for real-time portfolio health & adjustments.",
  },
  {
    title: "Retirement Planning",
    quote: "The earlier you plan, the better you live later.",
    features: [
      "Retirement corpus calculation",
      "Pension scheme evaluations (EPF, SSF, private plans)",
      "Tax-saving retirement investment options",
      "Lifestyle-based retirement simulations",
    ],
    innovation: "'Future You' simulator to visualize retirement lifestyle and plan better.",
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="services" className="bg-yellow-400 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6 sm:mb-8 md:mb-10"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col h-full border border-gray-100 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 border-b border-gray-100">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="italic text-gray-600 text-sm sm:text-base">"{service.quote}"</p>
              </div>

              {/* Mini Chart */}
              <div className="h-24 bg-blue-50 px-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sampleChartData}>
                    <defs>
                      <linearGradient id={`colorGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" hide />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: "white",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      }}
                      formatter={(value) => [`₹${value}`, "Value"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill={`url(#colorGradient${index})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-grow">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 sm:pt-0 mt-auto">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-blue-700 font-medium">
                    <span className="font-bold block mb-1">Our Innovation:</span>
                    {service.innovation}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
