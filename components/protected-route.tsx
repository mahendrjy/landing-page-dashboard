"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Container from "./container";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (pathname === "/login" && token) {
      router.push("/");
    }
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname]);

  if (!isAuthenticated && pathname !== "/login") {
    return <Container className="py-4">Loading...</Container>;
  }

  return children;
};

export default ProtectedRoute;
