import { FaShoppingBasket, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function NavLinks({ linkArray, lgHidden }) {
  return lgHidden ? (
    <ul className="flex flex-col lg:hidden items-center justify-start">
      {linkArray.map((link, index) => (
        <li
          className="py-6 pl-8 w-full border-b hover:text-greenColor"
          key={index}
        >
          <Link to={link.to}>{link.content}</Link>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="lg:flex hidden items-center w-1/3 justify-start">
      {linkArray.map((link, index) => (
        <li className="p-4 hover:text-greenColor" key={index}>
          <Link to={link.to}>{link.content}</Link>
        </li>
      ))}
    </ul>
  );
}

NavLinks.propTypes = {
  linkArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  lgHidden: PropTypes.bool,
};
export default function Navbar() {
  const navLinks = [
    [
      {
        content: "Everything",
        to: "/shop",
      },
      {
        content: "Groceries",
        to: "/product-category/groceries",
      },
      {
        content: "Juice",
        to: "/product-category/juice",
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
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavVisible((prevMobileNavVisible) => !prevMobileNavVisible);
  };

  const [transitionComplete, setTransitionComplete] = useState(false);
  const handleTransitionEnd = () => {
    if (mobileNavVisible) {
      setTransitionComplete(true);
    } else {
      setTransitionComplete(false);
    }
  };
  return (
    <div className="w-full flex justify-center pt-4 lg:py-4 fixed z-50 bg-white">
      <div className="flex-1 w-full container flex gap-4 px-6">
        <Link to={"/"}>
          <img
            src="/organic-store-nav-logo.svg"
            className="w-[150px] h-full"
          ></img>
        </Link>

        <NavLinks linkArray={navLinks[0]} />
        <div className="flex-1 flex justify-end items-center">
          <NavLinks linkArray={navLinks[1]} />
          <div className="flex items-center gap-1">
            <div className="p-4">
              <h4 className="text-greenColor font-semibold text-[16px]">
                <span>£</span>
                50.00
              </h4>
            </div>
            <div className="p-2">
              <FaShoppingBasket size={18} className="text-greenColor" />
            </div>
          </div>
          <div className="p-2 flex">
            <button>
              <FaUser size={18} className="hidden lg:block" />
            </button>
            <button
              className="p-2 lg:hidden bg-greenColor text-white"
              onClick={toggleMobileNav}
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-col w-full h-[100vh] flex fixed justify-center top-0 right-0  transition-transform duration-300 ${
          mobileNavVisible ? "translate-x-0" : "translate-x-full"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={`w-full h-full ml-auto flex absolute z-0 flex-col justify-center transition-transform ${
            transitionComplete ? "bg-black opacity-70" : "bg-none opacity-0"
          }`}
        ></div>
        <div className="w-[90%] h-full ml-auto flex bg-white opacity-100 flex-col z-40 justify-center">
          <button
            className="p-4 absolute top-4 right-4"
            onClick={toggleMobileNav}
          >
            <FaTimes size={18} />
          </button>
          <FaUser size={18} className="ml-8" />
          <NavLinks linkArray={navLinks[0]} lgHidden={true} />
          <NavLinks linkArray={navLinks[1]} lgHidden={true} />
        </div>
      </div>
    </div>
  );
}
