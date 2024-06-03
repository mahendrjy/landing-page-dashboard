import Link from "next/link";
import { Button } from "./ui/button";
import Container from "./container";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuth = () => {
    if (isAuthenticated) {
      localStorage.removeItem("authToken");
      router.push("/login");
    } else {
      localStorage.setItem("authToken", "token");
      router.push("/");
    }
  };

  return (
    <div className=" border-b mb-8">
      <Container className="flex items-center justify-between py-2">
        <Link href="/">Home</Link>
        <Button onClick={handleAuth} variant="outline">
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </Container>
    </div>
  );
}

export default Header;
