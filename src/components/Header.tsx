import logo from "../assets/soloxy_logo.png";

const Header = () => {
  return (
    <>
      <div>
        <img
          src={logo}
          alt="SoulOxy Logo"
          className="w-full"
        />
      </div>
      <div className="flex justify-center space-x-8 sm:space-x-4 mt-4">
        <a style={{ color: "#4B624D" }} className=" text-sm md:text-lg">
          Home
        </a>
        <a style={{ color: "#4B624D" }} className="text-sm md:text-lg">
          Solutions
        </a>
        <a style={{ color: "#4B624D" }} className="text-sm md:text-lg">
          About Us
        </a>
        <a style={{ color: "#4B624D" }} className="text-sm md:text-lg">
          Join Us
        </a>
      </div>
    </>
  );
};

export default Header;




// import logo from "../assets/soloxy_logo.png";

// const Header = () => {
//   return (
//     <>
//       <div className="flex justify-center mt-8">
//         <img src={logo} alt="SoulOxy Logo" className="w-80 h-34 pl-10 mx-auto" />
//       </div>
      
//       <div className="flex justify-center mt-4 space-x-8 md:space-x-12">
//         <a style={{ color: "#4B624D" }} className="text-sm md:text-base">Home</a>
//         <a style={{ color: "#4B624D" }} className="text-sm md:text-base">Solutions</a>
//         <a style={{ color: "#4B624D" }} className="text-sm md:text-base">About Us</a>
//         <a style={{ color: "#4B624D" }} className="text-sm md:text-base">Join Us</a>
//       </div>
//     </>
//   );
// };

// export default Header;
