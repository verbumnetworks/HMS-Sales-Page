import Link from "next/link";
import { navLinks } from "@/constants/Constant";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";


const Footer: React.FC = () => {
;
 return (
 <footer className="bg-[#0f1217] text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-white text-lg font-bold md:text-3xl hover:text-[#0de4d6]">Verbum Networks Limited</span>
          </Link>
        </div>

        <ul className="flex gap-6 text-sm mb-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className="hover:text-[#0de4d6] transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mb-6">
          {[FaFacebookF, FaTwitter, FaGithub ].map((Icon, idx) => (
            <Link
              key={idx}
              href="https://www.facebook.com/share/1HBSiDL1xn/"
              className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg transition-all duration-200 hover:text-[#0de4d6]"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Verbum Networks Limited. All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
 }

export default Footer;













