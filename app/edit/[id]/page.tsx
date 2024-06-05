"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useEdit } from "@/hooks";
import {
  LandingPageEditor,
  LandingPageStatus,
} from "@/components/landing-page";

function Edit() {
  const { id } = useParams();
  const { landingPage, onPublish, status } = useEdit(id);

  if (!landingPage) return <LandingPageStatus status={status} />;

  return <LandingPageEditor landingPage={landingPage} onPublish={onPublish} />;
}

export default Edit;
