import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LandingPage, OnPublish } from "@/app/interfaces";

const useEdit = (id: string | string[]) => {
  const router = useRouter();
  const [status, setStatus] = useState("loading");
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // Get the landing pages from local storage
      let data = [];
      if (localStorage.getItem("landing-pages")) {
        data = JSON.parse(localStorage.getItem("landing-pages") ?? "");
      }

      // Ensure that the data is an array
      Array.isArray(data) || (data = []);

      // Set the landing pages in the state
      setLandingPages(data);

      // Find the landing page with the given id
      const selectedLandingPage =
        data.filter(
          (currentLandingPage: LandingPage) => currentLandingPage.id === id
        )[0] ?? null;

      // If there are no landing pages, set the status to not found
      if (selectedLandingPage === null) {
        setStatus("not-found");
      }

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

  return { landingPage, onPublish, status };
};

export default useEdit;
