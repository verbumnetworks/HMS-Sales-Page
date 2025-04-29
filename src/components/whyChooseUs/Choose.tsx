import {
  ShieldCheck,
  DollarSign,
  Sliders,
  ThumbsUp,
  LayoutDashboard,
  Unlock,
  MapPin,
  MessageCircleHeart,
  Cpu,
} from 'lucide-react';

const reasons = [
  {
    title: "Zero Tech Knowledge Needed",
    description:
      "Our HMS is designed for simplicity—staff can manage patients, records, billing, and more without technical skills.",
    icon: Cpu,
  },
  {
    title: "Affordable and Flexible",
    description:
      "Our pricing model fits every budget—offering premium features without financial strain.",
    icon: DollarSign,
  },
  {
    title: "Secure and Reliable",
    description:
      "With encryption, role-based access, daily backups, and 99.9% uptime, your data is always safe and accessible.",
    icon: ShieldCheck,
  },
  {
    title: "Fully Customizable",
    description:
      "We tailor the system to fit your hospital’s specific workflows, departments, and needs.",
    icon: Sliders,
  },
  {
    title: "User-Friendly Interface",
    description:
      "A clean dashboard and intuitive navigation make it easy for doctors and staff to use daily.",
    icon: LayoutDashboard,
  },
  {
    title: "Full Access – No Hidden Modules",
    description:
      "All features are available upfront—no locked modules or premium add-ons.",
    icon: Unlock,
  },
  {
    title: "Locally Built and Supported",
    description:
      "Built for local realities, with fast support and understanding of local healthcare operations.",
    icon: MapPin,
  },
  {
    title: "Boosts Patient Relationships",
    description:
      "Automated appointment reminders, thank-you messages, birthday wishes, and feedback prompts build trust and engagement.",
    icon: MessageCircleHeart,
  },
];

const Choose:React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="why-choose">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Why Choose Verbum Health HMS
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Verbum Health empowers hospitals and clinics with a secure, user-friendly, and affordable system tailored to your unique needs. Here’s what makes us the smart choice.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Choose