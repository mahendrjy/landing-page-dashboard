import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { SheetTrigger } from "@/components/ui/sheet";
import { LandingPage } from "@/app/interfaces";
import Container from "../common/container";
import { useRouter } from "next/navigation";

interface EditorHeaderProps {
  landingPage: LandingPage;
}

function LandingPageEditorHeader({ landingPage }: EditorHeaderProps) {
  const router = useRouter();

  return (
    <Container>
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          {landingPage.title}
        </div>

        <div className="flex items-center gap-4">
          <SheetTrigger asChild>
            <Button variant="outline">Preview</Button>
          </SheetTrigger>
        </div>
      </div>
    </Container>
  );
}

export default LandingPageEditorHeader;
