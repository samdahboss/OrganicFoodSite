import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function NavLinks({linkArray, lgHidden}) {
  return (
    lgHidden?
    <ul className="flex flex-col lg:hidden items-center justify-start">
          {linkArray.map((link,index) => (
            <li className="py-6 pl-8 w-full border-b hover:text-greenColor" key={index}>
              <Link to={link.to}>{link.content}</Link>
            </li>
          ))}
    </ul>
    :
    <ul className="lg:flex hidden items-center w-1/3 justify-start">
          {linkArray.map((link,index) => (
            <li className="p-4 hover:text-greenColor" key={index}>
              <Link to={link.to}>{link.content}</Link>
            </li>
          ))}
    </ul>    
  )
}

NavLinks.propTypes={
    linkArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    lgHidden: PropTypes.bool
}
