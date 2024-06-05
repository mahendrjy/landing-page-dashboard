"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Container from "../common/container";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const token = localStorage.getItem("authToken");

    // Check if the token is valid
    if (token === "token") {
      // If the token is valid, set the user as authenticated
      setIsAuthenticated(true);

      // If the current page is the login page, redirect the user to the home page
      if (pathname === "/login") {
        router.push("/");
      }
    } else {
      // If the token is not valid, redirect the user to the login page
      router.push("/login");
    }
  }, [pathname, router]);

  if (!isAuthenticated && pathname !== "/login") {
    return <Container className="py-4">Loading...</Container>;
  }

  return children;
}

export default ProtectedRoute;
