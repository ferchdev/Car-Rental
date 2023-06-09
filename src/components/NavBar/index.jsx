import logoSrc from "../../assets/logos/logo-car.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PortalMenu } from "../ModalMenu";
import { menu } from "../../data/menu";
import { Link } from "wouter";
export const NavBar = ({className = false,title,subtitle}) => {
  const [modal, setModal] = useState("");
  return (
    <nav className={`navBar ${className ? className : ""}`}>
      <div className="navBar__links">
      <Link href="/">
        <img
          src={logoSrc}
          alt="Logo de Renta de Autos"
          className="navBar__img"
        ></img>
      </Link>
      <ul className="navBar__ul">
        {menu.map((menu) => (
          <li className="navBar__li" key={menu.key}>
            <Link href={menu.link} className="navBar__a">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navBar__DivSesion">
        <button className="navBar__button">Iniciar Sesion</button>
        <button className="navBar__button--register">Registro</button>
      </div>
      <div className="navBar__icon">
        <FontAwesomeIcon icon={faBars} onClick={() => setModal("open")} />
        <PortalMenu open={modal} setModal={setModal} menuList={menu} />
      </div>
      </div>
      {className && <div className={`navBar__absolute`}>
        <div className="navBar__absolute--description">
        <h1>{title}</h1>
        <p className="navBar__p--absolute"><Link href="/" className="navBar__a">Home</Link> / {subtitle}</p>
        </div>
      </div>}
    </nav>
  );
};
