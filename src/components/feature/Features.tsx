"use client"; // Important for using Swiper in Next.js 13/14 app router

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Modal from "../Modal"; // We'll create this next

import {
  Hospital,
  CalendarDays,
  Users,
  FileText,
  Stethoscope,
  CreditCard,
} from "lucide-react";

const featurescard = [
  {
    id: 1,
    title: "Patient Management",
    description:
      "Easily manage patient records, history, and visits from one dashboard.",
    icon: "/assets/Rectangle4.png",
    details: `Our Patient Management module offers a centralized platform to access, update, and organize patient information in real-time. You can securely store medical histories, allergies, diagnoses, and more in a structured and intuitive interface. It reduces manual paperwork and enhances collaboration among departments by keeping patient data synchronized and accessible across the hospital system. Staff can efficiently track patient journeys and history to ensure continuity of care. The module supports unique patient IDs, search filters, and real-time updates, ensuring that the right information is always available to authorized personnel. It is compliant with data privacy regulations to ensure maximum security.`,
  },
  {
    id: 2,
    title: "Appointments & Scheduling",
    description:
      "Automate doctor appointments, notifications, and calendar management.",
    icon: <CalendarDays className="w-8 h-8 text-green-700" />,
    details: `The Appointment Scheduling feature streamlines the process of booking and managing appointments for doctors, labs, and services. Patients can easily book slots via mobile or web, while hospital staff can view and manage schedules efficiently.Automatic reminders and notifications reduce no-shows and improve patient engagement. Doctors and nurses receive real-time updates on their daily calendar, making time management more effective.The system supports walk-ins, follow-ups, cancellations, and rescheduling, making it a flexible solution for both small clinics and large hospitals. Integration with electronic health records ensures all appointments are context-aware.`
  },
  {
    id: 3,
    title: "Medical Records",
    description:
      "Maintain secure and accessible digital medical records and lab reports.",
    icon: <FileText className="w-8 h-8 text-green-700" />,
    details: `Digital medical records provide a secure and paperless way to store and retrieve patient health data. This module includes prescriptions, diagnoses, lab reports, radiology images, treatment plans, and other key documents. All records are encrypted and stored in the cloud, ensuring both safety and accessibility from any authorized device. Doctors can quickly access historical data during consultations for better decision-making.Role-based access ensures that only the right personnel view or edit sensitive information. The system supports version control and audit logs to maintain data integrity and accountability.`
  },
  {
    id: 4,
    title: "Billing & Invoicing",
    description:
      "Handle payments, invoices, and receipts with ease and transparency.",
    icon: <CreditCard className="w-8 h-8 text-green-700 " />,
    details: `The Billing & Invoicing module automates the financial side of hospital management, covering services, medications, consultations, and insurance claims. It generates accurate invoices and receipts instantly.It supports multiple payment gateways, split billing, and insurance processing, allowing for a seamless financial experience for both patients and hospital staff. All transactions are recorded and auditable.
    You can set pricing rules based on patient categories (e.g., senior citizens, insured) and generate financial reports to track revenue and outstanding balances. This helps in improving cash flow and transparency.`
  },
  {
    id: 5,
    title: "Doctor & Staff Dashboard",
    description:
      "Empower staff with role-based access, duties, and reporting tools.",
    icon: <Stethoscope className="w-8 h-8 text-green-700" />,
    details: `This dashboard gives doctors, nurses, and administrative staff a personalized view of their responsibilities. Doctors can view their schedules, appointments, patients’ records, and write prescriptions from one dashboard.

Administrative staff can manage patient admissions, discharges, inventory, and staff shifts. It simplifies internal communication and ensures everyone has the right tools for their role.

With role-based access control, the dashboard ensures each staff member sees only what's relevant to them. Reports and analytics offer insight into performance, enabling better planning and accountability.`
  },
  {
    id: 6,
    title: "Hospital Analytics",
    description:
      "View insightful analytics and reports to improve hospital efficiency.",
    icon: <Hospital className="w-8 h-8 text-green-700" />,
    details: `The Hospital Analytics module turns raw data into actionable insights. From patient inflow trends to revenue tracking, it provides real-time dashboards to help administrators make data-driven decisions.

You can monitor key performance indicators (KPIs) such as average wait times, patient satisfaction, and treatment success rates. The visual reports help identify bottlenecks and optimize operations.

This module supports exporting reports to PDF/Excel and integrates with third-party BI tools. It's ideal for board meetings, audits, and long-term planning. Ultimately, it helps the hospital run smarter, not harder.`
  },
];

const Features: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<
    (typeof featurescard)[0] | null
  >(null);

  const openModal = (feature: (typeof featurescard)[0]) => {
    setSelectedFeature(feature);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFeature(null);
  };
  return (
    <section id="features">
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-4 bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">Our Features</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featurescard.map((feature) => (
          <SwiperSlide key={feature.id}>
            <div
              onClick={() => openModal(feature)}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition mx-8"
            >
              <div className="mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>

              <p className="text-gray-600 mt-2">Click to learn more</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isOpen && selectedFeature && (
        <Modal onClose={closeModal}>
          <h2 className="text-2xl font-bold">{selectedFeature.title}</h2>
          <p className="mt-4">{selectedFeature.details}</p>
        </Modal>
      )}
    </div>
    </section>
  );
};

export default Features;

// import { Hospital, CalendarDays, Users, FileText, Stethoscope, CreditCard } from 'lucide-react'

// const features = [
//   {
//     title: 'Patient Management',
//     description: 'Easily manage patient records, history, and visits from one dashboard.',
//     icon: <Users className="w-8 h-8 text-purple-600" />
//   },
//   {
//     title: 'Appointments & Scheduling',
//     description: 'Automate doctor appointments, notifications, and calendar management.',
//     icon: <CalendarDays className="w-8 h-8 text-purple-600" />
//   },
//   {
//     title: 'Medical Records',
//     description: 'Maintain secure and accessible digital medical records and lab reports.',
//     icon: <FileText className="w-8 h-8 text-purple-600" />
//   },
//   {
//     title: 'Billing & Invoicing',
//     description: 'Handle payments, invoices, and receipts with ease and transparency.',
//     icon: <CreditCard className="w-8 h-8 text-purple-600 " />
//   },
//   {
//     title: 'Doctor & Staff Dashboard',
//     description: 'Empower staff with role-based access, duties, and reporting tools.',
//     icon: <Stethoscope className="w-8 h-8 text-purple-600" />
//   },
//   {
//     title: 'Hospital Analytics',
//     description: 'View insightful analytics and reports to improve hospital efficiency.',
//     icon: <Hospital className="w-8 h-8 text-purple-600" />
//   },
// ]

// const Features = () => {
//   return (
//     <section className=" py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Powerful Features to Run Your Hospital</h2>
//         <p className="mb-12 max-w-2xl mx-auto">
//           Our HMS solution simplifies hospital operations with seamless patient handling, billing, staff coordination, and insightful analytics.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
//               <div className="mb-4 text-center">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Features
