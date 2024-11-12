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
import decoration2 from "../assets/decor2.png";
import instagramLogo from "../assets/instagram.png";
import linkedInLogo from "../assets/linkedin.png";
import image1 from "../assets/1. ai-human.jpeg";
import image2 from "../assets/2. therapy.jpeg";
import image3 from "../assets/3. support.jpeg";
import soulOxyLogo from "../assets/soloxy_logo.png"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


import { emailOrPhonePattern } from "@/lib/regexPatterns";
import JoinUs from "@/components/Joinus";



const formSchema = z.object({
  fullName: z.string().min(4).max(20),
  email: emailOrPhonePattern,
  message: z.string().min(2).max(25),
});
// Solution Card props
interface SolutionCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ imgSrc, title, description }) => (
  <div className="w-full mt-6 bg-[#D8EDD4] hover:bg-[#C2D8BE] rounded-3xl p-4 md:p-8 md:mt-10">
    <div className="flex flex-col justify-items-center justify-center">
      <div className="w-full"><img src={imgSrc} className="w-full max-h-32 center rounded-md border-black-500 border-2" alt={title} /></div>
      <div className="w-full mt-3">
        <div className="text-[#4C614E] text-xs md:text-sm"><strong>{title}</strong></div>
        <div className="text-[#4C614E] text-xs md:text-sm">{description}</div>
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth", { state: { isLogin: "login" } });
  };

  const handleSignup = () => {
    navigate("/auth", { state: { isLogin: "signup" } });
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
    <div className=" flex justify-between items-center space-x-2">

      <div className="min-h-screen " style={{ backgroundColor: "#FEFFF5" }}>
        <div className="mx-auto flex flex-col justify-around items-center space-x-4 md:flex-row">
          <Header />
          <div className="flex space-x-4 mt-6">
            <Button onClick={handleLogin} className="bg-[#4B624D]">Login</Button>
            <Button onClick={handleSignup} className="bg-[#4B624D]">SignUp</Button>
          </div>
        </div>

        {/* Carousel Section */}
        <div>
          <ImageCarousel images={images} texts={texts} />
        </div>

        {/* Launching Soon Section */}
        <div className="flex flex-col p-6 md:flex-row bg-[#D8EDD4] w-full h-auto  mt-40 rounded-3xl md:w-[90%] mx-auto ">
          <div className="w-full p-1 md:w-[50%] md:p-10">
            <p><strong>We're almost live!<br />Our platform is launching soon.<br /></strong>Want to be the first to know when we launch? Share your contact details and we’ll send you an exclusive invite!</p>
            <div className="relative w-fit h-fit"><input placeholder="Email / Phone No." className="mt-10 px-8 py-6 h-10 rounded-md bg-[#F8F7F2]" />
              <button className="absolute right-1 -bottom-4 transform -translate-y-1/2 bg-[#B4D2B6] text-black px-3 py-2 rounded-full ">
                <span className="text-md text-black"> &#8594;</span>
              </button>
            </div>
          </div>
          <div className="flex w-full md:w-[50%] space-x-4">
            <div className=" w-[50%] mt-10 bg-[#F8F7F2] rounded-3xl p-2 py-6 md:p-6">
              <img src={decoration1} className="w-20 h-20" alt="Decoration" />
              <p className="text-xs">In the meantime follow us on</p>
              <div className="flex space-x-4">
                <img src={instagramLogo} className="w-10 h-10 mt-6 " alt="Instagram" />
                <img src={linkedInLogo} className="w-10 h-9 mt-6" alt="LinkedIn" />
              </div>
            </div>

            <div className="w-[50%] mt-10 bg-[#F8F7F2] rounded-3xl p-2 py-6 md:p-6">
              <img src={decoration2} className="w-20 h-20" alt="Decoration" />
              <p className="text-xs">Want to make a difference?<br />Join us as an early app user or as a psychologist today!</p>
              <button className="bg-[#B4D2B6] p-2 mt-4 rounded-3xl text-black text-xs md:py-2 md:px-6">Join us</button>
            </div>
          </div>
        </div>





        {/* Solutions Section */}
        <div className="text-xl text-[#4C614E] text-center mt-14 md:text-3xl">
          <strong>Solutions</strong>
        </div>

        <div className="grid grid-cols-2 w-full mt-14 gap-x-4 md:flex md:justify-center md:w-[90%] mx-auto">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>

        {/* About us */}
        <div className="flex flex-col items-center md:m-12">
          <div className="text-xl text-[#4C614E] text-center mt-14 md:text-3xl"><strong>About us</strong></div>
          <div className="text-[12px] text-[#4C614E] text-center mt-6 w-[80%] md:text-xl md:mt-10">Our mission is to help individuals lead a fulfilling life by fostering awareness and careof their mental well-being with the help of technology and science of psychology.</div>
          <div className="flex items-center justify-around mt-10 w-full gap-x-8 md:mt-16">
            <img src={aboutUsImage} className="w-[50%] rounded-3xl"></img>
            <div className="text-[11px] text-[#4C614E]  w-[50%] md:text-xl">At Souloxy, we are passionate about revolutionizing mental and emotional well-being through the power of technology.<br /><br />
              Our team is made up of mental health professionals, AI experts, and visionary technologists, all dedicated to creating a platform that provides personalized support, education, and care for everyone, anytime, anywhere</div>
          </div>
        </div>

        {/* Join us Form as a user or psychologist */}
        <JoinUs />


        {/* Footer souloxy info */}
        <div className="flex flex-col md:flex-row justify-around">
          {/* col 1 */}
          <div className="flex flex-col w-[90%] md:w-[50%]">
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
          <div className="flex flex-col mt-10">
            <div className="flex flex-row items-center self-center md:flex-col md:justify-around  gap-4">

              <div className="text-[#4C614E] text-sm md:text-lg">
                Quick Links
              </div>

              <div className="text-[#4C614E] text-sm">Home</div>
              <div className="text-[#4C614E] text-sm">Solutions</div>
              <div className="text-[#4C614E] text-sm">About Us</div>
              <div className="text-[#4C614E] text-sm">Join Us</div>
            </div>
            <div className="flex self-center justify-ceter ">
              <img src={instagramLogo} className="w-10 h-10 mr-4 mt-6 " alt="Instagram" />
              <img src={linkedInLogo} className="w-10 h-9 mt-6 " alt="LinkedIn" />
            </div>
          </div>
          {/* col 3 */}
          <div className="flex flex-col self-center items-center ">
            {/* 3row1 */}
            <div className="flex flex self-center mt-6 gap-x-4 md:flex-col">
              <div className="text-[#4C614E] text-md  md:text-lg md:w-full">
                Contact Us
              </div>
              {/* Email us at <a href="info@souloxy.com" className="underline-offset-1 decoration-solid">info@souloxy.com</a> */}
              <div className="text-[#4C614E]">
                Email us at <a href="mailto:info@souloxy.com" className="underline decoration-solid decoration-[#4C614E]">info@souloxy.com</a>
              </div>
            </div>
            {/* 2row2 */}
            <div>
              {/* Contact us Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="px-2 py-2 md:px-0  w-full space-y-3 "
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className=" space-y-2">
                        <FormLabel className="font-normal  text-sm">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="p-2 bg-[#D9E8D5]  md:w-full md:px-3 md:pb-3 md:pt-3 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                            placeholder="Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" space-y-1">
                        <FormLabel className="font-normal  text-sm">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="p-2 bg-[#D9E8D5]  md:w-full md:px-3 md:pb-3 md:pt-3 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className=" space-y-1">
                        <FormLabel className="font-normal  text-sm">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="p-2 bg-[#D9E8D5]  md:w-full md:px-3 md:pb-3 md:pt-3 text-xs md:text-base border-b-[1px] border-black border-l-transparent border-r-transparent border-t-transparent rounded-xl"
                            placeholder="Your Message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex self-center justify-center">
                    <Button
                      className="mt-3 w-[60%] py-2 md:py-3 lg:py-3 text-base font-semibold bg-[#4C614E] rounded-full"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;







