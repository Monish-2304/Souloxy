import logo from "../assets/soloxy_logo.png"
const Header = () => {
  return (
  <>
  <div>
    <img src={logo} alt="SoulOxy Logo" className="w-80 h-34 pl-10 mx-auto"></img>
  </div>
  <div className="flex space-x-8">
    <a style={{ color: "#4B624D" }}>Home</a>
    <a style={{ color: "#4B624D" }}>Solutions</a>
    <a style={{ color: "#4B624D" }}>About Us</a>
    <a style={{ color: "#4B624D" }}>Join Us</a>
  </div>
  </>);
};

export default Header;
