import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import contactCardsArr from "../../utils/ContactCardsArr";
export default function ContactCards() {
  return (
    <div className="grid lg:grid-cols-3  md:px-12 py-6 gap-6">
      {contactCardsArr.map((item, index) => (
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
