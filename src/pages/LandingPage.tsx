import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth", { state: { isLogin: "login" } });
  };

  const handleSignup = () => {
    navigate("/auth", { state: { isLogin: "signup" } });
  };
  return (
    <div className="mt-4 p-4 flex justify-between items-center space-x-2">
      <h2>Landing Page</h2>
      <div className="space-x-2">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleSignup}>SignUp</Button>
      </div>
    </div>
  );
};

export default LandingPage;
