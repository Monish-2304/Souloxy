import React, { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "@/components/ImageCarousel";
import AiAssistant from "../assets/AI.png";
import therapy from "../assets/therapy2.jpg";
import waterReflection from "../assets/water reflection.png";
import group from "../assets/group.jpg";
import aboutUsImage from "../assets/aboutUs.jpg";
import decoration1 from "../assets/decoration1.png";
import decoration11 from "../assets/decor11.png";
import decoration2 from "../assets/decor2.png";
import decoration22 from "../assets/decor22.png";
import instagramLogo from "../assets/instagram.png";
import linkedInLogo from "../assets/linkedin.png";
import image1 from "../assets/1. ai-human.jpeg";
import image2 from "../assets/2. therapy.jpeg";
import image3 from "../assets/3. support.jpeg";
import soulOxyLogo from "../assets/soloxy_logo.png"
// Solution Card props
interface SolutionCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ imgSrc, title, description }) => (
  <div className="w-60 mt-10 ml-10 h-auto bg-[#D8EDD4] hover:bg-[#C2D8BE] rounded-3xl">
    <div className="flex flex-col justify-items-center justify-center">
      <img src={imgSrc} className="w-[80%] h-40 m-5 center rounded-md border-black-500 border-2" alt={title} />
      <div className="text-[#4C614E] ml-6"><strong>{title}</strong></div>
      <div className="text-[#4C614E] m-6">{description}</div>
    </div>
  </div>
);

const LandingPage = () => {
  const navigate = useNavigate();

  // States to handle button clicks and dynamic content
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  const handleButtonClick = (role: string) => {
    if (selectedRole === role) {
      // If the same button is clicked again, close the div and reset text
      setSelectedRole(null);
      setText("");
    } else {
      setSelectedRole(role);
      if (role === "user") {
        setText("What You’ll Do \n Early access to the app and all its features.\n A chance to participate in exclusive feedback sessions.\n Personalized support and wellness tools. Opportunities to help us create a more user-friendly and impactful experience.");
      } else if (role === "psychologist") {
        setText("What You’ll \n Do Provide clinical feedback and ensure our methods align with best practices.\n Collaborate on personalized therapy tools and on-demand support services. \n Help us build a supportive, impactful resource for users.");
      }
    }
  };

 
  const images = [image1, image2, image3];

  const texts = [
    "Innovative AI Technology, Souloxy uses advance AI to provide a virtual companion that is always there for you—ready to listen, offer advice, and guide you through challenges",
    "Human-Centred Care, We believe in the importance of human connection. Our platform connects you with licensed therapists and counsellors for personalised care, in addition to our self-help tools and AI assistance",
    "Holistic Wellness Approach, Beyond therapy Souloxy offers self-awareness content, peer support, group therapy, and practical tools to help you build a resilient mind",
  ];

  const solutions = [
    {
      imgSrc: AiAssistant,
      title: "AI Based Virtual Assistance",
      description:
        "Users can interact with an AI-powered virtual companion, available anytime for emotional support, advice, and mental health check-ins.",
    },
    {
      imgSrc: therapy,
      title: "On demand Professional Counselling",
      description:
        "Access private, one-on-one counselling sessions with licensed therapists tailored to your unique needs.",
    },
    {
      imgSrc: waterReflection,
      title: "Self-Help Resources",
      description:
        "Personalised self-care plans featuring guided exercises and mindfulness practices tailored to enhance your emotional well-being.",
    },
    {
      imgSrc: group,
      title: "Group Therapy",
      description:
        "Our group therapy sessions provide a supportive environment where individuals can share experiences and connect with others facing similar challenges.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FEFFF5" }}>
      <div className="mx-auto flex justify-between items-center space-x-2">
        <Header />
        <div className="pr-20">
          <Button className="bg-[#4B624D]" onClick={() => navigate("/auth")}>Login</Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div>
        <ImageCarousel images={images} texts={texts} />
      </div>

      {/* Launching Soon Section */}
      <div className="flex bg-[#D8EDD4] w-[75vw] h-80 mx-auto mt-40 rounded-3xl">
        <div className="w-80 p-10 relative">
          <p><strong>We're almost live!<br />Our platform is launching soon.<br /></strong>Want to be the first to know when we launch? Share your contact details and we’ll send you an exclusive invite!</p>
          <input placeholder="Email / Phone No." className="mt-10 px-8 py-6 h-10 rounded-md bg-[#F8F7F2]" />
          <button className="absolute right-12 top-[77.8%] transform -translate-y-1/2 bg-[#B4D2B6] text-black px-3 py-2 rounded-full">
            <span className="text-md text-black"> &#8594;</span>
          </button>
        </div>

        <div className="w-60 mt-10 ml-10 h-60 bg-[#F8F7F2] rounded-3xl">
          <img src={decoration1} className="w-20 h-20 m-5" alt="Decoration" />
          <img src={decoration11} className="ml-40 w-20 h-38 -mt-[6.25rem]" alt="Decoration" />
          <p className="text-[11px] mt-2 mx-5 mb-0">In the meantime follow us on</p>
          <div className="flex">
            <img src={instagramLogo} className="w-10 h-10 mt-6 ml-8" alt="Instagram" />
            <img src={linkedInLogo} className="w-10 h-9 mt-6 ml-10" alt="LinkedIn" />
          </div>
        </div>

        <div className="w-60 mt-10 ml-20 h-60 bg-[#F8F7F2] rounded-3xl">
          <img src={decoration2} className="w-20 h-20 m-5" alt="Decoration" />
          <img src={decoration22} className="ml-40 w-20 h-38 -mt-[6.25rem]" alt="Decoration" />
          <p className="text-[11px] mt-5 mx-5 mb-0">Want to make a difference?<br />Join us as an early app user or as a psychologist today!</p>
          <button className="bg-[#B4D2B6] w-40 h-10 ml-8 mt-4 rounded-3xl text-black text-[14px]">Join us</button>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="text-3xl text-[#4C614E] text-center mt-14">
        <strong>Solutions</strong>
      </div>

      <div className="flex w-98 justify-center mt-14">
        {solutions.map((solution) => (
          <SolutionCard key={solution.title} {...solution} />
        ))}
      </div>

      {/* About us */}
      <div className="flex flex-col items-center">
        <div className="text-3xl text-[#4C614E] text-center mt-14"><strong>About us</strong></div>
        <div className="text-xl text-[#4C614E] text-center mt-10 w-[80%]">Our mission is to help individuals lead a fulfilling life by fostering awareness and careof their mental well-being with the help of technology and science of psychology.</div>
        <div className="flex items-center justify-around mt-16 w-[80%]">
          <img src={aboutUsImage} className="w-[39%]"></img>
          <div className="text-md text-[#4C614E]  mt-10 w-[45%]">At Souloxy, we are passionate about revolutionizing mental and emotional well-being through the power of technology.<br /><br />
            Our team is made up of mental health professionals, AI experts, and visionary technologists, all dedicated to creating a platform that provides personalized support, education, and care for everyone, anytime, anywhere</div>
        </div>
      </div>

      {/* Join us Form as a user or psychologist */}
      <div className="mt-20 h-[36rem] relative" style={{
        backgroundImage: "url('/src/assets/JoinUsBg.jpg')",
        backgroundPosition: "center 70%",
         backgroundRepeat: "no-repeat"
      }}>
        <div className="bg-white/70 absolute top-[5rem] left-[9rem] w-[40%] h-auto p-5 rounded-3xl">
          <div className="text-2xl">Join Us</div>
          <div className="mt-4 text-md">We invite you to join us in our mission to enhance mental wellness. Whether you're a user eager to test our app and share your feedback or a psychologist interested in collaborating with us, your participation is invaluable.</div>

          {/* Buttons */}
          <button
            className={`bg-[#F8F7F2] my-8 px-5 py-2 rounded-[1.5rem] ${selectedRole === "user" ? "bg-[#B4D2B6]" : "bg-[#F8F7F2]"}`}
            onClick={() => handleButtonClick("user")}
          >
            As a User
          </button>
          <button
            className={`bg-[#F8F7F2] my-8 mx-10 px-5 py-2 rounded-[1.5rem] ${selectedRole === "psychologist" ? "bg-[#B4D2B6]" : "bg-[#F8F7F2]"}`}
            onClick={() => handleButtonClick("psychologist")}
          >
            As a Psychologist
          </button>

          {/* Text change based on selection */}
          {selectedRole && (
            <div className="mt-4 text-md text-[#4C614E]">
              <div className="bg-[#B4D2B6] p-3 rounded-3xl text-black">{text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}</div>
            </div>
          )}
        </div>
      </div>


      {/* Footer souloxy info */}
      <div className="flex justify-around">
          {/* col 1 */}
          <div className="flex flex-col w-[40%]">
            {/* 1row1 */}
            <div>
              <img src={soulOxyLogo} className="w-32 h-34 pl-10 ml-10 mt-10"></img>
            </div>
            {/* 1row2 */}
            <div className="text-[12px] ml-20 mt-5 leading-6 w-[75%]">
            By submitting your contact information, you consent to Souloxy’s Privacy Policy and agree to receive communications about our services and events. To ensure our communications are valuable, we may monitor engagement data such as email opens and clicks. You can revoke your consent at any time.
            </div>
          </div>
           {/* col 2 */}
           <div className="flex flex-col justify-around gap-4">
            {/* 2row1 */}
            <div className="text-[#4C614E] text-lg mt-16">
            Quick Links
            </div>
            {/* 2row2 */}
            <div className="text-[#4C614E] text-sm">Home</div>
            <div className="text-[#4C614E] text-sm">Solutions</div>
            <div className="text-[#4C614E] text-sm">About Us</div>
            <div className="text-[#4C614E] text-sm">Join Us</div> 
            <div className="flex justify-between ">
            <img src={instagramLogo} className="w-10 h-10 mr-4 mt-6 " alt="Instagram" />
            <img src={linkedInLogo} className="w-10 h-9 mt-6 " alt="LinkedIn" />
            </div>
            </div>
             {/* col 3 */}
          <div className="flex flex-col ">
            {/* 3row1 */}
            <div className="text-[#4C614E] text-lg mt-16">
            Contact Us<br />
            {/* Email us at <a href="info@souloxy.com" className="underline-offset-1 decoration-solid">info@souloxy.com</a> */}
            Email us at <a href="mailto:info@souloxy.com" className="underline decoration-solid decoration-[#4C614E]">info@souloxy.com</a>

            </div>
            {/* 2row2 */}
            <div>
              {/* Contact us Form */}
            </div>
            </div>
      </div>
    </div>
  );
};

export default LandingPage;




