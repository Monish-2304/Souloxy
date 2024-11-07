import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4 p-4 flex justify-between items-center space-x-2">
      <h2>Landing Page</h2>
      <Button onClick={() => navigate("/auth")}>Login</Button>
    </div>
  );
};

export default LandingPage;
