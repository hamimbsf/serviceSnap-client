import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center dark:text-white text-base-content rounded p-10">
        <div>
          <NavLink to="/" className="text-white">
            <svg
              width="0"
              height="0"
              viewBox="0 0 350 50"
              className="looka-1j8o68f h-[8vh] w-[70vw] text-black dark:text-white"
            >
              <defs id="SvgjsDefs1622"></defs>
              <g
                id="SvgjsG1623"
                featurekey="q4o0QG-0"
                transform="matrix(3.101187294942278,0,0,3.101187294942278,-2.046783695993777,-18.607117854608322)"
                fill="currentColor"
              >
                <path d="M0.66 18.76 l0 -1.84 l1.1 0 l0.94 1.06 c0.84 0.94 1.94 1.12 3.26 1.14 c1.58 0 3.06 -0.52 3.06 -1.84 c0 -1.62 -2.8 -3.2 -4.4 -4.1 c-1.38 -0.78 -3.7 -1.88 -3.7 -3.54 c0 -3.08 3.88 -3.64 4.96 -3.64 c1.34 0 2.7 0.3 4.14 0.9 l0.04 1.82 l-1.14 0 l-0.66 -0.8 c-0.64 -0.76 -1.62 -1.2 -2.58 -1.2 c-1.7 0 -2.64 1.2 -2.64 1.88 c0 1.42 2.88 2.44 5.68 4.28 c1.58 1.04 2.3 2.28 2.3 3.44 c0 1.96 -1.98 3.74 -5 3.74 c-3.66 0 -5.36 -1.3 -5.36 -1.3 z M20.64 16.94 l1.48 0 c-0.7 1.9 -2.54 3.26 -4.76 3.26 c-2.82 0 -5.06 -2.26 -5.06 -4.98 c0 -2.78 2.24 -5.04 5.06 -5.04 c2.78 0 5.04 2.2 5.08 4.94 l-8.12 0 c0.08 0.24 0.12 0.5 0.2 0.78 c0.64 2.2 2.16 3.78 3.7 3.78 c1.44 0 2.22 -1.36 2.42 -2.74 z M14.22 14.3 l6.14 0 c-0.68 -2.08 -2.28 -3.4 -3.78 -3.4 c-1.52 0 -2.38 1.46 -2.38 2.96 c0 0.14 0 0.3 0.02 0.44 z M23.460000000000004 20 l0 -0.5 c0.68 -0.74 1.02 -1.66 1.02 -2.66 l0 -3.3 c0 -0.98 -0.34 -1.92 -1.02 -2.62 l0 -0.58 l3.22 0 l0 1.04 c0.62 -0.62 1.8 -1.1 2.62 -1.1 c0.86 0 1.46 0.32 1.46 0.32 l-0.42 1.82 s-0.9 -0.74 -2 -0.74 c-1.46 0 -1.66 0.98 -1.66 1.24 l0 3.92 c0 1 0.38 1.92 1.02 2.66 l0 0.5 l-4.24 0 z M35.46 20 l-3.02 -7.72 c-0.08 -0.2 -0.14 -0.3 -0.26 -0.44 l-0.88 -0.94 l0 -0.56 l3.76 0 l0 0.56 l-0.28 0.6 c-0.16 0.34 -0.16 0.72 -0.02 1.1 l2.5 6.34 l2.54 -6.58 c0.18 -0.5 0.08 -1.06 -0.26 -1.4 l0 -0.62 l2.38 0 l0 0.62 l-0.76 0.5 c-0.24 0.16 -0.4 0.4 -0.48 0.62 l-3.06 7.92 l-2.16 0 z M42.84 20 l0 -0.54 c0.56 -0.7 0.86 -1.66 0.86 -2.62 l0 -3.32 c0 -0.98 -0.3 -1.92 -0.86 -2.62 l0 -0.56 l2.76 0 l0 6.52 c0 0.94 0.32 1.9 0.9 2.6 l0 0.54 l-3.66 0 z M44.38 9.46 c-0.76 0 -1.38 -0.64 -1.38 -1.4 c0 -0.78 0.62 -1.4 1.38 -1.4 c0.78 0 1.4 0.62 1.4 1.4 c0 0.76 -0.62 1.4 -1.4 1.4 z M56.5 17.48 l1.36 0 c-0.88 1.6 -2.58 2.72 -4.52 2.72 c-2.84 0 -5.56 -1.9 -5.56 -4.98 c0 -3.38 2.72 -5.04 5.56 -5.04 l0.5 0 c1.7 0 3.28 1.1 3.96 2.66 l-2.18 0 c-0.82 -1.26 -1.92 -1.94 -3.02 -1.94 c-1.56 0 -2.46 1.38 -2.46 3.14 c0 3.04 2.14 5.64 4 5.64 c1.2 0 2.08 -0.94 2.36 -2.2 z M67.38 16.94 l1.48 0 c-0.7 1.9 -2.54 3.26 -4.76 3.26 c-2.82 0 -5.06 -2.26 -5.06 -4.98 c0 -2.78 2.24 -5.04 5.06 -5.04 c2.78 0 5.04 2.2 5.08 4.94 l-8.12 0 c0.08 0.24 0.12 0.5 0.2 0.78 c0.64 2.2 2.16 3.78 3.7 3.78 c1.44 0 2.22 -1.36 2.42 -2.74 z M60.96 14.3 l6.14 0 c-0.68 -2.08 -2.28 -3.4 -3.78 -3.4 c-1.52 0 -2.38 1.46 -2.38 2.96 c0 0.14 0 0.3 0.02 0.44 z M70.46 18.76 l0 -1.84 l1.1 0 l0.94 1.06 c0.84 0.94 1.94 1.12 3.26 1.14 c1.58 0 3.06 -0.52 3.06 -1.84 c0 -1.62 -2.8 -3.2 -4.4 -4.1 c-1.38 -0.78 -3.7 -1.88 -3.7 -3.54 c0 -3.08 3.88 -3.64 4.96 -3.64 c1.34 0 2.7 0.3 4.14 0.9 l0.04 1.82 l-1.14 0 l-0.66 -0.8 c-0.64 -0.76 -1.62 -1.2 -2.58 -1.2 c-1.7 0 -2.64 1.2 -2.64 1.88 c0 1.42 2.88 2.44 5.68 4.28 c1.58 1.04 2.3 2.28 2.3 3.44 c0 1.96 -1.98 3.74 -5 3.74 c-3.66 0 -5.36 -1.3 -5.36 -1.3 z M82.04 20 l0 -0.54 c0.66 -0.7 1.02 -1.66 1.02 -2.62 l0 -3.32 c0 -0.98 -0.36 -1.92 -1.02 -2.62 l0 -0.56 l3.18 0 l0 1.12 c0.68 -0.38 1.46 -0.62 2.18 -0.62 c2.34 0 3.62 1.42 3.62 4.88 l0 1.12 c0 0.96 0.38 1.92 1.06 2.62 l0 0.54 l-4.28 0 l0 -0.54 c0.68 -0.7 1.06 -1.66 1.06 -2.62 l0 -2.42 c0 -1.56 -1.42 -3.1 -2.82 -2.72 c-0.5 0.14 -0.82 0.62 -0.82 1.14 l0 4.02 c0 0.94 0.4 1.9 1.04 2.6 l0 0.54 l-4.22 0 z M100.96000000000001 20 l-0.54 -0.14 c-0.9 -0.24 -1.88 -0.24 -2.72 0.02 c-0.34 0.1 -0.66 0.12 -0.98 0.12 c-1.96 0 -3.52 -1.54 -3.52 -3.48 c0 -1.9 1.56 -3.46 3.52 -3.46 c0.78 0 1.48 0.24 2.02 0.62 l0 -0.02 s0.16 -2.44 -0.92 -2.74 c-1.12 -0.32 -1.52 0.34 -2.34 1.58 l-1.68 -0.02 c0.52 -1.32 1.54 -2.24 2.98 -2.24 c0.54 0 1.1 0.1 1.64 0.26 c0 0 2.54 0.78 2.54 3.16 l0 6.34 z M94.82 17.02 c0.46 1.5 1.6 2.56 2.76 2.3 c1.12 -0.26 1.64 -1.72 1.18 -3.28 c-0.44 -1.48 -1.74 -2.54 -2.86 -2.26 c-1.14 0.28 -1.54 1.72 -1.08 3.24 z M102.26 24.3 l0 -0.58 c0.66 -0.7 1.02 -1.62 1.02 -2.6 l0 -7.58 c0 -0.96 -0.36 -1.9 -1.02 -2.62 l0 -0.58 l2.1 0 c0.6 0 1.14 0.46 1.14 1.04 c0.7 -0.7 1.74 -1.02 2.76 -1.02 c2.78 0 5.26 1.74 5.26 4.86 c0 3.32 -2.48 4.86 -5.26 4.86 c-1.02 0 -1.96 -0.3 -2.76 -0.84 l0 1.9 c0 0.96 0.34 1.88 1.02 2.6 l0 0.56 l-4.26 0 z M105.52000000000001 15.9 c0.68 2.24 2.36 3.76 4 3.38 c1.64 -0.4 2.4 -2.5 1.74 -4.72 c-0.68 -2.26 -2.52 -3.68 -4.18 -3.3 s-2.24 2.42 -1.56 4.64 z"></path>
              </g>
            </svg>
          </NavLink>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <Link to="*" className="link link-hover">
            About us
          </Link>
          <Link to="*" className="link link-hover">
            Contact
          </Link>
          <Link to="*" className="link link-hover">
            Jobs
          </Link>
          <Link to="*" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link to="https://www.linkedin.com/in/hamim-hossain-225239274/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 50 50"
                className="fill-current"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
            <Link to="https://web.facebook.com/MuhammodHamimHossain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hamim
            Hossain
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
