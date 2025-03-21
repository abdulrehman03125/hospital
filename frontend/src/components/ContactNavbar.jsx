import { Mail, Phone } from "lucide-react";

export default function ContactNavbar() {
  return (
    <div className="flex mx-4 md:mx-8 mt-3 flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 text-sm border-b text-center md:text-left">
      {/* Left Side */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          <span>+ 202-555-0191</span>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <span className="cursor-pointer">Sign in</span>
        <span className="cursor-pointer">Sign up</span>
      </div>
    </div>
  );
}
