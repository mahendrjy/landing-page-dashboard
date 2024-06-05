"use client";

import { useParams } from "next/navigation";
import { useView } from "@/hooks";
import { LandingPageStatus, LandingPageView } from "@/components/landing-page";

function ViewPage() {
  const { id } = useParams();
  const { landingPage, status } = useView(id);

  if (!landingPage) return <LandingPageStatus status={status} />;

  return <LandingPageView landingPage={landingPage} />;
}

export default ViewPage;
