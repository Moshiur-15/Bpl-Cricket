import React from "react";
import logo from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="container mx-auto pt-40 px-3 lg:px-0">
        <img className="mx-auto" src={logo} alt="" />
        <footer className="footer text-white py-10 px-5 md:px-0 justify-between">
          <nav>
            <h6 className="md:text-xl">About Us</h6>
            <a className="link link-hover max-w-56 font-normal opacity-60">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </a>
          </nav>
          <nav>
            <h6 className="md:text-xl">Company</h6>
            <li className="link link-hover opacity-60">Home</li>
            <li className="link link-hover opacity-60">Services</li>
            <li className="link link-hover opacity-60">About</li>
            <li className="link link-hover opacity-60">Contact</li>
          </nav>
          <form>
            <h6 className="md:text-xl">Subscribe</h6>
            <p className="opacity-60 max-w-60">
              Subscribe to our newsletter for the latest updates.
            </p>
            <fieldset className="form-control ">
              <div className="join flex flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full md:rounded-r-none"
                />
                <button className="mt-3 md:mt-0 py-5 md:py-0 px-4 font-bold text-black rounded-l-lg md:rounded-l-none rounded-r-lg bg-gradient-to-r from-yellow-300 to-purple-400 border-none"
                >
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <hr />
        <h2 className="opacity-60 text-white md:text-base text-center py-10">
          @2024 Your Company All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
