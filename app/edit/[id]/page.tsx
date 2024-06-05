"use client";

import React from "react";
import Container from "@/components/common/container";
import { useParams } from "next/navigation";
import { useEdit } from "@/hooks";
import { LandingPageEditor } from "@/components/landing-page";

function Edit() {
  const { id } = useParams();
  const { landingPage, onPublish } = useEdit(id);

  if (!landingPage) return <Container className="mt-4">Loading...</Container>;

  return <LandingPageEditor landingPage={landingPage} onPublish={onPublish} />;
}

export default Edit;
