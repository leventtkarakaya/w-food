import { Link } from "react-scroll";

const links = [
  {
    path: "home",
    name: "home",
    offset: -50,
  },
  {
    path: "menu",
    name: "menu",
    offset: -50,
  },
  {
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    path: "contact",
    name: "contact",
    offset: -50,
  },
];

const Nav = ({ containerStyle, linkStyle }) => {
  return (
    <nav className={`${containerStyle}`}>
      {links.map((links, index) => {
        return (
          <Link
            key={index}
            to={links.path}
            spy={true}
            smooth={true}
            offset={links.offset}
            duration={500}
            className={`${linkStyle}`}
          >
            {" "}
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
