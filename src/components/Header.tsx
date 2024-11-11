import logo from "../assets/soloxy_logo.png"
const Header = () => {
  return (
  <>
  <div className=" w-[30%] md:w-[20%]">
    <img src={logo} alt="SoulOxy Logo" className="w-full mt-6"></img>
  </div>
  <div className="flex space-x-8 text-md md:text-lg">
    <a style={{ color: "#4B624D" }}>Home</a>
    <a style={{ color: "#4B624D" }}>Solutions</a>
    <a style={{ color: "#4B624D" }}>About Us</a>
    <a style={{ color: "#4B624D" }}>Join Us</a>
  </div>
  </>);
};

export default Header;