"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LandingPageView from "@/components/landing-page-view";
import { Component } from "@/app/interfaces";

const ViewPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    // Get the landing pages from local storage
    const landingPages =
      JSON.parse(localStorage.getItem("landing-pages") ?? "") || [];
    // Find the landing page with the given id
    const page = landingPages.filter((page: Component) => page.id === id)[0];
    // Set the landing page in the state
    setPage(page);
  }, [id]);

  if (!page) return <div>Loading...</div>;

  return <LandingPageView page={page} />;
};

export default ViewPage;
