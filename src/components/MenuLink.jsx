import { NavLink } from "react-router"

function MenuLink({ to, name }) {
  const defaultStyle = "font-arimo text-white/55 font-medium text-lg transition duration-300 ease-linear hover:text-white";

  const activeStyle = "font-arimo text-cyan-400 font-medium text-lg";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? activeStyle : defaultStyle}>
      {name}
    </NavLink>
  )
}

export default MenuLink