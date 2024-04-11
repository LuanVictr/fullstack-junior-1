"use client";
import { useState } from "react";

function Header() {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="flex flex-row justify-around items-center mb-14 py-10">
      <h1 className="font-merriweather text-3xl font-bold">
        <span className="font-bold text-3x1 text-primary-color">Gath</span>
        <span className="font-bold text-3x1 text-white">Session</span>
        <span className="font-bold text-3x1 text-primary-color">.</span>
      </h1>
      <div className="flex flex-row space-x-16">
        <nav className="space-x-12">
          <button
            className={`pb-2 font-poppins relative ${
              selectedLink === "Home"
                ? "border-b-2 border-primary-color text-white"
                : "text-gray-not-selected"
            }`}
            onClick={() => setSelectedLink("Home")}
          >
            Home
          </button>
          <button
            className={` pb-2 font-poppins relative ${
              selectedLink === "Features"
                ? "border-b-2 border-primary-color text-white"
                : "text-gray-not-selected"
            }`}
            onClick={() => setSelectedLink("Features")}
          >
            Features
          </button>
          <button
            className={` pb-2 font-poppins relative ${
              selectedLink === "Blog"
                ? "border-b-2 border-primary-color text-white"
                : "text-gray-not-selected"
            }`}
            onClick={() => setSelectedLink("Blog")}
          >
            Blog
          </button>
          <button
            className={` pb-2 font-poppins relative ${
              selectedLink === "Contact"
                ? "border-b-2 border-primary-color text-white"
                : "text-gray-not-selected"
            }`}
            onClick={() => setSelectedLink("Contact")}
          >
            Contact
          </button>
          <button
            className={` pb-2 font-poppins relative ${
              selectedLink === "About Us"
                ? "border-b-2 border-primary-color text-white"
                : "text-gray-not-selected"
            }`}
            onClick={() => setSelectedLink("About Us")}
          >
            About Us
          </button>
        </nav>
        <button>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.554688 2.09766C0.554688 2.76429 1.09511 3.30469 1.76172 3.30469H17.9336C18.6002 3.30469 19.1406 2.76429 19.1406 2.09766C19.1406 1.43102 18.6002 0.890625 17.9336 0.890625H1.76172C1.09511 0.890625 0.554688 1.43102 0.554688 2.09766ZM4.46875 9.03516C4.46875 9.70177 5.00917 10.2422 5.67578 10.2422H17.9336C18.6002 10.2422 19.1406 9.70177 19.1406 9.03516C19.1406 8.36852 18.6002 7.82812 17.9336 7.82812H5.67578C5.00917 7.82812 4.46875 8.36852 4.46875 9.03516ZM10.9609 15.9492C10.9609 16.6158 11.5013 17.1562 12.168 17.1562H17.9336C18.6002 17.1562 19.1406 16.6158 19.1406 15.9492C19.1406 15.2826 18.6002 14.7422 17.9336 14.7422H12.168C11.5013 14.7422 10.9609 15.2826 10.9609 15.9492Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
