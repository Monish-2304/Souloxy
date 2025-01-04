import logo from "../assets/soloxy_logo.png"
const Header = ({ layout = 'row',isFooter=false }) => {
  return (
  <>
  {!isFooter && (
  <div className=" w-[30%] md:w-[20%]">
    <img src={logo} alt="SoulOxy Logo" className="w-full mt-6"></img>
  </div>
  )}
  <div className={`flex ${layout === 'column' ? 'flex-col' : 'flex-row'} ${layout === 'row' ? 'space-x-8' : ''} text-md md:text-lg`}>
    <a style={{ color: "#4B624D" }} href="#home" className="hover:underline">Home</a>
    <a style={{ color: "#4B624D" }} href="#solutions" className="hover:underline">Solutions</a>
    <a style={{ color: "#4B624D" }} href="#AboutUs" className="hover:underline">About Us</a>
    <a style={{ color: "#4B624D" }} href="#JoinUs" className="hover:underline">Join Us</a>
  </div>
  </>);
};

export default Header;