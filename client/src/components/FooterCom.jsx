import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsGithub, BsLinkedin} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-indigo-500">
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-xl"
            >
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
                Ray's
              </span>
              Blog
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mt-4">
          {/* First Column */}
          <div>
            <Footer.Title title="ABOUT Ray" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Portfolio
              </Footer.Link>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Ray's CV
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Second Column */}
          <div>
            <Footer.Title title="FOLLOW RAY" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com/Rayahalwani03"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Footer.Link>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </Footer.Link>
              <Footer.Link
                href="https://www.linkedin.com/in/raya-halwani-46806a192/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Third Column (Legal) */}
          <div className="sm:col-span-2 md:col-span-1">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full  sm:items-center sm:justify-between ">
            <Footer.Copyright href="#" by="Ray's Blog" year={new Date().getFullYear()} />

<div className="flex justify-center gap-4 sm:mt-0 mt-4 ">

    <Footer.Icon href="#" icon={BsInstagram} />
    <Footer.Icon href="https://github.com/Rayahalwani03" icon={BsGithub} />
    <Footer.Icon href="https://www.linkedin.com/in/raya-halwani-46806a192/" icon={BsLinkedin} />

</div>


        </div>


      </div>


    </Footer>
  );
};

export default FooterCom;
