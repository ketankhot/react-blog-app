import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { toggleTheme } from "../Store/Theme/ThemeSlice";
import { LiaSignInAltSolid } from "react-icons/lia";

const Header = () => {
  const pathLocation = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Ketan&apos;s
        </span>
        Blog
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
        <Button
          className="w-12 h-10 hidden sm:inline"
          pill
          color="gray"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.photoUrl} rounded />}
          >
            <Dropdown.Header>
              <div className="items-center justify-center flex flex-col">
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="truncate font-semibold text-sm block">
                  @{currentUser.email}
                </span>
              </div>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign Out <LiaSignOutAltSolid size={18} className="ml-2" />
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={"/sign-in"}>
            <Button gradientDuoTone="purpleToPink" outline>
              <div className="flex items-center gap-1">
                Sign In <LiaSignInAltSolid size={20} />
              </div>
            </Button>
          </Link>
        )}
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
