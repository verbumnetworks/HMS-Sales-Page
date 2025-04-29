import Link from "next/link";

const Footer: React.FC = () => {
  const links = [
    { title: "Home", url: "#" },
    { title: "Contact", url: "#contact" },
    { title: "About Us", url: "#about" },
  ];
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mb-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Verbum Networks Limited</h3>
            <p className="text-gray-400">Empowering your healthcare management with cutting-edge technology.</p>
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 text-gray-400">
              {links.map((link, idx) => (
                <li key={idx} className="truncate max-w-[120px] sm:max-w-full">
                  <Link href={link.url}  className="hover:text-white block text-ellipsis overflow-hidden whitespace-nowrap">
                   {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Verbum Networks Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
