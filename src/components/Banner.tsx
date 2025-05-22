"use client";
import Button from "./btn/Button";

const Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#0de4d6] to-black py-16 shadow-2xl">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Transform Your Hospital Management Today
        </h2>
        <p className="text-lg text-indigo-100 mb-8 max-w-2xl">
          Streamline your operations, improve patient care, and grow your
          healthcare facility with our HMS solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            label="Get Started"
            variant="primary"
            onClick={() =>
              (window.location.href = "https://dev.verbumhealth.com/login")
            }
          />
          <Button
            label="Request a Demo"
            variant="outline"
            onClick={() => (window.location.href = "#contact")}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
