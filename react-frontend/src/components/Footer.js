import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink, Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container className="m-4" >
      <footer>

            <div className="d-flex justify-content-center align-items-baseline" >
              <FaRegCopyright className="me-2" size={13}/>
              <NavLink
                href="https://airavath.com/"
                target="_blank" className="me-2"
              >
               2024 Airavath Technologies
              </NavLink>
              <span>All Rights Reserved.</span>
            </div>

      </footer>
    </Container>
  );
}

export default Footer;
