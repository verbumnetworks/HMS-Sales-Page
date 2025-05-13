import { reasons } from "@/constants/Constant";

const Choose: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50" id="why-choose">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text mb-4">
          Why Choose Verbum Health HMS
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Verbum Health empowers hospitals and clinics with a secure, user-friendly, and affordable system tailored to your unique needs. Here’s what makes us the smart choice.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, id) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-b from-black to-[#0de4d6] text-white">
<Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-black">
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
};

export default Choose;
