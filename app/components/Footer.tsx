import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;