"use client";
import { useRouter } from "next/navigation";
import Container from "../common/container";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

function LandingPageCreateHeader({
  title,
  handleSave,
  handlePublish,
}: {
  title: string;
  handleSave: () => void;
  handlePublish: () => void;
}) {
  const router = useRouter();

  return (
    <Container>
      <div className="flex justify-between items-center py-2">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          {title}
        </div>
        {/* Right */}
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handlePublish}>Publish</Button>
        </div>
      </div>
    </Container>
  );
}

export default LandingPageCreateHeader;
