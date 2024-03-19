import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-center align-items-center">
        <p className="m-0 text-muted"><FaRegCopyright size={13} /> 2018 Company Name. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
