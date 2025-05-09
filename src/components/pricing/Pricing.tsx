"use client"
import Button from "../btn/Button";
const pricingPlans = [
  {
    title: "Basic",
    price: "₦200,000",
    description: "Perfect for small clinics just starting out.",
    features: [
      "Patient Registration",
      "Appointment Scheduling",
      "Basic Reporting",
    ],
  },
  {
    title: "Standard",
    price: "₦3,000,000,000",
    description: "Ideal for growing hospitals needing more features.",
    features: [
      "All Basic Features",
      "Medical Records Management",
      "Billing & Invoicing",
    ],
  },
  {
    title: "Premium",
    price: "₦200,000",
    description: "For large hospitals needing full customization.",
    features: [
      "All Standard Features",
      "Inventory Management",
      "Custom Reports & Analytics",
    ],
  },
];

const Pricing:React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-4  bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">Pricing Plans</h2>
          <p className="text-gray-600">Choose the right plan for your hospital management needs.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex-1 max-w-sm hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">{plan.title}</h3>
              <p className="text-3xl font-bold text-center text-gray-800 mb-2">{plan.price}</p>
              <p className="text-center text-gray-500 mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-3 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    • {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                  {plan.buttonText}
                </button> */}
                  <Button
                            label="Select plan"
                            variant="outline"
                            onClick={() => (window.location.href = "#contact")}
                          />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing
