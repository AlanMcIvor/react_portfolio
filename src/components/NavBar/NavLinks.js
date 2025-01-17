import "./NavBar.css";

const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#work">My work</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
