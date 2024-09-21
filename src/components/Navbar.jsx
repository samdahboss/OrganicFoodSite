import { Link } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    [
      {
        content: "Everything",
        to: "/",
      },
      {
        content: "Groceries",
        to: "/",
      },
      {
        content: "Juice",
        to: "/",
      },
    ],
    [
      {
        content: "About",
        to: "/about",
      },
      {
        content: "Contact",
        to: "/contact",
      },
    ],
  ];
  return (
    <div className="w-full flex py-4">
      <div className="flex-1 flex gap-4 container px-6">
        <a href="#" className="h-full">
          <img src="/organic-store-nav-logo.svg" className="w-[150px]"></img>
        </a>
        <ul className="flex items-center w-1/3 justify-start">
          {navLinks[0].map((link,index) => (
            <li className="p-4" key={index}>
              <Link to={link.to}>{link.content}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end items-center">
          <ul className="flex items-center w-1/3 justify-start">
            {navLinks[1].map((link,index) => (
              <li className="p-4" key={index}>
                <Link to={link.to}>{link.content}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <div className="p-4">
              <h4 className="text-greenColor font-semibold text-[16px]">
                <span>£</span>
                0.00
              </h4>
            </div>
            <div className="p-2">
              <FaShoppingBasket size={18} className="text-greenColor" />
            </div>
          </div>
          <div className="p-2">
            <FaUser size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
