import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const checklistItems = [
  {
    title: "Patient Registration",
    description:
      "The process starts when a patient walks into the hospital or accesses the system online. Their personal details such as name, age, gender, contact information, and any relevant medical history are entered into the HMS. This creates a digital patient profile that can be updated and accessed at any time, ensuring efficient record keeping and continuity of care.",
  },
  {
    title: "Doctor Consultation",
    description:
      "When it’s time for the appointment, the doctor logs into the system and accesses the patient’s records. During the consultation, the doctor enters symptoms, makes a diagnosis, prescribes medications, and may also recommend lab tests. All notes and actions are stored in the patient’s file for future reference.",
  },
  {
    title: " Lab Test Requests",
    description:
      "If the doctor orders any laboratory tests, the request is automatically sent to the lab department through the HMS. Lab technicians conduct the tests, record the results, and upload them to the system. The doctor and patient can view the results in real time, reducing delays in diagnosis and treatment.",
  },
  {
    title: "Follow-Up or Discharge",
    description:"The patient either schedules a follow-up or is discharged. A consultation summary and medical report are saved and can be printed or accessed later.",
  },
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow">
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">
       Here is how V-HMS Works!
    
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-20">
          <Image
            src="/assets/Rectangle1.png"
            alt="Productivity Illustration"
            width={600}
            height={600}
          />{" "}
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Workflow;
