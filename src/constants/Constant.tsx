import {
  ShieldCheck,
  DollarSign,
  Sliders,
  LayoutDashboard,
  Unlock,
  MapPin,
  MessageCircleHeart,
  Cpu,
  LucideIcon,
} from "lucide-react";
export type Navlink = { label: string; url: string; id: number };
export type Featurecard = {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
};
export type Reasoncard = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};
export type Faqdata ={question:string; answer:string};

export const navLinks: Navlink[] = [
  {
    label: "About",
    url: "#about",
    id: 2,
  },
  {
    label: "Features",
    url: "#features",
    id: 1,
  },

  {
    label: "Contact",
    url: "#contact",
    id: 3,
  },
];

export const featurescard: Featurecard[] = [
  {
    id: 1,
    title: "Patient Management",
    description:
      "Easily manage patient records, history, and visits from one dashboard.",
    icon: "/assets/photo3.jpg",
    details: `Our Patient Management module offers a centralized platform to access, update, and organize patient information in real-time. You can securely store medical histories, allergies, diagnoses, and more in a structured and intuitive interface. It reduces manual paperwork and enhances collaboration among departments by keeping patient data synchronized and accessible across the hospital system. Staff can efficiently track patient journeys and history to ensure continuity of care. The module supports unique patient IDs, search filters, and real-time updates, ensuring that the right information is always available to authorized personnel. It is compliant with data privacy regulations to ensure maximum security.`,
  },
  {
    id: 2,
    title: "Appointments & Scheduling",
    description:
      "Automate doctor appointments, notifications, and calendar management.",
    icon: "/assets/ok.jpg",
    details: `The Appointment Scheduling feature streamlines the process of booking and managing appointments for doctors, labs, and services. Patients can easily book slots via mobile or web, while hospital staff can view and manage schedules efficiently.Automatic reminders and notifications reduce no-shows and improve patient engagement. Doctors and nurses receive real-time updates on their daily calendar, making time management more effective.The system supports walk-ins, follow-ups, cancellations, and rescheduling, making it a flexible solution for both small clinics and large hospitals. Integration with electronic health records ensures all appointments are context-aware.`,
  },
  {
    id: 3,
    title: "Medical Records",
    description:
      "Maintain secure and accessible digital medical records and lab reports.",
    icon: "/assets/img4.jpg",
    details: `Digital medical records provide a secure and paperless way to store and retrieve patient health data. This module includes prescriptions, diagnoses, lab reports, radiology images, treatment plans, and other key documents. All records are encrypted and stored in the cloud, ensuring both safety and accessibility from any authorized device. Doctors can quickly access historical data during consultations for better decision-making.Role-based access ensures that only the right personnel view or edit sensitive information. The system supports version control and audit logs to maintain data integrity and accountability.`,
  },
  {
    id: 4,
    title: "Billing & Invoicing",
    description:
      "Handle payments, invoices, and receipts with ease and transparency.",
    icon: "/assets/img6.jpg",
    details: `The Billing & Invoicing module automates the financial side of hospital management, covering services, medications, consultations, and insurance claims. It generates accurate invoices and receipts instantly.It supports multiple payment gateways, split billing, and insurance processing, allowing for a seamless financial experience for both patients and hospital staff. All transactions are recorded and auditable.
      You can set pricing rules based on patient categories (e.g., senior citizens, insured) and generate financial reports to track revenue and outstanding balances. This helps in improving cash flow and transparency.`,
  },
  {
    id: 5,
    title: "Doctor & Staff Dashboard",
    description:
      "Empower staff with role-based access, duties, and reporting tools.",
    icon: "/assets/img7.jpg",
    details: `This dashboard gives doctors, nurses, and administrative staff a personalized view of their responsibilities. Doctors can view their schedules, appointments, patients’ records, and write prescriptions from one dashboard.
  
  Administrative staff can manage patient admissions, discharges, inventory, and staff shifts. It simplifies internal communication and ensures everyone has the right tools for their role.
  
  With role-based access control, the dashboard ensures each staff member sees only what's relevant to them. Reports and analytics offer insight into performance, enabling better planning and accountability.`,
  },
  {
    id: 6,
    title: "Hospital Analytics",
    description:
      "View insightful analytics and reports to improve hospital efficiency.",
    icon: "/assets/img8.jpeg",
    details: `The Hospital Analytics module turns raw data into actionable insights. From patient inflow trends to revenue tracking, it provides real-time dashboards to help administrators make data-driven decisions.
  
  You can monitor key performance indicators (KPIs) such as average wait times, patient satisfaction, and treatment success rates. The visual reports help identify bottlenecks and optimize operations.
  
  This module supports exporting reports to PDF/Excel and integrates with third-party BI tools. It's ideal for board meetings, audits, and long-term planning. Ultimately, it helps the hospital run smarter, not harder.`,
  },
];

export const reasons: Reasoncard[] = [
  {
    id: 1,
    title: "Zero Tech Knowledge Needed",
    description:
      "Our HMS is designed for simplicity—staff can manage patients, records, billing, and more without technical skills.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Affordable and Flexible",
    description:
      "Our pricing model fits every budget—offering premium features without financial strain.",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Secure and Reliable",
    description:
      "With encryption, role-based access, daily backups, and 99.9% uptime, your data is always safe and accessible.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Fully Customizable",
    description:
      "We tailor the system to fit your hospital’s specific workflows, departments, and needs.",
    icon: Sliders,
  },
  {
    id: 5,
    title: "User-Friendly Interface",
    description:
      "A clean dashboard and intuitive navigation make it easy for doctors and staff to use daily.",
    icon: LayoutDashboard,
  },
  {
    id: 6,
    title: "Full Access – No Hidden Modules",
    description:
      "All features are available upfront—no locked modules or premium add-ons.",
    icon: Unlock,
  },
  {
    id: 7,
    title: "Locally Built and Supported",
    description:
      "Built for local realities, with fast support and understanding of local healthcare operations.",
    icon: MapPin,
  },
  {
    id: 8,
    title: "Boosts Patient Relationships",
    description:
      "Automated appointment reminders, thank-you messages, birthday wishes, and feedback prompts build trust and engagement.",
    icon: MessageCircleHeart,
  },
];




// constants/faq.ts
export const faqData: Faqdata[] = [
  {
    question: "What is Verbum Health HMS?",
    answer:
      "Verbum Health HMS is a custom-built Hospital Management System designed to streamline hospital processes and improve efficiency.",
  },
  {
    question: "Is Verbum Health HMS secure?",
    answer:
      "Yes, it uses advanced security protocols to protect patient data and hospital records.",
  },
  {
    question: "Can it be customized for my hospital?",
    answer:
      "Absolutely! Verbum Health HMS is fully customizable to meet your hospital’s specific needs.",
  },
  {
    question: "Do you offer training and support?",
    answer:
      "Yes, we provide full onboarding, staff training, and ongoing support after implementation.",
  },
  {
    question: "Is the system cloud-based?",
    answer:
      "Yes, Verbum Health HMS is cloud-based, accessible from anywhere, and requires no local server installation.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 1-3 weeks depending on the hospital size and customization needs.",
  },
  {
    question: "Can I request a demo?",
    answer:
      "Yes, just fill out the demo request form and we’ll schedule a walkthrough with your team.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The pricing depends on your hospital’s size, specific needs, and required features. However, Verbum Health HMS is designed to be affordable for hospitals of all sizes, ensuring great value for the services and support included.",
  },
];

//   {label: string, url:string, id:number, name?:string}[]
// interface Navlink {label: string, url:string, id:number, name?:string}
