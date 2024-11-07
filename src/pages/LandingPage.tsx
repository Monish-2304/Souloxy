import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/1. ai-human.jpeg"
import image2 from "../assets/2. therapy.jpeg"
import image3 from "../assets/3. support.jpeg"
import ImageCarousel from "@/components/ImageCarousel";
import decoration1 from "../assets/decoration1.png";
import decoration11 from "../assets/decor11.png";
import decoration2 from "../assets/decor2.png";
import decoration22 from "../assets/decor22.png";
import instagramLogo from "../assets/instagram.png"
import linkedInLogo from "../assets/linkedin.png"

const LandingPage = () => {
  const navigate = useNavigate();
  const images = [image1, image2, image3];
  const texts = [
    "Innovative AI Technology, Souloxy uses advance AI to provide a virtual companion that is always there for you—ready to listen, offer advice, and guide you through challenges",
    "Human-Centred Care, We believe in the importance of human connection. Our platform connects you with licensed therapists and counsellors for personalised care, in addition to our self-help tools and AI assistance",
    "Holistic Wellness Approach, Beyond therapy Souloxy offers self-awareness content, peer support, group therapy, and practical tools to help you build a resilient mind"
  ]
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFFF5" }}>
      <div className="mx-auto flex justify-between items-center space-x-2" >
        <Header />
        <div className="pr-20">
          <Button className="bg-[#4B624D]" onClick={() => navigate("/auth")} >Login</Button>
        </div>
      </div>
      {/* carousel section */}
      <div>
        <ImageCarousel images={images} texts={texts} />
      </div>

      {/* Launching soon section */}
      <div className="flex bg-[#D8EDD4] w-[75vw] h-50 mx-auto mt-20 rounded-3xl">
        {/* launch text */}
        <div className="w-80 p-10 relative">
          <p><strong>We're almost live!<br></br>Our platform is launching soon.<br></br></strong>Want to be the first to know when we launch? Share your contact details and we’ll send you an exclusive invite!</p>
          <input placeholder="Email / Phone No." className="mt-4 px-8 py-6 h-10 rounded-md bg-[#F8F7F2]"></input>
          <button
            className="absolute right-12 top-[77.8%] transform -translate-y-1/2 bg-[#B4D2B6] text-black px-3 py-2 rounded-full "
          >
            <span className="text-md text-black"> &#8594;</span> 
          </button>
        </div>
        {/* first box social icons */}
        <div className="w-60 mt-10 ml-10 h-60 bg-[#F8F7F2] rounded-3xl">
          <img src={decoration1} className="w-20 h-20 m-5"></img>
          <img src={decoration11} className="ml-40 w-20 h-38 -mt-[6.25rem]"></img>
          <p className="text-[11px] mt-2 mx-5 mb-0">In the meantime follow us on</p>
          <div className="flex">
            <img src={instagramLogo} className="w-10 h-10 mt-6 ml-8"></img>
            <img src={linkedInLogo} className="w-10 h-9 mt-6 ml-10"></img>
          </div>
        </div>
        {/* join us box */}
        <div className="w-60 mt-10 ml-20 h-60 bg-[#F8F7F2] rounded-3xl">
          <img src={decoration2} className="w-20 h-20 m-5"></img>
          <img src={decoration22} className="ml-40 w-20 h-38 -mt-[6.25rem]"></img>
          <p className="text-[11px] mt-5 mx-5 mb-0">Want to make a difference?<br></br>Join us as an early app user or as a psychologist today!</p>
          <button className="bg-[#B4D2B6] w-40 h-10 ml-8 mt-4 rounded-3xl text-black text-[14px]">Join us</button>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
