"use client";
import React from "react";
import LandingPageCreateForm from "@/components/landing-page-create-form";
import { useRouter } from "next/navigation";
import { OnCreate } from "../interfaces";
import { nanoid } from "nanoid";

const Create = () => {
  const router = useRouter();

  const onCreate = ({ title, description, status, components }: OnCreate) => {
    let landingPages = [];

    // Get the landing pages from local storage
    if (localStorage.getItem("landing-pages")) {
      landingPages = JSON.parse(localStorage.getItem("landing-pages") ?? "");
    }

    // Update the components with the new data
    const updatedComponents = components.map((component) => ({
      id: nanoid(),
      type: component,
      content: getComponentContent(component),
    }));

    // Add the new landing page to the list
    landingPages.push({
      id: String(Date.now()),
      title,
      description,
      status,
      components: updatedComponents,
    });

    // Save the updated landing pages to local storage
    localStorage.setItem("landing-pages", JSON.stringify(landingPages));

    // Redirect to the home page
    router.push("/");
  };

  return <LandingPageCreateForm onCreate={onCreate} />;
};

function getComponentContent(type: string) {
  switch (type) {
    case "Header":
      return "Welcome to the Sample Page";
    case "Text Block":
      return "This is a sample text block";
    case "Image":
      return "https://www.imagelighteditor.com/img/bg-after.jpg";
    case "Footer":
      return "© 2024 Sample Page";

    default:
      break;
  }
}

export default Create;
