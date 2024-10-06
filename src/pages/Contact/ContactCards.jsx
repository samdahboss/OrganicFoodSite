import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
export default function ContactCards() {
  const contact = [
    {
      icon: "FaPhone",
      description: "Call Us",
      info: "+123 456 7890",
    },
    {
      icon: "FaEnvelope",
      description: "Send Us An Email",
      info: "info@example.com",
    },
    {
      icon: "FaMapMarkerAlt",
      description: "Our Address",
      info: "1569 Ave, New York,NY 10028, USA",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3  md:px-12 py-6 gap-6">
      {contact.map((item, index) => (
        <div
          key={index}
          className="border-[1px] border-gray text-center rounded-lg p-6"
        >
          <div className="gap-8">
            <div className="flex justify-center p-4">
              {item.icon === "FaPhone" && (
                <FaPhone className="text-[#A1C54A] text-[25px]" />
              )}
              {item.icon === "FaMapMarkerAlt" && (
                <FaMapMarkerAlt className="text-[#A1C54A] text-[25px]" />
              )}
              {item.icon === "FaEnvelope" && (
                <FaEnvelope className="text-[#A1C54A] text-[25px]" />
              )}
            </div>
            <div>
              <h2 className="pt-2">{item.description}</h2>
              <p className="py-2">{item.info}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
