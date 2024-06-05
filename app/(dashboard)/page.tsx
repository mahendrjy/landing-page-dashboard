"use client";

import Container from "@/components/common/container";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import { useLandingPages } from "@/hooks";
import { Separator } from "@radix-ui/react-separator";
import { LandingPageList } from "@/components/landing-page";

function DashboardHome() {
  const { landingPages, onView, onEdit, onDelete, fetching } =
    useLandingPages();

  return (
    <Container>
      <DashboardHeader />
      <Separator className="mt-3 mb-8" />
      <LandingPageList
        landingPages={landingPages}
        fetching={fetching}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Container>
  );
}

export default DashboardHome;
