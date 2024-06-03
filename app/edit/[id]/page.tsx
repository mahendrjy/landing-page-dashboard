"use client";
import React, { useState, useEffect, use } from "react";
import { useParams, useRouter } from "next/navigation";
import LandingPageEditor from "@/components/landing-page-editor";
import { LandingPage, OnPublish } from "@/app/interfaces";

const Edit = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);
  const router = useRouter();
  const [landingPages, setLandingPages] = useState([]);

  useEffect(() => {
    // Get the landing pages from local storage
    const data = JSON.parse(localStorage.getItem("landing-pages") ?? "") || [];
    // Set the landing pages in the state
    setLandingPages(data);
    // Find the landing page with the given id
    const landingPage = data.filter((page: LandingPage) => page.id === id)[0];
    // Set the landing page in the state
    setPage(landingPage);
  }, [id]);

  const onPublish = ({ title, description, components, page }: OnPublish) => {
    // Update the landing page with the new data
    const updatedLandingPages = landingPages.map((currentPage: LandingPage) => {
      if (currentPage.id === page.id) {
        return {
          ...page,
          title,
          description,
          status: "live",
          components,
        };
      }
      return currentPage;
    });

    // Save the updated landing pages to local storage
    localStorage.setItem("landing-pages", JSON.stringify(updatedLandingPages));

    // Redirect to the home page
    router.push("/");
  };

  if (!page) return <div>Loading...</div>;

  return <LandingPageEditor page={page} onPublish={onPublish} />;
};

export default Edit;
