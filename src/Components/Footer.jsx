import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Reviews</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/as.if.434777/"><FaFacebook className="text-2xl" /></Link>
            <Link to="https://x.com/ELc__LEE"><FaTwitter className="text-2xl" /></Link>
            <Link to="https://www.linkedin.com/in/saifur-rahaman-a2561b271/"><FaLinkedin className="text-2xl" /></Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by WarmPaws Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;