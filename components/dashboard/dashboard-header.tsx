"use client";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

function DashboardHeader() {
  const router = useRouter();
  const handleCreateNewLandingPage = () => router.push("/create");

  return (
    <header>
      <div className="mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Landing Pages
        </h1>
        <div>
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-600/90"
            onClick={handleCreateNewLandingPage}
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create New Landing Page
          </Button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
