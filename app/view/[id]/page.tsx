"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useView } from "@/hooks";
import { LandingPageView } from "@/components/landing-page";

function ViewPage() {
  const { id } = useParams();
  const { landingPage } = useView(id);

  if (!landingPage) return <div>Loading...</div>;

  return <LandingPageView landingPage={landingPage} />;
}

export default ViewPage;
