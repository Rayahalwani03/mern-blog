import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarCollapse, NavbarToggle, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon,FaSun } from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; // to use toggletheme from the redux
import { toggleTheme } from "../redux/theme/themeSlice";

const Header = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const {theme} = useSelector((state)=> state.theme);
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
        <Button className="w-11 hidden sm:inline" color="gray" onClick={()=> dispatch(toggleTheme())}>
          {theme === 'light' ? <FaMoon />  :  <FaSun/>}

        </Button>

        {currentUser ? (<Dropdown arrowIcon={false} inline 
        
        label= {<Avatar alt='user' img={currentUser.profilePicture} rounded></Avatar>}>
          <DropdownHeader>
            <span className="block text-sm">@{ currentUser.username}</span>
            <span className="block text-sm font-medium truncate">{ currentUser.email}</span>
<Link to={"/dashboard?tab=profile"} ><DropdownItem>Profile</DropdownItem></Link>
<DropdownDivider/>
<DropdownItem>Sign Out</DropdownItem>


          </DropdownHeader>
        </Dropdown>) :
         (        <Link to="/sign-in">
           <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>)}

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
