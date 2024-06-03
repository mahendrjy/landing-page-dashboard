"use client";
import useLandingPages from "@/hooks/useLandingPages";
import { Separator } from "@radix-ui/react-separator";
import Container from "@/components/container";
import { renderLandingPagesList } from "./helpers";
import DashboardHeader from "@/components/dashboard-header";
import Header from "@/components/header";

export default function DashboardHome() {
  const { landingPages, onView, onEdit, onDelete, fetching } =
    useLandingPages();

  return (
    <main>
      <Header />
      <Container>
        <DashboardHeader />
        <Separator className="mt-3 mb-8" />
        {renderLandingPagesList({
          landingPages,
          fetching,
          onView,
          onEdit,
          onDelete,
        })}
      </Container>
    </main>
  );
}
