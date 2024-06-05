import { LandingPage } from "@/app/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useView = (id: string | string[]) => {
  const [status, setStatus] = useState("loading");
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    // Get the landing pages from local storage
    let landingPages = [];

    if (localStorage.getItem("landing-pages")) {
      landingPages = JSON.parse(localStorage.getItem("landing-pages") ?? "");
    }

    // Ensure that the data is an array
    Array.isArray(landingPages) || (landingPages = []);

    // Find the landing page with the given id
    const selectedLandingPage =
      landingPages.filter(
        (currentLandingPage: LandingPage) => currentLandingPage.id === id
      )[0] ?? null;

    // If there are no landing pages, set the status to not found
    if (selectedLandingPage === null) {
      setStatus("not-found");
    }

    // Set the landing page in the state
    setLandingPage(selectedLandingPage);
  }, [id]);

  return { landingPage, status };
};

export default useView;
