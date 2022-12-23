import React from "react";

function NavBar() {
  return (
    <nav className="menu">
      <ul className="menu_unordList">
        <li className="menu_list">
          <a className="menu_link" href="#about">About</a>
        </li>
          <li className="menu_list">
            <a className="menu_link" href="#projects">Projects</a>
          </li>
            <li className="menu_list">
              <a className="menu_link" href="#skills">Skills</a>
            </li>
            <li className="menu_list">
              <a className="menu_link" href="#contact">Contact</a>
            </li>
      </ul>
    </nav>
  )
}

export default NavBar;