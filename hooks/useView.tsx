import { LandingPage } from "@/app/interfaces";
import { useEffect, useState } from "react";

const useView = (id: string | string[]) => {
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    // Get the landing pages from local storage
    const landingPages =
      JSON.parse(localStorage.getItem("landing-pages") ?? "") || [];

    // Find the landing page with the given id
    const selectedLandingPage = landingPages.filter(
      (currentLandingPage: LandingPage) => currentLandingPage.id === id
    )[0];

    // Set the landing page in the state
    setLandingPage(selectedLandingPage);
  }, [id]);

  return { landingPage };
};

export default useView;
