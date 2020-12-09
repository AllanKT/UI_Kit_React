import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import { config } from '../../config';

import { Button } from "../Button";
import { Container } from './style';

function NavBar() {
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidht <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Container>
          <div className="navbar-container container">
            <Link to="/">
              <img src={config.images.logo} alt="logo"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Cadastrar
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    className="btn-link"
                    onClick={closeMobileMenuModal}
                  >
                    <Button primary aria-controls="simple-menu" aria-haspopup="true">
                        Entrar
                    </Button>
                  </Link>
                ) : (
                  <Link className="btn-link">
                    <Button primary aria-controls="simple-menu" aria-haspopup="true">
                        Entrar
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Container>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
