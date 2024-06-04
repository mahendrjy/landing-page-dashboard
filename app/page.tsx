"use client";
import useLandingPages from "@/hooks/useLandingPages";
import { Separator } from "@radix-ui/react-separator";
import Container from "@/components/container";
import DashboardHeader from "@/components/dashboard-header";
import Header from "@/components/header";
import LandingPagesList from "@/components/landing-pages-list";

export default function DashboardHome() {
  const { landingPages, onView, onEdit, onDelete, fetching } =
    useLandingPages();

  return (
    <main>
      <Header />
      <Container>
        <DashboardHeader />
        <Separator className="mt-3 mb-8" />
        <LandingPagesList
          landingPages={landingPages}
          fetching={fetching}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Container>
    </main>
  );
}
