import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-4 border-teal-500">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Ketan&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://dev.to/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazing Blog
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col className="flex">
                <Footer.Link
                  className="flex"
                  href="https://www.linkedin.com/in/ketankhot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 ">
                    LinkedIn <FaLinkedin />
                  </div>
                </Footer.Link>
                <Footer.Link
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 ">
                    React Js <TbBrandReact />
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col className="flex">
                <Footer.Link href="#">Privacy & Ploicy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            href="#"
            by="Ketan's Blog"
            year={new Date().getFullYear()}
          />
          <div className="mt-3 flex items-center gap-5 sm:justify-center">
            <Footer.Icon
              className="shadow-lg"
              href="https://www.facebook.com"
              target="_blank"
              icon={FaFacebookSquare}
            />
            <Footer.Icon
              href="https://www.instagram.com"
              target="_blank"
              icon={FaInstagramSquare}
            />
            <Footer.Icon
              href="https://www.twitter.com"
              target="_blank"
              icon={FaSquareXTwitter}
            />
            <Footer.Icon
              href="https://www.whatsapp.com"
              target="_blank"
              icon={FaSquareWhatsapp}
            />
            <Footer.Icon
              href="https://www.github.com"
              target="_blank"
              icon={FaGithubSquare}
            />
            <Footer.Icon
              href="https://www.dribbble.com"
              target="_blank"
              icon={FaDribbbleSquare}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
