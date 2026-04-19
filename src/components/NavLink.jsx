import { Link } from "react-router"

function NavLink({to, name}) {
  return (
    <Link to={to} className="font-arimo text-white font-medium text-lg transition duration-300 ease-linear hover:text-cyan-400">{name}</Link>
  )
}

export default NavLink