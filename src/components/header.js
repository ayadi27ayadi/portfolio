import React from "react"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => {
  return (
    <header>
      <h4 className="h4"> IT WORKER</h4>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link className="nav-iteme" to="#intro">
              INTRO
            </Link>
          </li>

          <li>
            <Link className="nav-iteme" to="#apropos">
              ABAOUT
            </Link>
          </li>
          <li>
            <Link className="nav-iteme" to="#prestation">
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="nav-iteme" to="#temoinage">
              TESTIMOIALS
            </Link>
          </li>
          <li>
            <Link className="nav-iteme" to="#mywork">
              MY WORK
            </Link>
          </li>
          <li>
            <Link className="nav-iteme" to="/clients">
              CLIENTS
            </Link>
          </li>
          <li>
            <Link className="nav-iteme" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
/* 
style :
Vous avez déjà installer le bootstrap donc il faut profiter de ces fonctionnalités;
Manque le responsive du header;
partie "It work" non conforme ...

code: 
mettez les liens dans un tableau mieux de recopiez la balise <li></li>

*/