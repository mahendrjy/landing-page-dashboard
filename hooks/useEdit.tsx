import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LandingPage, OnPublish } from "@/app/interfaces";

const useEdit = (id: string | string[]) => {
  const router = useRouter();
  const [landingPages, setLandingPages] = useState([]);
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // Get the landing pages from local storage
      const data =
        JSON.parse(localStorage.getItem("landing-pages") ?? "") || [];

      // Set the landing pages in the state
      setLandingPages(data);

      // Find the landing page with the given id
      const selectedLandingPage = data.filter(
        (currentLandingPage: LandingPage) => currentLandingPage.id === id
      )[0];

      // Set the landing page in the state
      setLandingPage(selectedLandingPage);
    }, 500);
  }, [id]);

  const onPublish = ({
    title,
    description,
    components,
    selectedLandingPage,
  }: OnPublish) => {
    // Get the updated landing pages
    const updatedLandingPages = landingPages.map(
      (currentLandingPage: LandingPage) => {
        if (currentLandingPage.id === selectedLandingPage.id) {
          return {
            ...selectedLandingPage,
            title,
            description,
            status: "live",
            components,
          };
        }
        return currentLandingPage;
      }
    );

    // Save the updated landing pages to local storage
    localStorage.setItem("landing-pages", JSON.stringify(updatedLandingPages));

    // Redirect to the home page
    router.push("/");
  };

  return { landingPage, onPublish };
};

export default useEdit;
