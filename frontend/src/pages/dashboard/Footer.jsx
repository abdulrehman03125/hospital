import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer =() => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-3 gap-10">
        {/* About Hospitals */}
        <div>
          <h3 className="text-lg font-semibold">About Hospitals</h3>
          <p className="text-gray-600 mt-2">
            The relentless service of Hospitals in the past 25 years has taken health
            care to the most modern levels in the region catering to urban & rural.
          </p>
          <p className="text-gray-600 mt-2">
            A Health Care Provider of Western Approach, Hospitals is the most
            trusted multispecialty hospital.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="text-gray-600 space-y-2 mt-2">
            {[
              "About Us",
              "Consultants",
              "Working Hours",
              "Procedures",
              "Special Offers",
              "Services",
              "Healthy Foods",
              "Appointments",
              "Latest News",
              "Certificates",
            ].map((link, index) => (
              <li key={index} className="hover:text-gray-800 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <ul className="text-gray-600 space-y-3 mt-2">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Park Drive, Varick Str NY 10012, USA
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> Getwell@Hospitals.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> (123) 0200 12345 & 7890
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Mon-Friday: 9am to 18pm
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Sat-Sunday: 10am to 16pm
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;