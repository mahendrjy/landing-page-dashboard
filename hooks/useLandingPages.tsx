"use client";
import { useEffect, useState } from "react";
import { LandingPage } from "@/app/interfaces";
import { useRouter } from "next/navigation";

const useLandingPages = () => {
  const router = useRouter();
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // Start the loading state
    setFetching(true);
    let data = [];
    // Retrieve the landing pages data from local storage
    if (localStorage.getItem("landing-pages")) {
      data = JSON.parse(localStorage.getItem("landing-pages") ?? "") ?? [];
    }

    if (data.length > 0) {
      // Create an array with undefined values to simulate skeleton loading
      setLandingPages(Array.from({ length: data.length }));

      // Simulate an asynchronous operation, like fetching data from a server
      setTimeout(() => {
        // Once the data is "fetched", update the landing pages and stop the loading state
        setLandingPages(data);
        setFetching(false);
      }, 1000);
    }
  }, []);

  // Actions
  const onView = (id: string) => router.push(`/view/${id}`);
  const onEdit = (id: string) => router.push(`/edit/${id}`);
  const onDelete = (id: string) => {
    const updatedLandingPages = landingPages.filter((page) => page.id !== id);
    localStorage.setItem("landing-pages", JSON.stringify(updatedLandingPages));
    setLandingPages(updatedLandingPages);
  };

  return { landingPages, onView, onEdit, onDelete, fetching };
};

export default useLandingPages;
