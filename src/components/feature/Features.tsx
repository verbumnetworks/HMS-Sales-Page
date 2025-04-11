const Features: React.FC = () => {
  return (
    <div>
      feature 
    </div>
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
