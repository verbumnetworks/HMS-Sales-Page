const pricingPlans = [
  {
    title: "Basic",
    price: "₦50,000",
    description: "Perfect for small clinics just starting out.",
    features: [
      "Patient Registration",
      "Appointment Scheduling",
      "Basic Reporting",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Standard",
    price: "₦100,000",
    description: "Ideal for growing hospitals needing more features.",
    features: [
      "All Basic Features",
      "Medical Records Management",
      "Billing & Invoicing",
    ],
    buttonText: "Choose Plan",
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
    buttonText: "Contact Sales",
  },
];

const Pricing:React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Pricing Plans</h2>
          <p className="text-gray-600">Choose the right plan for your hospital management needs.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex-1 max-w-sm hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center text-indigo-600">{plan.title}</h3>
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
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing
