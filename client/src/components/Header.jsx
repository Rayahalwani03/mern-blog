import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm font-semibold dark:text-white sm:text-xl "
      >
        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
          Ray's
        </span>
        Blog
      </Link>

      <form action="">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        className="w-9 h-8 bg-gray-700 rounded-sm lg:hidden"
        color="white"
      >
        <AiOutlineSearch className="self-center text-white " color="gray-700" />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-11 hidden sm:inline" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Navbar.Link active={path==="/"} as={'div'}>
            <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/about"} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link >
        <Navbar.Link active={path==="/projects"} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
