import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/mob.png";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div
      className= "font-serif text-white pb-20 bg-textC">
      <div className="flex">
        {" "}
        <div>
          <img
            src={Logo}
            className="lg:h-24 lg:w-32 pl-10 mt-9 md:h-16 md:w-20 h-12 w-24"
          />
          <div className="lg:text-2xl md:text-lg text-sm ml-9 ">
            Your Destination, our effort.
          </div>
        </div>
        <div className="mt-20 pl-[5%] grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-36   md:grid-cols-4 md:gap-16 gap-7 grid-cols-1 md:text-lg lg:text-2xl text-sm">
          <div>
            <h4>Pre-opening FAQs</h4>
            <h4>Submit a Ticket</h4>
            <h4>Weebly Themes</h4>
          </div>
          <div>
            <h4>Services</h4>
            <h4>Theme Tweak</h4>
          </div>
          <div>
            <h4>Our Team</h4>
            <h4>Destinations</h4>
            <h4>Support</h4>
          </div>
          <div className="mb-24">
            <h4>About us</h4>
            <h4>Contact us</h4>
            <h4>Resources</h4>
            <h4>Book date</h4>
          </div>
        </div>
      </div>
      <div className="w-[80%] items-center content-center text-center justify-center align-middle m-auto">
        <hr />
      </div>
      <div className="flex justify-center mt-10">
        <FaFacebook className="lg:h-10 lg:w-12 md:h-8 md:w-8 h-6 w-6 ml-5 " />
        <FaInstagram className="lg:h-10 lg:w-12 md:h-8 md:w-8 h-6 w-6 ml-5" />
        <FaTwitter className="lg:h-10 lg:w-12 md:h-8 md:w-8 h-6 w-6 ml-5" />
        <FaTwitch className="lg:h-10 lg:w-12 md:h-8 md:w-8 h-6 w-6 ml-5" />
      </div>
    </div>
  );
}

export default Footer;
