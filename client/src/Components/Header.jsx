import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Header_Logo from "../assets/Header_Logo.png";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const pathLocation = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link to={"/"}>
        <img
          className="rounded-md shadow-xl border p-2"
          src={Header_Logo}
          width={160}
          alt=""
        />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search ..."
          rightIcon={FiSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="lg:hidden" color="gray" pill>
        <FiSearch />
      </Button>
      <div className="flex gap-3 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" pill color="gray">
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button gradientDuoTone="purpleToPink" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={pathLocation === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={pathLocation === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={pathLocation === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
