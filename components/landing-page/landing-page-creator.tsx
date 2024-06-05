"use client";

import { useState } from "react";
import { Separator } from "../ui/separator";
import { OnCreate } from "@/app/interfaces";
import LandingPageForm from "./landing-page-form";
import LandingPageCreateHeader from "./landing-page-create-header";

interface CreateHeaderProps {
  onCreate: (data: OnCreate) => void;
}

function LandingPageCreator({ onCreate }: CreateHeaderProps) {
  const [title, setTitle] = useState("Untitled Landing Page");
  const [description, setDescription] = useState("");
  const [components, setComponents] = useState<string[]>([]);

  const handleCreate = (status: "live" | "draft") => {
    onCreate({
      title,
      description,
      status,
      components,
    });
  };
  const handleSave = () => handleCreate("draft");
  const handlePublish = () => handleCreate("live");

  const handleComponentChange = (component: string) => {
    setComponents((prev) => {
      if (prev.includes(component)) {
        return prev.filter((c) => c !== component);
      }
      return [...prev, component];
    });
  };

  return (
    <>
      {/* Create Header */}
      <LandingPageCreateHeader
        title={title}
        handleSave={handleSave}
        handlePublish={handlePublish}
      />

      <Separator className="mb-4" />

      {/* Create Form */}
      <LandingPageForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addComponent={handleComponentChange}
        components={components}
      />
    </>
  );
}

export default LandingPageCreator;
